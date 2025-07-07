// About section
import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p>
        I'm Soumyaranjan Das, a passionate full stack developer with a love for futuristic technologies.
        I enjoy building performant web apps with modern frameworks and experimenting with new ideas.
      </p>
      <div className="about-timeline">
        <div>
          <h4>2025 - Present</h4>
          <p>Software Developer </p>
        </div>
        <div>
          <h4>2021 - 2025</h4>
          <p>B.Tech in Computer Science, Odisha University of technology and research, Bhubaneswar</p>
        </div>
      </div>
    </section>
  );
}