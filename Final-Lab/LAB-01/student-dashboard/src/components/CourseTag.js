import React from 'react';
import PropTypes from 'prop-types';

const CourseTag = ({ courseName, color }) => {
  return (
    <span 
      className="course-tag" 
      style={{ backgroundColor: color }}
    >
      {courseName}
    </span>
  );
};

CourseTag.propTypes = {
  courseName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CourseTag;
