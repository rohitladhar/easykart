import React from 'react';
const Footer:React.FC=()=>{
    return(
    <div className="footer--container">
        <div className="footer--container--up">
            <div className="footer--container--up--item">
                <h3> Get to Know Us</h3>
                <ul>
                    <li>
                        About Us
                    </li>
                    <li>
                        Career
                    </li>
                    <li>
                        Press Release
                    </li>
                </ul>
            </div>
            <div className="footer--container--up--item">
            <h3> Connect With Us</h3>
                <ul>
                    <li>
                        FaceBook
                    </li>
                    <li>
                        InstaGram
                    </li>
                    <li>
                        Twitter
                    </li>
                </ul>
            </div>
            <div className="footer--container--up--item">
            <h3> Make Money With Us</h3>
                <ul>
                    <li>
                        Sell on EasyKart
                    </li>
                    <li>
                        Become an Affiliate
                    </li>
                    <li>
                        Advertise Your Products
                    </li>
                </ul>
            </div>
            <div className="footer--container--up--item">
            <h3> Let Us Help You</h3>
                <ul>
                    <li>
                        Your Account
                    </li>
                    <li>
                        100% Purchase Protection
                    </li>
                    <li>
                        Help
                    </li>
                </ul>
            </div>
        </div>
        <div className="footer--container--down">
            <span>©</span> All Right Reserved with EasyKart.in 2021.
        </div>
        
    </div>
    )
}

export default Footer;