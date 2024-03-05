import "./style.css";
import PropTypes from "prop-types";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="./image2.jpeg" alt="avatar"></img>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Luan Nguyen</h1>
      <p>
        I am a sophomore studying computer science at Arizona State University.
        I have a passion to learn Full-stack development.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill color="red" emoij="🚧" skill="HTML + CSS" />
      <Skill color="orange" emoij="🥕" skill="JavaScript" />
      <Skill color="blue" emoij="🍠" skill="C, C++" />
      <Skill color="purple" emoij="🍣" skill="Python" />
      <Skill color="green" emoij="🍡" skill="Java" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>
        {props.skill}
        {props.emoij}
      </span>
    </div>
  );
}

//used to specifiy that the props should be string and are required, helping to catch potential issues early in the development process
Skill.propTypes = {
  color: PropTypes.string.isRequired,
  emoij: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
};

export default App;
