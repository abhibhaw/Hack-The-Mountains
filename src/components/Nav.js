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
      <Navbar color='light' light expand='md' className='fixed-top'>
        <Container fluid={true}>
          <NavbarBrand
            style={{ marginLeft: '20px', marginTop: '-10px' }}
            href='/'
          >
            <FontAwesomeIcon
              icon={faLungsVirus}
              style={{ color: 'red', fontSize: '30px' }}
            />{' '}
            TRACONA
          </NavbarBrand>
          <Nav navbar className=' float-right'>
            <NavItem>
              <NavLink href='/'>
                <h6>HOME</h6>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='/about-covid-19'>
                <h6>COVID-19</h6>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='/prevention'>
                <h6>PREVENTION</h6>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='/about'>
                <h6>ABOUT</h6>
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopBar;
