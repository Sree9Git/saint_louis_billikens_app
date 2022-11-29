
import logo from "./images/slu_logo.svg";

function LeftPanel() {
   
  return (
    <div  className="w3-sidebar w3-collapse w3-white w3-animate-left" style={{width:'300px'}}  id="mySidebar">
        
      <div className="w3-container"  style={{maxWidth:'300px'}}>
        <a
          href="#"
          onClick="w3_close()"
          className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey"
          title="close menu"
        >
          <i className="fa fa-remove"></i>
        </a>

        <img
          src={logo}
          alt="logo"
          className="w3-round"
          style={{ width: "45%" }}
        />

        <h4>
          <b>Saint Louis Billikens</b>
        </h4>
        <p className="w3-text-gray">Basket Ball Team</p>
      </div>
      <div className="w3-bar-block">
        <p>
          <a
            href="#loginpage"
            onClick="w3_close()"
            className="w3-bar-item w3-button w3-padding"
          >
            <i className="fa fa-user fa-fw w3-margin-right"></i>
            Login/SignUp
          </a>
        </p>
        <p>
          <a
            href="#portfolio"
            onClick="w3_close()"
            className="w3-bar-item w3-button w3-padding w3-text-teal"
          >
            <i className="fa fa-th-large fa-fw w3-margin-right"></i>
            Basket Ball Team
          </a>
        </p>

        <p>
          <a
            href="#about"
            onClick="w3_close()"
            className="w3-bar-item w3-button w3-padding"
          >
            <i className="fa fa-user fa-fw w3-margin-right"></i>
            ABOUT
          </a>
        </p>
        <p>
          <a
            href="#contact"
            onClick="w3_close()"
            className="w3-bar-item w3-button w3-padding"
          >
            <i className="fa fa-envelope fa-fw w3-margin-right"></i>CONTACT
          </a>
        </p>
      </div>
      </div>
    
  );
}

export default LeftPanel;
