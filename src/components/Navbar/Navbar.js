import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import logo from './Logo.png';

/* 
Taken inspiration from a youtube and modified to our requirements
https://www.youtube.com/watch?v=T2MhVxJxsL0&ab_channel=BrianDesign 
*/


class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="NavbarItems">
                <img className="NavLogo" src={logo}></img>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>{item.title}</a>
                            </li>)
                    })}
                </ul>
            </nav>
        )
    }
}
export default Navbar