import React from 'react';
import '../css/About.css';


const About = () => {
  return (
    <div className='About'>
      <img src='/images/Lion.jpg' alt='lion'></img>
      <div className='zoo'>
        <div className='zoo0'>
      <h2>About Bannrkut Zoo</h2>
      <p>
        Bannrkut Zoo has a rich history of conservation, education, and recreation. Established in the early 20th century, it has become a sanctuary for a wide variety of species and a favorite destination for families and animal enthusiasts.
      </p>
      </div>
      <div className='zoo1'>
      <h2>Our Mission</h2>
      <p>
        Our mission is to promote wildlife conservation and provide educational experiences that inspire a deeper understanding of the natural world.
      </p>
      </div>
      <div className='zoo2'>
      <h2>History</h2>
      
      <center>
      <table>
              <thead>
                <tr>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1901:  </strong></td>
                  <td>Bannrkut Zoo was founded by a group of naturalists and animal lovers.</td>
                </tr>
                <tr>
                  <td><strong>1920s:</strong></td>
                  <td>The zoo expanded to include a diverse collection of animals from around the world.</td>
                </tr>
                <tr>
                  <td><strong>1950s:</strong></td>
                  <td>Conservation programs were introduced to protect endangered species.</td>
                </tr>
                <tr>
                  <td><strong>1980s:</strong></td>
                  <td>The zoo's educational programs became a model for other institutions.</td>
                </tr>
                <tr>
                  <td><strong>2000s:</strong></td>
                  <td>Major renovations were completed to enhance animal habitats and visitor experiences.</td>
                </tr>
              </tbody>
            </table>
      </center>
      </div>
      <div className='zoo3'>
      <h2>Future Plans</h2>
      <p>
        We are committed to continuing our legacy of conservation and education with plans to expand our facilities and programs in the coming years.
      </p>
      </div>
      </div>
    </div>
  );
};

export default About;
