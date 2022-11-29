function Footer() {
  
    return (
        <div className="w3-main" style={{ marginLeft: "350px" }}>
            <div className="w3-container w3-padding-large w3-grey">
                <h4 id="contact"><b>Contact Us</b></h4>
                <div className="w3-row-padding w3-center w3-padding-24" style={{margin:'0 -16px'}}>
                    <div class="w3-third w3-dark-grey">
                    <p><i className="fa fa-envelope w3-xxlarge w3-text-light-grey"></i></p>
                        <p>basketball_slu_team@email.com</p>
                    </div>
                    <div className="w3-third w3-teal">
                        <p><i className="fa fa-map-marker w3-xxlarge w3-text-light-grey"></i></p>
                        <p>St Louis, US</p>
                    </div>
                    <div className="w3-third w3-dark-grey">
                        <p><i className="fa fa-phone w3-xxlarge w3-text-light-grey"></i></p>
                        <p>+1(314)-000-1112</p>
                    </div>

                </div>
                <hr class="w3-opacity"/>


            </div>
            <footer className="w3-container w3-padding-32 w3-dark-grey">
        <div className="w3-row-padding">
          <div className="w3-third">

          </div>


          <h5 style={{textAlign: 'center'}}>SLU BASKET BALL TEAM</h5>
          <p style={{textAlign: 'center'}}>©Copyrights. All rights reserved.
          <a href="https://creativecommons.org" target="_blank">creativecommons.org</a> </p>
              

        </div>
      </footer>
        </div>
      );
}

export default Footer;
