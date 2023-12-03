import React from "react";

const Subscribe = () =>{
    return(
        <section className="subscribe-section">
           
                <div className="title">
                    <label>Subscribe</label>
                    <h2>to the our newsletter for soccer TV listings & news.</h2>
                </div>
                
                <form className="subscribe-form">
                    <div className="form-group">
                        <input type="text" className="input-field" placeholder="Enter your Email Address" />
                        <dvi className="icon">
                            <img src="/image/email.svg" alt="email icon" />
                        </dvi>
                    </div>
                    <div className="button-row">
                        <button className="primary-button">
                            <img src="/image/arrowRight.svg" alt="arrow right" />
                        </button>
                    </div>
                </form>
                
         
        </section>
    )
}

export default Subscribe;