function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} 


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#github-profile", onClick: props.toggleMenu }, "GITHUB")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "https://resume.sydali.me/", onClick: props.toggleMenu }, "RESUME")),
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))), /*#__PURE__*/
    React.createElement(SocialLinks, null))));
};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "Syed ", /*#__PURE__*/

    React.createElement("strong", null, "Yusuf Ali")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "I am a"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "web developer"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "&"), " student.")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "my portfolio"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "get in touch"))))
  );
};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Who's this guy?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "My name is Syed Yusuf Ali."), /*#__PURE__*/
    React.createElement("p", null, "I am a web developer and engineer"), /*#__PURE__*/
    React.createElement("p", null, "I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new things; the more, the better.")), /*#__PURE__*/
    
  
  
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "What does he do?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/
    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "NOTHING!!."), /*#__PURE__*/
    React.createElement("p", null, "I mean as of now!"),
    React.createElement("p", null, "However.., "),
    React.createElement("p", null, "For the Front-end I usually work with Javascript, TypeScript including popular frameworks like ReactJS and it's buddy Next.js. I also make the web pretty by using CSS and, whenever needed, any of their friends: Tailwind CSS, Bootstrap, etc.")), /*#__PURE__*/
    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("p", null, "For backend development, I excel with Node.js while leveraging Python's FASTAPI and Restful APIs for agile scripting. I deploy my applications on cutting-edge serverless platforms like Vercel or Netlify, as well as on the robust infrastructures of Heroku and Azure, all seamlessly managed with Docker.")), /*#__PURE__*/
    /*# What else? */

    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", { className: "subtitle" }, "What else?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("p", null, "I am currently pursuing my engineering from MVJ College of Engineering located in the Silicon Valley of India!")), /*#__PURE__*/

    /*# My Certifications */

    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", { className: "subtitle" }, "My Certifications!"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/
    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("div", { className: "course-link", style: { textAlign: "center" } },
    React.createElement("a", { href: "/certificates/index.html", onClick: props.toggleMenu, style: { fontStyle: "italic", textDecoration: "underline" }, target: "_blank" }, "Course Certificate ", " ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })),
    React.createElement("p",{ClassName: "separator"}),
    React.createElement("p", null, "I have completed my different courses from online education provider like coursera and scrimba.. etc; you can see all my certificates by clicking on the link.")))), /*#__PURE__*/
    
    

    /*# My Resume */

    React.createElement("div", { className: "title" },
    React.createElement("h3", { className: "subtitle" }, "View My Resume"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })),
    React.createElement("div", { className: "desc full" },
    React.createElement("div", { className: "resume-link", style: { textAlign: "center"  } },
    React.createElement("a", { href: "/resume/index.html", onClick: props.toggleMenu, style: { fontStyle: "italic", textDecoration: "underline" } }, "My Resume", " ",
    React.createElement("i", { className: "fas fa-external-link-alt" })),
    React.createElement("p",{ClassName: "separator"}),
    React.createElement("p", null, "You can View my resume by clicking on the link above.")))), /*#__PURE__*/
    
    /*# My Internship */
    
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", { className: "subtitle" }, "Internships"), /*#__PURE__*/ 
    React.createElement("p", { className: "separator" })), /*#__PURE__*/
    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("div", { className: "internship-link", style: { textAlign: "center" } },
    React.createElement("a", { href: "/Internship/index.html", onClick: props.toggleMenu, style: { fontStyle: "italic", textDecoration: "underline" } }, "Internship Certificate", " ",
    React.createElement("i", { className: "fas fa-external-link-alt" })),
    React.createElement("p",{ClassName: "separator"}),
    React.createElement("p", null, "You can verify my certificates by clicking on the link above.")
  )
))))
};
  



/***********************
  Project Component
 ***********************/

  const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })))))
  );

};



