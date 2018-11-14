import React, {
    Component
} from 'react';
import './navBar.css';

class NavBar extends Component {

    render() {
        return ( 
            <div className = "navBar" >
            <ul>
                { /* eslint-disable-next-line */ }
                <li><a href = "#"> Home </a></li >
                { /* eslint-disable-next-line */ }
                <li><a href = "#"> News </a></li>
                { /* eslint-disable-next-line */ }
                <li><a href = "#About"> About </a></li>
                { /* eslint-disable-next-line */ }
                <li><a href = "#"> Contact </a></li >
            </ul>
            </div>
        );
    }
}

export default NavBar;