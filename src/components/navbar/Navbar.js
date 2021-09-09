import React, {useState} from "react";
import { Hamburger, Logo, Nav, Menu, MenuLink } from "./NavbarStle";

const Navbar  = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <Logo to="/">
                <i>{"<CLRSWY/>"}</i><span></span>
            </Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
               <Menu isOpen ={isOpen}>
                <MenuLink to="/about">About</MenuLink>
                <MenuLink 
                to={{pathname : 'https://github.com/orgs/clarusway/dashboard'}}
                target ="_blank"
                rel ="noopener noreferre"
                >
                    Github</MenuLink>
                <MenuLink to="/login">Logout</MenuLink>
            </Menu>
        </Nav>
    )
}
export default Navbar;