/***********************
 Projects Component
***********************/

    const Projects = props => {
    return /*#__PURE__*/(
      React.createElement("section", { id: "projects" }, /*#__PURE__*/
      React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
      React.createElement("div", { className: "heading" }, /*#__PURE__*/
      React.createElement("h3", { className: "title" }, "My Works"), /*#__PURE__*/
      React.createElement("p", { className: "separator" }), /*#__PURE__*/
    
    
      React.createElement(Project, {
      title: "Tic-Tac-Toe Game.",
      img: 'https://raw.githubusercontent.com/syedd07/sydali.me/gh-pages/src/tic-tac-toe.svg',
      tech: "js react css",
      link: "/game/src/index.html",
      repo: "https://github.com/syedd07/game" }, /*#__PURE__*/

      React.createElement("small", null, "Built using React, CSS and SVG."), /*#__PURE__*/
      React.createElement("p", null, "A Tic-Tac-Toe game with a basic AI algorithm made for the legacy front-end projects.")
      ), /*#__PURE__*/

      /**************
      Project 2
      *************/
      React.createElement(Project, {
      title: "Rubik's Cube",
      img: "https://raw.githubusercontent.com/syedd07/sydali.me/gh-pages/src/Rubik's_cube.svg",
      tech: "js ThreeJS  css",
      link: "/the-cube/dist/index.html",
      repo: "https://github.com/syedd07/sydali.me/tree/gh-pages/Rubik's%20Cube" }, /*#__PURE__*/

      React.createElement("small", null, "Built using ThreeJS, CSS."), /*#__PURE__*/
      React.createElement("p", null, "A Rubik's Cube made using ThreeJS and CSS.")), /*#__PURE__*/
    
      /**************
     Project 3
    ***************/
    React.createElement(Project,{
      title: "Splitify",
      img: "/src/splitify.png",
      tech: "react js Supabase Tailwind CSS Node.js n8n",
      link: "https://ccardly.netlify.app/",
      repo: "https://github.com/syedd07/splitify" }, /*#__PURE__*/
    React.createElement("small", null, "Built using React, Supabase, Tailwind CSS, Node.js, n8n."), /*#__PURE__*/
    React.createElement("p", null, "Splitify is an app and a PWA, that allows you to split bills with your friends and family. It uses Supabase for the backend, Tailwind CSS for styling, and n8n for automation.")), /*#__PURE__*/

    /****************
    Project 4
    ***************/
    React.createElement(Project, {
      title: "PureText Ai",
      img: "/src/puretextai.jpg",
      tech: "react css js",
      link: "https://puretextai.netlify.app/",
      repo: "https://github.com/syedd07/PureText-AI"
    }, /*#__PURE__*/
    React.createElement("small", null, "Built using Nextjs, Python, FastAPI."), /*#__PURE__*/
    React.createElement("p", null, "An AI-powered plagiarism checker, integrated with OpenAI's vector embeddings, Hugging face AI Modals, Facebook's FAISS, Google's Programmable engine and Zyte web scrapping.")))))
    );
};


/***********************
  GitHub Profile Component
 ***********************/

const GitHubProfile = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "github-profile" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "GitHub Activity"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "github-content" }, /*#__PURE__*/
    React.createElement("div", { className: "commit-graph" }, /*#__PURE__*/
    React.createElement("img", { 
      src: "https://ghchart.rshah.org/syedd07",
      alt: "GitHub Contribution Graph",
      className: "github-contribution-chart",
      style: { 
        width: "100%", 
        maxWidth: "800px", 
        height: "auto",
        margin: "0 auto 3rem",
        display: "block",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }
    })), /*#__PURE__*/

    React.createElement("div", { className: "github-profile-link" }, /*#__PURE__*/
    React.createElement("a", { 
      href: "https://github.com/syedd07",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "github-profile-btn",
      style: { 
        display: "inline-block",
        padding: "15px 30px", 
        background: "#f300b4",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "25px",
        fontSize: "1.6rem",
        fontWeight: "600",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 12px rgba(243, 0, 180, 0.3)"
      }
    }, "View Full GitHub Profile ", /*#__PURE__*/
    React.createElement("i", { className: "fab fa-github", style: { marginLeft: "8px" } }))))))
  );
};


/***********************
  Contact Component
  ***********************/
  const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "Want to ", /*#__PURE__*/
    React.createElement("br", null), "contact me?"), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
    '',
    React.createElement("span", { className: "mail" }, "syedyusufali6626@gmail.com", /*#__PURE__*/))), /*#__PURE__*/
    React.createElement(SocialLinks, null)), /*#__PURE__*/
    React.createElement("form", { id: "contact-form", method: "POST", action: "https://api.web3forms.com/submit" }, /*#__PURE__*/
    React.createElement("input", { type: "hidden", name: "access_key", value: "83216218-34fe-40ee-b793-d0089a139cdd" }), /*Use your Public key*/
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), /*#__PURE__*/
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" }))))
  );
};

/***********************
  Footer Component
 ***********************/
  const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Syed Ali."), /*#__PURE__*/
    React.createElement(SocialLinks, null)))
  );
  };

  
 /***********************
  Social Links Component
 ***********************/

  const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://www.linkedin.com/in/syedd07/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's LinkedIn Profile" },
      ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-linkedin" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/syedd07",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-github" })), /*#__PURE__*/
  
    React.createElement("a", {
      href: "https://www.facebook.com/syedd07/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Facebook Profile" },
      ' ', /*#__PURE__*/
    
      React.createElement("i", { className: "fab fa-facebook" })),
    React.createElement("a", {
      href: "https://www.instagram.com/syedd07/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Instagram Profile" },
      ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-instagram" })), /*#__PURE__*/
     
    React.createElement("a", {
      href: "https://wa.me/+918152987692/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Instagram Profile" },
      ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-whatsapp" })),

    React.createElement("a", {
      href: "https://twitter.com/syedd07",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Twitter profile" },
      ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-twitter" }))
    
    ))
    
};



/***********************
  Main Component
 ***********************/

  class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(GitHubProfile, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));
      


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}

  ReactDOM.render( React.createElement(App, null), document.getElementById('app'));