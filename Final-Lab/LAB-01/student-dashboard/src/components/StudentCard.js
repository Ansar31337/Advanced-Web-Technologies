import React from 'react';
import PropTypes from 'prop-types';
import CourseTag from './CourseTag';
import StatBadge from './StatBadge';

const StudentCard = ({ name, id, avatar, gpa, major, courses }) => {
  return (
    <div className="student-card">
      <img src={avatar || 'https://via.placeholder.com/80'} alt={name} className="student-avatar" />
      <h3 className="student-name">{name}</h3>
      <div className="student-info">
        ID: {id} | {major}
      </div>
      <div className="course-tags">
        {courses.map((course, index) => (
          <CourseTag key={index} courseName={course.name} color={course.color} />
        ))}
      </div>
      <div className="stat-badges">
        <StatBadge label="GPA" value={gpa} />
        <StatBadge label="Credits" value={90} />
      </div>

    </div>
  );
};

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  gpa: PropTypes.number.isRequired,
  major: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StudentCard;
