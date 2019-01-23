import React, {
    Component
} from 'react';
import './navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

library.add(faCaretDown);

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
                <li className="dropbtn">Dropdown<FontAwesomeIcon icon={faCaretDown}/>
                <a className="dropdown-content" href="https://www.advocare.com/140262771/store/catalog/top-sellers" target = "_blank" rel = "noopener noreferrer">Supplements</a>
                </li>
                { /* eslint-disable-next-line */ }
                <li><a href = "#About"> About </a></li>
                { /* eslint-disable-next-line */ }
                <li><a href = "#contactMe"> Contact </a></li >
            </ul>
            </div>
        );
    }
}

export default NavBar;