/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Divider, Nav } from 'rsuite'
import { FaHome } from 'react-icons/fa'
import logo from '../../assets/images/logo/fantom-logo-large.svg'

const NavBar = () => {
    const history = useNavigate()
    const [active, setActive] = useState('home')

    const onSelect = (eventKey: string) => {
        setActive(eventKey)
      }

    return (
        <div className='navBar__container'>
        <div className='navBar__bar'>
            <Nav vertical activeKey={active} appearance={'subtle'} onSelect={onSelect}>
                <Nav.Item eventKey="home" onClick={() => history('/homepage')}>
                <img className='navBar__logo' src={logo} />
                </Nav.Item>
                <Divider />π
            </Nav>
        </div>
    </div>
    )
FaHome
}

export default NavBar