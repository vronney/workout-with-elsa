import React, {Component} from 'react';
import './contactMe.css';

class ContactMe extends Component {
    render() {
        return (
            <div id='contactMe'>
            <div className='followMe'>
                <h2 className="follow-me">Follow Me</h2>  
                <a href = "https://www.facebook.com/pages/category/Community/Advocare-Vargas-757890344246706/"
                target="_blank" rel="noopener noreferrer">
                    <img title = "follow me on facebook"
                    alt = "follow me on facebook"
                    src = "https://c866088.ssl.cf3.rackcdn.com/assets/facebook40x40.png"
                    className = "facebook-icon"/>
                </a>
                <a href = "https://www.youtube.com/PLACEHOLDER" target="_blank" rel="noopener noreferrer">
                   <img title="follow me on youtube" 
                   alt = "follow me on youtube"
                   src = "https://c866088.ssl.cf3.rackcdn.com/assets/youtube40x40.png"
                   className="youtube-icon"/>
                </a>
                <a href = "https://www.instagram.com/PLACEHOLDER" target="_blank" rel="noopener noreferrer">
                    <img title = "follow me on instagram"
                    alt = "follow me on instagram"
                    src = "https://c866088.ssl.cf3.rackcdn.com/assets/instagram40x40.png"
                    className = "instagram-icon" / >
                </a>
        </div>
                <h1 className = 'contactMe-text'>Contact Me!</h1>
                <a  href="mailto:ronneyvargas@gmail.com"><img src={require("../Images/iconfinder_mail_1296373.ico")} alt="email-icon" className="email-icon"/></a>
            </div>  
        );
    }
}

export default ContactMe;