import React, { Component } from 'react';
import axios from 'axios';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import {
  Spinner,
  Container,
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
} from 'reactstrap';
import '../App.css';
import TopNews from './TopNews';
import TopNewsProvider from './TopNewsProvider';
import QR from '../qr.jpeg';
import { withRouter } from 'react-router-dom';


class LocalData extends Component {
  state = {
    countries: [],
    articles: [],
    cases: null,
    deaths: null,
    active: null,
    critical: null,
    todayCases: null,
    todayDeaths: null,
    country: null,

    recovered: null,

    default_country: null,
    loading: false,
  };

  componentDidMount() {
    axios.get('https://corona.lmao.ninja/v2/countries').then((res) => {
      this.setState({
        countries: res.data.countries,
        loading: true,
      });
    });

    axios
      .get(
        'http://newsapi.org/v2/everything?q=covid19&language=en&sortBy=publishedAt&apiKey=89512655467641419958c682e537a7c7'
      )
      .then((res) => {
        this.setState({
          articles: res.data.articles,
          loading: true,
        });
      });

    axios.get('https://ipapi.co/country').then((res) => {
      this.setState({
        default_country: res.data,
      });
      axios
        .get(`https://corona.lmao.ninja/v2/countries/${res.data}`)
        .then((res) => {
          this.setState({
            cases: res.data.cases,
            deaths: res.data.deaths,
            recovered: res.data.recovered,
            active: res.data.active,
            critical: res.data.critical,
            todayCases: res.data.todayCases,
            todayDeaths: res.data.todayDeaths,
            country: res.data.country,
          });
        });
    });
  }

  setSelectedCountry = (country) => {
    axios
      .get(`https://corona.lmao.ninja/v2/countries/${country}`)
      .then((res) => {
        this.setState({
          cases: res.data.cases,
          deaths: res.data.deaths,
          recovered: res.data.recovered,
          active: res.data.active,
          critical: res.data.critical,
          todayCases: res.data.todayCases,
          todayDeaths: res.data.todayDeaths,
          country: res.data.country,
        });
      });
  };

  render() {
    let html = <Spinner />;
    if (this.state.loading && this.state.default_country !== null) {
      html = (
        <ReactFlagsSelect
          countries={this.state.countries}
          searchable={true}
          defaultCountry={this.state.default_country}
          onSelect={(code) => this.setSelectedCountry(code)}
          selectedSize={20}
          alignOptions='left'
        />
      );
    }

    const mortalityRate = (
      (this.state.deaths / this.state.cases) *
      100
    ).toFixed(2);
    const recoveredRate = (
      (this.state.recovered / this.state.cases) *
      100
    ).toFixed(2);
    const activeRate = ((this.state.active / this.state.cases) * 100).toFixed(
      2
    );
    return (
      <div style={{ marginTop: '20px' }}>
        <div>
          <Container fluid>
            <Row style={{ marginBottom: '35px', marginLeft: '5px' }}>
              <Col sm={4}>
              <div>
              <div style={{paddingTop: '20%', paddingLeft: '10%'}}><h2><a style={{color: 'white', background: '#6c0c99', lineHeight: '70px', padding: '2%', borderRadius: '50px'}} href='https://sumana2001.github.io/Tracona/' target='blank'>{' '}Play The Corona Game!{' '}</a></h2></div>
              <img style={{width: '70%', height:'70%'}} src={QR} />
              <h3 style={{color:'#20B2AA', paddingLeft: '23%'}}><a style={{color: '#0b8f88'}}href="https://go.echoar.xyz/Qai4" target="blank">See the virus in AR</a></h3>
              </div>
              </Col>
              <Col sm={8} style={{ textAlign: 'center', marginTop: '40px' }}>
                <div style={{color: '#0a1963'}}>
                    <h3>Local Country's Update</h3>
                
                </div>
                <div
                  style={{
                    textAlign: 'center',
                    marginTop: '60px',
                    marginLeft: '500px',
                  }}
                >
                  {html}
                </div>
                <h3 style={{ marginLeft: '-300px', marginTop: '-50px' }}>
                  {this.state.country}'s COVID-19 Statistics
                </h3>
                <Row
                  style={{ textAlign: 'center' }}
                  style={{ marginTop: '45px', marginRight: '10px' }}
                >
                  <Col>
                    <Card
                      outline
                      style={{
                        borderColor: '#3185F0',
                        borderWidth: '2px',
                        height: '100px',
                      }}
                      className='shadow-sm'
                    >
                      <h2 style={{ color: '#3185F0' }}>{this.state.cases}</h2>
                      <h4>Total Infected</h4>
                    </Card>
                  </Col>
                  <Col>
                    <Card
                      outline
                      style={{
                        borderColor: '#F03131',
                        borderWidth: '2px',
                        height: '100px',
                      }}
                      className='shadow-sm'
                    >
                      <h2 style={{ color: '#F03131' }}>{this.state.deaths}</h2>
                      <h4>Total Deaths</h4>
                    </Card>
                  </Col>
                  <Col>
                    <Card
                      outline
                      style={{
                        borderColor: '#099714',
                        borderWidth: '2px',
                        height: '100px',
                      }}
                      className='shadow-sm'
                    >
                      <h2 style={{ color: '#099714' }}>
                        {this.state.recovered}
                      </h2>
                      <h4>Total Recovered</h4>
                    </Card>
                  </Col>
                </Row>
                <Row
                  style={{
                    marginTop: '20px',

                    marginRight: '10px',
                  }}
                >
                  <Col>
                    <Card
                      body
                      inverse
                      style={{
                        backgroundColor: '#333',
                        borderColor: '#3185F0',
                        borderWidth: '2px',
                        height: '100px',
                      }}
                      className='shadow-sm'
                    >
                      <h2 style={{ color: '#3185F0', marginTop: '-15px' }}>
                        {this.state.todayCases}
                      </h2>
                      <h4>Infected Today </h4>
                    </Card>
                  </Col>
                  <Col>
                    <Card
                      inverse
                      style={{
                        backgroundColor: '#333',
                        borderColor: '#3185F0',
                        borderWidth: '2px',
                        height: '100px',
                      }}
                      className='shadow-sm'
                    >
                      <h2 style={{ color: '#F03131' }}>
                        {this.state.todayDeaths}
                      </h2>
                      <h4>Deaths Today </h4>
                    </Card>
                  </Col>
                  <Col>
                    <Card
                      outline
                      style={{
                        borderColor: '#F03131',
                        borderWidth: '2px',
                        height: '100px',
                      }}
                      className='shadow-sm'
                    >
                      <h2 style={{ color: '#F03131' }}>{mortalityRate}%</h2>
                      <h4>Mortality Rate </h4>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row style={{ height: '40px', textAlign: 'center' }}>
              <Col sm={3}></Col>
              <Col sm={6}>
                Developed by HackDonalds
              </Col>
              <Col sm={3}></Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default LocalData;
