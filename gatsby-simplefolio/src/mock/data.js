import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jacob Ince | Front-End Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jacob Ince',
  subtitle: "I'm a Front-End Developer",
  cta: 'Find out more',
};

// ABOUT DATA
export const aboutData = {
  img: 'port-prof.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  paragraphFour: '',
  resume: 'https://resume.io/r/PuXp74Ts7', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'StudioExampleScreenshot.png',
    title: 'Studio Example',
    info: 'A clean single page website for StudioExample – a fictional architectural firm.',
    info2:
      'Includes full-page auto scroll with side nav-bar, a variety of transitional animations, contact form submission and text/image on-hover features. Currently not compatible with mobile devices.',
    url: 'https://jacob-ince-studio-example.netlify.app/',
    repo: 'https://github.com/Jacob-Ince/Studio-Example', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'To-do List Screenshot',
    title: 'To-do List',
    info:
      'An interactive To-do List with animations. Built to organise tasks with an easy to use interface.',
    info2: '',
    url: 'https://jacob-ince-to-do-list.netlify.app/',
    repo: 'https://github.com/Jacob-Ince/To-do-List', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'PhotoAppScreenShot.png',
    title: 'PhotoApp',
    info:
      'A bespoke PhotoApp with integrated RESTful JSON API and on hover features for each individual image.',
    info2: '',
    url: 'https://jacob-ince-photoapp.netlify.app/',
    repo: 'https://github.com/Jacob-Ince/PhotoApp', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Would you like to work with me? Let's talk!",
  btn: 'jacob.ince95@gmail.com',
  email: 'jacob.ince95@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jacob-ince-496116200/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Jacob-Ince',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
