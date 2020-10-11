import React, { Component } from 'react';
import { Card, CardBody, Container, Row, Col, Button } from 'reactstrap';

import Chart from 'react-google-charts';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import './Live.scss';

import QR from './qr.jpeg';

class Total extends Component {
  state = {
    all: [],
    loading: false,
  };

  getAll = async () => {
    this.setState({ loading: true });

    const res = await axios.get('https://corona.lmao.ninja/all');

    this.setState({ all: res.data, loading: false });
  };

  componentWillMount() {
    localStorage.getItem('countries') &&
      this.setState({
        countries: JSON.parse(localStorage.getItem('countries')),
        loading: false,
      });
  }

  async componentDidMount() {
    this.getAll();
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('all', JSON.stringify(nextState.countries));
  }

  render() {
    return (
      <div
        className='position-fixed'
        style={{ marginTop: '70px', width: '50%' }}
      >
        <Container className='text-center'>
          <Row>
            <Col xs='3'>
              <div
                className='livenow float-left'
                style={{
                  marginLeft: '-40px',
                  marginTop: '-8px',
                  backgroundColor: 'F00000',
                }}
              >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <h5 style={{ marginLeft: '20px', marginTop: '' }}>LIVE</h5>
              </div>
            </Col>
            <Col xs='9'>
              <h5>
                <FontAwesomeIcon icon={faGlobe} /> COVID-19 Pandemic
              </h5>
            </Col>
          </Row>
          <Row>
            <Col style={{ height: '300px' }}>
            <div style={{paddingTop: '20%', paddingLeft: '10%'}}><h2><a style={{color: 'white', background: '#6c0c99', lineHeight: '70px', padding: '2%', borderRadius: '50px'}} href='https://sumana2001.github.io/Tracona/' target='blank'>{' '}Play The Corona Game!{' '}</a></h2></div>
             <img style={{height: '300px', width: '300px'}} src={QR}/>
             <h3 style={{color:'#20B2AA', paddingLeft: '0'}}><a style={{color: '#0b8f88'}}href="https://go.echoar.xyz/Qai4" target="blank">See the virus in AR</a></h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <hr></hr>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Total;
