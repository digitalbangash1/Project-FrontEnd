import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import logo from './Logo.png';

class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (

            <nav className="NavbarItems">
            
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href = {item.url}>{item.title}</a>
                               {/*  <Link to={item.url}>{item.title}</Link> */}
                            </li>)
                    })}

                </ul>
            </nav>
        )
    }
}
export default Navbar