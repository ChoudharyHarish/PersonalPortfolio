import {
    javascript,
    html,
    css,
    reactjs,
    redux,
    nodejs,
    mongodb,
    git,
    mysql,
    cpp,
    python,
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
  } from "../assets/img";
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name : 'mysql',
      icon : mysql
    },
    {
      name:'cpp',
      icon:cpp
    },
    {
      name : 'python',
      icon:python
    }
  ];
  
  
  
  const projects = [
    {
      name: "Memories",
      description:
        "MERN Stack Application with User Authentication, user can perform all CRUD operations, User can search and filter posts.User can go to different pages.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
      ],
      image: project1,
      source_code_link: "https://github.com/ChoudharyHarish/Memories-Mern",
      live_url: "https://mern-memories17.netlify.app"
    },
    {
      name: "Shoppingify",
      description:
      "A web-application that allows users to make their shoppinglist, edit,mark the items as completed and provides user with the history of his/her purchases, with a complete user authentication system also.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Material UI",
          color: "green-text-gradient",
        },
        {
          name: "Nodejs",
          color: "pink-text-gradient",
        },
      ],
      image:project2,
      source_code_link: "https://github.com/ChoudharyHarish/Shoppingify",
      live_url:"https://shoppingifyreact.vercel.app/"
    },
    {
      name: "Shopholic Central",
      description:
        "E-Commerce application with full user authentication, cart functionality and advanced searching,sorting,paginating functionalites.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image:project3,
      source_code_link: "https://github.com/ChoudharyHarish/Shopholic_Central",
      live_url:"https://shopholic-central17.vercel.app"
    },
    {
      name: "Find-me-Hotel",
      description:
        "A front-end application built with the help of react and tailwind css help users to find hotels according to their preferences",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind-css",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image:project4,
      source_code_link: " https://github.com/ChoudharyHarish/Hotel-Reservation",
      live_url:"https://reactfindhotel.netlify.app/"
    },
    {
      name: "Test-Your-GK",
      description:
        "Do you know much about geography ?, Test your gk now with this application.Built using HTML,CSS and Javascript, React. Api is used to fetch different Questions ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image:project5,
      source_code_link: "https://github.com/ChoudharyHarish/CountryQuiz",
      live_url:"https://choudharyharish.github.io/CountryQuiz/"
    },
    {
      name: "SpaceTourism",
      description:
        "Are u interested in exploring Space ? Take a look at this simple yet useful html,css,javascript website that provide you with some space info ",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image:project6,
      source_code_link: "https://github.com/ChoudharyHarish/SpaceTourism",
      live_url:"https://choudharyharish.github.io/SpaceTourism/"
    },
  ];
  
  export {technologies, projects };