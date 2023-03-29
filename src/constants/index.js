import {
    javascript,
    html,
    css,
    reactjs,
    redux,
    nodejs,
    mongodb,
    git,
    github,
    project1,
    project2,
    project3
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
      name : 'github',
      icon : github
    }
  ];
  
  
  
  const projects = [
    {
      name: "Memories",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      ],
      image: project1,
      source_code_link: "https://github.com/",
    },
    {
      name: "Chat Application",
      description:
        "Web application that enables users to chat in real-time.Built using Mern-Stack and Socket.io",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image:project2,
      source_code_link: "https://github.com/",
    },
    {
      name: "Shoppingify",
      description:
        "A web-application that allows users to make their shoppinglist, edit,mark the items as completed and provides user with the history of his/her purchases",
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
      image:project3,
      source_code_link: "https://github.com/",
    },
  ];
  
  export {technologies, projects };