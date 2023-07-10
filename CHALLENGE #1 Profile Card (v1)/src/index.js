import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/src/styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="1.jpg" alt="Mahir" />;
}

function Intro() {
  return (
    <div className="intro">
      <h1>Mahir Demir</h1>
      <p>Hello, ı am learning react. I hope ı will be a frontend developer</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML/CSS" color="blue" emoji="💪" />
      <Skill skill="Javascript" color="red" emoji="💪" />
      <Skill skill="Tailwind" color="skyBlue" emoji="💪" />
      <Skill skill="React" color="orange" emoji="💪" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
