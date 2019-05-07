import React from 'react';

export default function ResumeEducationItem({
  organization,
  degree,
  dateRange,
  location,
  honors
}) {
  return (
    <article>
      <h2 className='org'>
        <span>{organization}</span>
      </h2>
      <h3 className='title'>{degree}</h3>
      <div className='paragraph experience'>
        <div className='date-range'>
          {dateRange}
        </div>
        <div className='location'>{location}</div>
        {honors && <div className='honors'>{honors}</div>}
      </div>
    </article>
  );
}