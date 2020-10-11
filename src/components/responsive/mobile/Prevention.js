import React, { Component } from 'react';
import Bullet from './bullet.png';

export class Prevention extends Component {
  render() {
    return (
<div style={{ marginTop: '80px',marginLeft:'30px',marginRight:'30px'}}>
        <h2 style={{ margin: '20px',textAlign:'center', color: '#B00265'}}>PREVENTION OF COVID-19</h2>
          <div id='contents'>
              <div style={{textAlign: 'justify'}}>
                <h5 style={{ marginTop: '30px',marginBottom:'10px'}}><img style={{display: 'inline-block'}}src={Bullet}/> The following actions help in preventing the spread of Covid-19:</h5>
                  <ul>
                    <li>Avoid close contact with people who are sick.</li>
                    <li>Avoid touching your eyes, nose, and mouth.</li>
                    <li>Stay home when you are sick.</li>
                    <li>Cover your cough or sneeze with a tissue, then throw the tissue in the trash.</li>
                    <li>Clean and disinfect frequently touched objects and surfaces every day.</li>
                    <li>Wash your hands often with soap and water.</li>
                  </ul>
              </div>
              <div>  
              <h5 style={{ marginTop: '30px',marginBottom:'10px'}}><img style={{display: 'inline-block'}}src={Bullet}/> Washing hands effectively:</h5>
                <p style={{textAlign: 'justify'}}>Wash your hands often with soap and water for at least 20 seconds, especially after going to the bathroom; before eating; after blowing your nose, coughing, or sneezing; and after handling anything that's come from outside your home.</p>
                  <ul>
                    <li>If soap and water are not readily available, use an alcohol-based hand sanitizer with at least 60% alcohol, covering all surfaces of your hands and rubbing them together until they feel dry.</li>
                    <li>Always wash hands with soap and water if hands are visibly dirty.</li>
                  </ul>
              </div>
              <div>
              
              <h5 style={{ marginTop: '30px',marginBottom:'10px', textAlign: 'justify'}}><img style={{display: 'inline-block'}}src={Bullet}/> Wearing a face mask:</h5>
                <p style={{textAlign: 'justify'}}>Coronavirus primarily spreads when someone breathes in droplets containing virus that are produced when an infected person coughs or sneezes or when a person touches a contaminated surface and then touches their eyes, nose, or mouth. But people who are infected but do not have symptoms, or have not yet developed symptoms, can also infect others. That's where masks come in.</p>
                <p style={{textAlign: 'justify'}}>A person infected with coronavirus — even one with no symptoms — may emit aerosols when they talk or breathe. Aerosols are infectious viral particles that can float or drift around in the air. Another person can breathe in these aerosols and become infected with the virus. A mask can help prevent that spread. An article published in <em>NEJM</em> in March reported that aerosolized coronavirus could remain in the air for up to three hours.</p>
                <p style={{textAlign: 'justify'}}>What kind of mask should you wear? Because of the short supply, people without symptoms or without exposure to someone known to be infected with the coronavirus can wear a cloth face covering over their nose and mouth. They do help prevent others from becoming infected if you happen to be carrying the virus unknowingly.</p>
                <p style={{textAlign: 'justify'}}>While N95 masks are the most effective, these medical-grade masks are in short supply and should be reserved for healthcare workers.</p>
                <p style={{textAlign: 'justify'}}>Surgical masks are preferred if you are caring for someone who has COVID-19 or you have any respiratory symptoms (even mild symptoms) and must go out in public.</p>
                <p style={{textAlign: 'justify'}}>Masks are more effective when they are tight-fitting and cover your entire nose and mouth. They can help discourage you from touching your face (be sure you're not touching your face more often to adjust the mask). Masks are meant to be used in addition to, not instead of, physical distancing.</p>
              </div>

              <div>
                <h5 style={{ marginTop: '30px',marginBottom:'10px'}}><img style={{display: 'inline-block'}}src={Bullet}/> How does Coronavirus spread?</h5>
                  <p style={{textAlign: 'justify'}}>The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another. Droplets that are produced when an infected person coughs or sneezes may land in the mouths or noses of people who are nearby, or possibly be inhaled into their lungs.</p>
                  <p style={{textAlign: 'justify'}}>A person infected with coronavirus — even one with no symptoms — may emit aerosols when they talk or breathe. Aerosols are infectious viral particles that can float or drift around in the air for up to three hours. Another person can breathe in these aerosols and become infected with the coronavirus. This is why everyone should cover their nose and mouth when they go out in public.</p>
                  <p style={{textAlign: 'justify'}}>Coronavirus can also spread from contact with infected surfaces or objects. For example, a person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes.</p>

                <h5 style={{ marginTop: '30px',marginBottom:'10px'}}><img style={{display: 'inline-block'}}src={Bullet}/> What is social distancing and why is it important?</h5>
                  <p style={{textAlign: 'justify'}}>The COVID-19 virus primarily spreads when one person breathes in droplets that are produced when an infected person coughs or sneezes. In addition, any infected person, with or without symptoms, could spread the virus by touching a surface. The coronavirus could remain on that surface and someone else could touch it and then touch their mouth, nose or eyes. That's why it's so important to try to avoid touching public surfaces or at least try to wipe them with a disinfectant.</p>
                  <p style={{textAlign: 'justify'}}>Social distancing refers to actions taken to stop or slow down the spread of a contagious disease. For an individual, it refers to maintaining enough distance (6 feet or more) between yourself and another person to avoid getting infected or infecting someone else. School closures, directives to work from home, library closings, and cancelling meetings and larger events help enforce social distancing at a community level.</p>
                  <p style={{textAlign: 'justify'}}>Slowing down the rate and number of new coronavirus infections is critical to reduce the risk that large numbers of critically ill patients cannot receive life-saving care. Highly realistic projections show that unless we begin extreme social distancing now — every day matters — our hospitals and other healthcare facilities will not be able to handle the likely influx of patients.</p>
              </div>
           </div>

      </div>
    );
  }
}

export default Prevention;
