
function PhotoGrid1() {
  return (
    <div className="w3-main" style={{ marginLeft: "350px" }} id="portfolio">
      <i class="fa fa-bars"></i>
      <div className="w3-container">
        <h1>
          <b>Saint Louis Billikens</b>
        </h1>
      </div>

      <div className="w3-row-padding">
        <div className="w3-third w3-container w3-margin-bottom">
          <img src={require("./images/basketball5.jpeg")} alt="Team_picture1" style={{width:'100%'}} className="w3-hover-opacity"/>
          <div class="w3-container w3-white">
            <p>
              As Saint Louis University's intercollegiate men's basketball team,
              the Saint Louis Billikens are known as Saint Louis. In the
              Atlantic 10 Conference, they engage in competition.
            </p>
          </div>
        </div>
        <div class="w3-third w3-container w3-margin-bottom">
       
          <img src={require("./images/basketball6.jpeg")} alt="Team_picture2" style={{width:'100%'}} className="w3-hover-opacity"/>
          <div className="w3-container w3-white">

            <p>Four times in the NIT tournament's final, the Billikens have come out on top, and they have only done so
              once (1948)</p>
          </div>

        </div>
        <div className="w3-third w3-container">
        <img src={require("./images/basketball7.jpg")} alt="Team_picture3" style={{width:'100%'}} className="w3-hover-opacity"></img>
        <div className="w3-container w3-white">

          <p>Ten times, most recently in 2019, have they participated in the NCAA Division I men's basketball
            tournament. The NCAA's top Student Manager Squad belongs to them.</p>
        </div>

        </div>

      </div>
      <div className="w3-row-padding">
        <div className="w3-third w3-container w3-margin-bottom">
        <img src={require("./images/basketball10.jpeg")} alt="Team_picture4" style={{width:'100%'}} className="w3-hover-opacity"></img>
        <div className="w3-container w3-white">

          <p>Travis Ford is the head coach at the moment.[2] The Billikens play their home games at Chaifetz Arena.
          </p>

        </div>
        </div>
        <div className="w3-third w3-container w3-margin-bottom">
        <img src={require("./images/basketball11.jpeg")} alt="Team_picture5" style={{width:'100%'}} className="w3-hover-opacity"></img>
        <div className="w3-container w3-white">

          <p>The hiring of Travis Ford as the basketball team's head coach has been announced by Saint Louis University.
          </p>
        </div>
        </div>
        <div className="w3-third w3-container">

        <img src={require("./images/basketball9.jpeg")} alt="Team_picture6" style={{width:'100%'}} className="w3-hover-opacity"></img>
        <div className="w3-container w3-white">
          <p> The Billikens club he took over from Jim Crews had a dismal record of 11-21 in each of the previous two
            seasons..</p>
        </div>
        
        </div>

      </div> 

      <div className="w3-row-padding w3-padding-16" id="about">
          <div className="w3-col m6">
          <img src={require("./images/basketball3.jpeg")} alt="About_picture1" style={{width:'100%'}} ></img>
 
          </div>
          <div className="w3-col m6">
          <img src={require("./images/basketball2.jpeg")} alt="About_picture2" style={{width:'100%'}} ></img>
 
          </div>
      </div>

      <div className="w3-container w3-padding-large" style={{marginBottom:'32px'}}>
      <h4><b>About Billikens</b></h4>
      <p>The men's basketball team representing Saint Louis University in intercollegiate play is known as the Saint
        Louis Billikens. The Atlantic 10 Conference is where they compete. The Billikens play their home games at
        Chaifetz Arena, where Travis Ford serves as the head coach at the moment[2]. The Billikens have made four
        appearances in the NIT tournament's final game and have one victory (1948). The most recent time they
        participated in the NCAA Division I men's basketball tournament was in 2019. In the NCAA, they have the top
        student manager team.</p>
        
        

      </div>

    </div>
  );
}

export default PhotoGrid1;
