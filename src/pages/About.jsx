import React from 'react'
import { skills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container '>
      <h1 className='head-text'>
        Hello, I am <span className='blue-gradient_text font-semibold 
        drop-shadow'>Qiao Lu</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        • 4+ years’ experience as a Project Manager, which sharpened my leadership, attention to detail and problem-solving skills.
        <br/>
        • Approximately 2 years’ experience in various positions related to Computer Science - Frontend Developer, Data Analyst, Network Assistant and Coding Mentor.
        <br/>
        • Won the Award of the Coca-Cola Scholarship for International Studies in 2023.
        <br/>
        • Efficient Developer with independent website-building experience. 
        <br/>
        • Proficient in Python, Java, C, HTML, CSS, JavaScript, React, Node.js, and Three.js.
        <br/> 
        • Self-motivation, interpersonal, presentation and time management skills developed through diverse work and volunteer experiences. 
        <br/>
        • Adaptability and flexibility skills gained through studying and working abroad and experience participating in an exchange program in the UK.
        <br/>
        • Confident, open to changing environments and intercultural awareness as evidenced by travelling to more than 30 different countries.
        <br/>
        • Quick learner with an interest in learning new concepts and teamwork skills gained through various coursework and job experiences.
        <br/>
        • PADI Scuba Diver, four-year snowboarding tricks player, and three-year paraglider pilot with a certificate.
        <br/>
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) =>(
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>work Experience</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>I've worked in all sorts of roles, levelling up my skills and teaming up with amazing people. Here is the rundown: 
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key = {experience.title}
                date= {experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img 
                    // src={experience.icon}
                    // alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>}
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle:'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base' 
                  stye={{margin: 0}}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) =>(
                    <li key={`experience-point-${index}`}className='text-black-500/50 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200'/>
      <CTA />
    </section>
  )
}

export default About