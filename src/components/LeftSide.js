import arkaLogo from "../assets/arka-logo.svg";
import paperPeople from "../assets/paper-people.svg";

import "../styles/left-side.css";

const LeftSide = () => {
  return (
    <div className="left-side">
      <div className="arka-logo">
        <img src={arkaLogo} alt="arka logo" />
      </div>

      <div className="paper-people">
        <img src={paperPeople} alt="paper people" />
      </div>

      <div className="hiring-text">
        <p>
          <b> Hire expert freelancers for any job, online</b> <br />
          Millions of small businesses use Freelancer to turn their ideas into
          reality.
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
