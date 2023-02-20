import React, { useState, useEffect, useRef } from "react";

function Footer() {

	return (
        // <!-- Footer Div -->
        <div class="footer">
            <footer>
                <div class="container">
                <div class="row">
                    <div class="col-md-3">
                    <img src="dummyimage.jpeg" alt=""/>
                    </div>
                    <div class="col-md-3">
                    <h4>Dealerz</h4>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                        <br/><br/><br/>
                        <li>@2020 TanahAir Studio. All rights reserved.</li>
                    </ul>
                    </div>
                    <div class="col-md-3">
                    {/* <!-- blank div for gap--> */}
                    </div>
                    <div class="col-md-3">
                    <h4>Stay Connected</h4>
                    <ul class="social-icons">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa fa-youtube-play"></i></a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </footer>
            
        </div>
	);
}

export default Footer;