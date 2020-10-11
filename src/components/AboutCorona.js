import React, { Component } from 'react';
import './AboutCorona.css';

class AboutCorona extends Component {
  render() {
    return (
      <div >
        <div style={{margin: '80px' }}>
          <h1 style={{textAlign: 'center', color: '#000080'}}>COVID-19</h1>
          <br/>
          <p>COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019. COVID-19 is now a pandemic affecting many countries globally.</p>
          <p>The coronavirus family causes illnesses ranging from the common cold to more severe diseases such as severe acute respiratory syndrome (SARS) and Middle East respiratory syndrome (MERS), according to the WHO.

            They circulate in animals and some can be transmitted between animals and humans. Several coronaviruses are circulating in animals that have not yet infected humans.

            The new coronavirus, the seventh known to affect humans, has been named <b>COVID-19</b>.</p> 
          <p>Coronaviruses are zoonotic, meaning they are transmitted between animals and people. Detailed investigations found that SARS-CoV was transmitted from civet cats to humans and MERS-CoV from dromedary camels to humans. Several known coronaviruses are circulating in animals that have not yet infected humans.</p>     
          <p>Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death.</p>
          <p>Standard recommendations to prevent infection spread include regular hand washing, covering mouth and nose when coughing and sneezing, thoroughly cooking meat and eggs. Avoid close contact with anyone showing symptoms of respiratory illness such as coughing and sneezing.</p>
        </div>
        <div class="box" style={{ margin: '80px' }}>
        <p class="heading"><b>FAQs</b></p>
        <div class="faqs">
           <details>
              <summary>What is COVID-19?</summary>
              <p class="text">COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019. COVID-19 is now a pandemic affecting many countries globally.</p>
           </details>
           <details>
              <summary>What are the symptoms of COVID-19?</summary>
              <p class="text">The most common symptoms of COVID-19 are fever, dry cough, and tiredness. Other symptoms that are less common and may affect some patients include aches and pains, nasal congestion, headache, conjunctivitis, sore throat, diarrhea, loss of taste or smell or a rash on skin or discoloration of fingers or toes. These symptoms are usually mild and begin gradually. Some people become infected but only have very mild symptoms.

              Most people (about 80%) recover from the disease without needing hospital treatment. Around 1 out of every 5 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart and lung problems, diabetes, or cancer, are at higher risk of developing serious illness.  However, anyone can catch COVID-19 and become seriously ill.  People of all ages who experience fever and/or  cough associated withdifficulty breathing/shortness of breath, chest pain/pressure, or loss of speech or movement should seek medical attention immediately. If possible, it is recommended to call the health care provider or facility first, so the patient can be directed to the right clinic.</p>
           </details>
           <details>
              <summary>What should I do if I have COVID-19 symptoms and when should I seek medical care?</summary>
              <p class="text">If you have minor symptoms, such as a slight cough or a mild fever, there is generally no need to seek medical care. Stay at home, self-isolate and monitor your symptoms. Follow national guidance on self-isolation.

               However, if you live in an area with malaria or dengue fever it is important that you do not ignore symptoms of fever.  Seek medical help.  When you attend the health facility wear a mask if possible, keep at least 1 metre distance from other people and do not touch surfaces with your hands. If it is a child who is sick help the child stick to this advice.

              Seek immediate medical care if you have difficulty breathing or pain/pressure in the chest. If possible, call your health care provider in advance, so he/she can direct you to the right health facility.</p>
           </details>
           <details>
              <summary>How does COVID-19 spread?</summary>
              <p class="text">People can catch COVID-19 from others who have the virus. The disease spreads primarily from person to person through small droplets from the nose or mouth, which are expelled when a person with COVID-19 coughs, sneezes, or speaks. These droplets are relatively heavy, do not travel far and quickly sink to the ground. People can catch COVID-19 if they breathe in these droplets from a person infected with the virus.  This is why it is important to stay at least 1 meter) away from others. These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails.  People can become infected by touching these objects or surfaces, then touching their eyes, nose or mouth.  This is why it is important to wash your hands regularly with soap and water or clean with alcohol-based hand rub.

               WHO is assessing ongoing research on the ways that COVID-19 is spread and will continue to share updated findings. </p>
           </details>
           <details>
              <summary>Is there a vaccine, drug or treatment for COVID-19?</summary>
              <p class="text">While some western, traditional or home remedies may provide comfort and alleviate symptoms of mild COVID-19, there are no medicines that have been shown to prevent or cure the disease. WHO does not recommend self-medication with any medicines, including antibiotics, as a prevention or cure for COVID-19. However, there are several ongoing clinical trials of both western and traditional medicines. WHO is coordinating efforts to develop vaccines and medicines to prevent and treat COVID-19 and will continue to provide updated information as soon research results become available.

 

The most effective ways to protect yourself and others against COVID-19 are to:

Clean your hands frequently and thoroughly
Avoid touching your eyes, mouth and nose
Cover your cough with the bend of elbow or tissue. If a tissue is used, discard it immediately and wash your hands.
Maintain a distance of at least 1 metre from others. </p>
           </details>
           <details>
              <summary>Are antibiotics effective in preventing or treating COVID-19?</summary>
              <p class="text">No. Antibiotics do not work against viruses; they only work on bacterial infections. COVID-19 is caused by a virus, so antibiotics do not work. Antibiotics should not be used as a means of prevention or treatment of COVID-19. In hospitals physicians will sometimes use antibiotics to prevent or treat secondary bacterial infections which can be a complication of COVID-19 in severely ill patients. They should only be used as directed by a physician to treat a bacterial infection.</p>
           </details>
           <details>
              <summary>Should I worry? How can I protect myself?</summary>
              <p class="text">The WHO declared the virus a pandemic on March 11 and said it was “deeply concerned by the alarming levels of spread and severity” of the outbreak.

                The WHO recommends basic hygiene such as regularly washing hands with soap and water, and covering your mouth with your elbow when sneezing or coughing.

                Maintain “physical distancing” – keeping at least 1 metre (three feet) between yourself and others – particularly if they are coughing and sneezing, and avoid touching your face, eyes and mouth with unwashed hands.

                Avoid unnecessary, unprotected contact with animals and be sure to thoroughly wash hands after contact.</p>
           </details>
        </div>
     </div>
  
      </div>
    );
  }
}

export default AboutCorona;
