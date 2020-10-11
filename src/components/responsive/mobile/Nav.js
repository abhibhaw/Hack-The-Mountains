import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLungsVirus } from '@fortawesome/free-solid-svg-icons';

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar
        color='dark'
        light
        className='fixed-top'
        style={{ padding: '20px' }}
      >
          <div className='logo' style={{color:'white'}}>
            <img style={{display: 'inline-block'}}src='https://www.flaticon.com/svg/static/icons/svg/2790/2790616.svg'/>
            TRACONA
          </div>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className=' text-center' style={{ marginRight: '20px' }}>
            <NavItem>
              <NavLink style={{color:'white'}} href='/'>HOME</NavLink>
            </NavItem>

            <NavItem>
              <NavLink style={{color:'white'}} href='/about-covid-19'>COVID-19</NavLink>
            </NavItem>

            <NavItem>
              <NavLink style={{color:'white'}} href='/prevention'>PREVENTION</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
