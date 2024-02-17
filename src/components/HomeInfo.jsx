import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText}) => (
    <div className='info-box'>
       <p className='font-medium sm:text-xl text-center'>{text}</p>
       <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
       </Link>
    </div>
)

const renderContent = {
    1 : (
        <h1 className='sm:text-xl sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Qiao Lu</span> 👋
            <br/>
            A Computer Science student looking for a Co-op position.
        </h1>
    ),
    2 : (
        <InfoBox 
          text='Approximately 2 years’ experience in various positions related to Computer 
          Science - Frontend Developer, Data Analyst, Network Assistant and Coding 
          Mentor.'
          link='/about'
          btnText='Learn more'
        />
    ),
    3 : (
        <InfoBox 
          text='Multiple projects have been made to prove all kinds of my skills. Curious about them?'
          link='/projects'
          btnText='Visit my portfolio'
        />
    ),
    4 : (
        <InfoBox 
          text='Looking for a Software Engineering/Developer intern? I am just a few keystrokes away!'
          link='/contact'
          btnText="Let's talk"
        />
    ),
}

const HomeInfo = ({ currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo