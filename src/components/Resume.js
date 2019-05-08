import React from 'react';
import ResumeExperienceItem from './ResumeExperienceItem';
import experienceData from '../data/experienceData.json';
import educationData from '../data/educationData.json';
import ResumeEducationItem from './ResumeEducationItem';
import ResumeSkillItems from './ResumeSkillItems';

export default function Resume() {
  return (
    <React.Fragment>
      <a href='/' className='link back-to-home'>Back to home</a>
      <section className='section'>
        <h1 className='resume-header'>Experience</h1>
        {experienceData.map((resumeItem) => <ResumeExperienceItem key={resumeItem.id} {...resumeItem} />)}
      </section>
      <section className='section education-section'>
        <h1 className='resume-header'>Education</h1>
        <div className='education'>{educationData.map((resumeItem) => <ResumeEducationItem key={resumeItem.id} {...resumeItem} />)}</div>
      </section>
      <section className='section skill-section'>
        <h1 className='resume-header'>Skills</h1>
        <ResumeSkillItems />
      </section>
      <p className='emphasized'>PDF resume available upon request.</p>
    </React.Fragment>
  );
}