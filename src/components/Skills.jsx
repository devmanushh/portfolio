// Skills section
import React from "react";
import "./Skills.css";

const techSkills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "CSS", level: 75 },
  { name: "Python", level: 70 }
];

const softSkills = [
  "Teamwork", "Creativity", "Problem Solving", "Communication"
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skills-tech">
          <h3>Technical Skills</h3>
          {techSkills.map((skill, idx) => (
            <div key={idx} className="skill-bar">
              <span>{skill.name}</span>
              <div className="bar-bg">
                <div className="bar-fill" style={{width: `${skill.level}%`}}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="skills-soft">
          <h3>Soft Skills</h3>
          <ul>
            {softSkills.map((s, idx) => <li key={idx}>{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}