import React from 'react';
import './Home.css';
import Resume from '../../assets/docs/resume.txt'
const Home = () => {
  return (
    <>
      <div className='container-fluid home-container'>
          <div className='container home-content'>
              <h1>Hi I'm a </h1>
              <h2>MERN STACK DEVELOPER</h2>
              <div className='home-buttons'>
                  <button className='btn btn-hire'>Hire Me</button>
                  <a className='btn btn-cv' href={Resume} download="Faslul Farisa.pdf">My Resume</a>
              </div>
          </div>
      </div>
    </>
  )
}

export default Home