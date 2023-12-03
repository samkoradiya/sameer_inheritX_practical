import React from "react";

const OurTeam =()=>{
    return(
        <section className="ourTeam">
            <div className="container">
                <div className="title">
                    <label>OUR Team</label>
                    <h2>match Gallery</h2>
                </div>
                <div className="row team-row">
                    <div className="col-xl-4 col-lg-4 team-col">
                        <div className="team-box">
                            <img src="/image/gallery-1.jpg" alt="gallery-1" />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 team-col">
                        <div className="team-box">
                            <img src="/image/gallery-2.jpg" alt="gallery-2" />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 team-col">
                        <div className="team-box">
                            <img src="/image/gallery-3.jpg" alt="gallery-3" />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 team-col">
                        <div className="team-box">
                            <img src="/image/gallery-4.jpg" alt="gallery-4" />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 team-col">
                        <div className="team-box">
                            <img src="/image/gallery-5.jpg" alt="gallery-5" />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 team-col">
                        <div className="team-box">
                            <img src="/image/gallery-6.jpg" alt="gallery-6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurTeam