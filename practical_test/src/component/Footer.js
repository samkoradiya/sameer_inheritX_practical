import React from "react";

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="ft-col-1">
                        <label>address</label>
                        <p>47 W 13th St, New York, NY 10011, USA</p>
                    </div>
                    <div className="footer-log">
                        <img src="/image/footer_logo.svg" alt="footer logo" />
                    </div>
                    <div className="ft-col-1 ft-col-2">
                        <label>Contact</label>
                        <p>realsoccerFootball@gmail.com</p>
                        <p>+1 880 18414 12141 </p>
                    </div>
                </div>
                <p>FOOTball© 2023. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer