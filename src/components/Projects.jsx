// Projects section
import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Futuristic Portfolio",
    desc: "A visually striking portfolio site with React & Vite.",
    link: "https://github.com/devmanushh/portfolio"
  },
  {
    title: "AI Chatbot",
    desc: "Conversational AI assistant built using modern NLP.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}