// Initialize Notyf
const notyf = new Notyf({
    duration: 3000,
    position: {
        x: 'right',
        y: 'top'
    },
    types: [
        {
            type: 'success',
            background: '#4CAF50',
            icon: {
                className: 'notyf__icon--success',
                tagName: 'i'
            }
        },
        {
            type: 'error',
            background: '#F44336',
            icon: {
                className: 'notyf__icon--error',
                tagName: 'i'
            }
        }
    ]
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Text copied to clipboard');
        notyf.success('Certificate number copied: ' + text);
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
        notyf.error('Failed to copy text: ' + err);
    });
}

function verifyCertificate(certificateNumber) {
    copyToClipboard(certificateNumber);
    const verificationUrl = `https://internshala.com/verify_certificate?certificate_number=${encodeURIComponent(certificateNumber)}`;
    
    // Open in a new window with 500x500 dimensions
    window.open(
        verificationUrl,
        'certificateVerification',
        'width=600,height=750,resizable=yes,scrollbars=yes'
    );
}