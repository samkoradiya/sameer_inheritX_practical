import React from "react";


const About = () =>{
    return(
        <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col">
                        <div className="about-left">
                            <img src="/image/about-left.jpg" alt="about img" />
                        </div>
                    </div>
                    <div className="col-xl-6 col">
                        <div className="about-right">
                            <h3>About</h3>
                            <h2>real soccer Football club </h2>
                            <p>The 2018/19 season was the 27th of the Premier League after its formation in 1992. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  when an unknown printer took a galley of type and scrambledit to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960</p>
                            <div className="button-row">
                                <a href="" className="primary-button">find event</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About