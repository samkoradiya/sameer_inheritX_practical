import React from "react";

const MatchSearch = () =>{
    return(
        <section className="match-section">
                <div className="match-row">
                    
                        <div className="match-search-box">
                            <form className="match-form">
                                <div className="form-group">
                                    
                                    <input type="text" placeholder="Search match here..." className="input-form" />
                                    <div className="search-icon">
                                        <img src="../image/search.svg" alt="search" />
                                    </div>
                                    
                                </div>
                                <button>Find Match</button>
                            </form>
                        </div>
                   
                    <div className="match-col-right">
                        <div className="match-detail">
                            <div className="match-img-row">
                                <div className="soccer-img">
                                    <img src="/image/soccer-2.svg" alt="soccer2" />
                                </div>
                                <div className="soccer-img">
                                    <img src="/image/soccer-1.svg" alt="soccer1" />
                                </div>
                            </div>
                            <div className="match-content">
                                <label><b>01</b> <span></span> <b>02</b></label>
                                <p>24th April , 2023</p>
                                <p>Santiago Bernabéu Stadium</p>
                            </div>
                        </div> 
                    </div>
                    
            </div>
                
            
        </section>
    )
}

export default MatchSearch