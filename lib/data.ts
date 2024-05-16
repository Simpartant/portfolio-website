import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaAngular, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Technology of Computer Science with Second Class Honours",
    location: "Hochiminh, VietNam",
    description:
      "After I graduated. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Frontend Web Developer | Application Developer",
    location: "VIETINFO TECH CORP",
    description:
      "I worked as a Front End developer for 1 year. I also up my Front End skill.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Frontend Web Developer",
    location: "Contemi Solutions",
    description:
      "I have extensive experience with Angular and React from working on three major products at Contemi Solution.",
    icon: React.createElement(FaAngular),
    date: "2020 - 2023",
  },
  {
    title: "Software Engineer",
    location: "Bosch Global Software Technologies",
    description:
      "I'm now a Software Engineer working in Bosch Vietnam. My stack includes Angular, React, TypeScript, Tailwind, Senmatic UI, MongoDB. I have experience with UI/UX and use Figma for my designs.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Anguar",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Senmatic UI",
  "Figma",
  "MongoDB",
  "NGRX",
  "Redux",
  "Express",
  "Azure",
  "Bitbucket"
] as const;
