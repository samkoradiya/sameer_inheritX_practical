import React from "react";

const TopPlayer = () =>{
    return(
        <section className="top_player_section">
            <div className="container">
                <div className="title">
                    <label>Top</label>
                    <h2>Players</h2>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col">
                        <div className="team_box">
                            <div className="img">
                                <img src="image/team-1.jpg" alt="team1" />
                            </div>
                            <h3>RICCARDO SCIREA</h3>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col">
                        <div className="team_box">
                            <div className="img">
                                <img src="image/team-2.jpg" alt="team2" />
                            </div>
                            <h3>DANI MARTINEZ</h3>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col">
                        <div className="team_box">
                            <div className="img">
                                <img src="image/team-3.jpg" alt="team3" />
                            </div>
                            <h3>TAKEHIRO KANEGI</h3>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col">
                        <div className="team_box">
                            <div className="img">
                                <img src="image/team-4.jpg" alt="team4" />
                            </div>
                            <h3>DREW FEIG</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TopPlayer;