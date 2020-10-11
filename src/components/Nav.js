import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  Container
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLungsVirus } from '@fortawesome/free-solid-svg-icons';

const TopBar = props => {
  return (
    <div>
      <Navbar color='dark' light expand='md' className='fixed-top'>
        <Container fluid={true}>
          <NavbarBrand
            style={{ marginLeft: '20px', marginTop: '-10px' }}
            href='/'
          >
          <div className='logo' style={{color:'white'}}>
            <img style={{display: 'inline-block'}}src='https://www.flaticon.com/svg/static/icons/svg/2790/2790616.svg'/>
            TRACONA
          </div>
            
          </NavbarBrand>
          <Nav navbar className=' float-right'>
            <NavItem>
              <NavLink href='/'>
                <h6 style={{color:'white', letterSpacing: '2.5px'}}>HOME</h6>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='/about-covid-19'>
                <h6 style={{color:'white',letterSpacing: '2.5px'}}>COVID-19</h6>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='/prevention'>
                <h6 style={{color:'white',letterSpacing: '2.5px'}}>PREVENTION</h6>
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopBar;
