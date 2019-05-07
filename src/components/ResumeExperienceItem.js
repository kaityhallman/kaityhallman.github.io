import React from 'react';

export default function ResumeExperienceItem({
  organization,
  secondaryOrganization,
  title,
  dateRange,
  secondaryDateRange,
  accomplishments,
}) {
  return (
    <article>
      <h2 className='org'>
        <span>{organization}</span>
        {secondaryOrganization && <span>{secondaryOrganization}</span>}
      </h2>
      <h3 className='title'>{title}</h3>
      <div className='paragraph experience'>
        <div className='date-range'>
          <span>{dateRange}</span>
          {secondaryDateRange && <span>{secondaryDateRange}</span>}
        </div>
        <ul>
          {accomplishments.map((accomplishment) => (
            <li key={accomplishment.id}>{accomplishment.item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}