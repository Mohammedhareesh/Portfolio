import React from 'react'
import { RiBookLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'
import rsoft from "../../assets/images/company/rsoft-icon.png"
import thaagan from "../../assets/images/company/thaagam-icon.png"


const calculateExperienceDuration = (startDate, endDate = new Date()) => {
  const start = new Date(startDate);
  const end = endDate === 'Present' ? new Date() : new Date(endDate);
  
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  
  const formatDuration = () => {
    if (endDate === 'Present') {
      return years > 0 
        ? `${years} year${years > 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`
        : `${months} month${months !== 1 ? 's' : ''}`;
    }
    
    return years > 0 
      ? `${years} year${years > 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`
      : `${months} month${months !== 1 ? 's' : ''}`;
  };
  
  return formatDuration();
};

const ExperienceCard = ({ year, title, institution, isExperience = false, companyIcon }) => {
  const [startDate, endDate] = year.split(' - ');
  const duration = isExperience ? calculateExperienceDuration(startDate, endDate) : null;
  
  return (
    <SlideUp>
      <div className="resume-item">
        <div className="icon">
          {companyIcon ? (
            <img 
              src={companyIcon} 
              alt={`${institution} logo`} 
              className="company-icon" 
              style={{ width: '50px', height: '50px', objectFit: 'contain',}}
            />
          ) : (
            <RiBookLine />
          )}
        </div>
        <div className="content">
          
          <h4>{institution}</h4>
          <span className="company">{title} </span>
          <span className="years">
            {isExperience ? `${year} / ${duration}` : year}
          </span>
        </div>
      </div>
    </SlideUp>
  );
};


const Resume = () => {
  const experienceData = [
    {
      year: 'Dec 2024 - Present',
      title: 'Front-end Developer',
      institution: 'RSoft Technologies',
      icon: rsoft
    },
    {
      year: 'Nov 2022 - Dec 2024',
      title: 'Front-end Developer',
      institution: 'Thaagam Foundation',
      icon: thaagan,
      
    }
  ];

  const educationData = [
    {
      year: '2016 - 2019',
      title: 'Bachelor Degree of Computer Application',
      institution: 'University of Madras'
    }
  ];

  return (
    <section id="resume" className="resume-area">
      <div className="container">
        <div className="resume-items">
          <div className="row">
            {/* Experience Section */}
            <div className="col-xl-6 col-md-6">
              <div className="single-resume">
                <h2>Experience</h2>
                <div className="experience-list">
                  {experienceData.map((exp, index) => (
                    <ExperienceCard 
                      key={index}
                      year={exp.year}
                      title={exp.title}
                      institution={exp.institution}
                      isExperience={true}
                      companyIcon={exp.icon}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Education Section */}
            <div className="col-xl-6 col-md-6">
              <div className="experience-list">
                <div className="single-resume">
                  <h2>Education</h2>
                  {educationData.map((edu, index) => (
                    <ExperienceCard 
                      key={index}
                      year={edu.year}
                      title={edu.title}
                      institution={edu.institution}
                      isExperience={false}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume