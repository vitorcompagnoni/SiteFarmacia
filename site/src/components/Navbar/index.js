import React from 'react';
import { Nav, NavbarContainer, NavLogo } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Hey</NavLogo>
                    <h1>O Meu</h1>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;