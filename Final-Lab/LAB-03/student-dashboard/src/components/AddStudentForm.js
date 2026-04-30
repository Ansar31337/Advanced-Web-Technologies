import React, { useState, useContext, useEffect } from 'react';
import { StudentContext } from '../context/StudentContext';

const AddStudentForm = () => {
  const { addStudent, students } = useContext(StudentContext);
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    major: '',
    gpa: '',
    courses: ''
  });
  const [errors, setErrors] = useState({});
  const [showNotification, setShowNotification] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Full Name is required';
    if (!formData.major) newErrors.major = 'Major is required';
    
    if (!formData.id) {
      newErrors.id = 'Student ID is required';
    } else if (isNaN(formData.id)) {
      newErrors.id = 'ID must be numeric';
    } else if (students.some(s => s.id === formData.id)) {
      newErrors.id = 'ID must be unique';
    }

    const gpaNum = parseFloat(formData.gpa);
    if (isNaN(gpaNum) || gpaNum < 0 || gpaNum > 4.0) {
      newErrors.gpa = 'GPA must be between 0 and 4.0';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const coursesArray = formData.courses.split(',').map(c => ({
        name: c.trim(),
        color: '#' + Math.floor(Math.random()*16777215).toString(16)
      })).filter(c => c.name);

      addStudent({
        ...formData,
        gpa: parseFloat(formData.gpa),
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`,
        courses: coursesArray
      });

      setFormData({ name: '', id: '', major: '', gpa: '', courses: '' });
      setShowNotification(true);
    }
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => setShowNotification(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <section className="form-section">
      <h2>Register New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input 
            type="text" 
            value={formData.name} 
            onChange={e => setFormData({...formData, name: e.target.value})} 
          />
          {errors.name && <div className="error-msg">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label>Student ID</label>
          <input 
            type="text" 
            value={formData.id} 
            onChange={e => setFormData({...formData, id: e.target.value})} 
          />
          {errors.id && <div className="error-msg">{errors.id}</div>}
        </div>
        <div className="form-group">
          <label>Major</label>
          <input 
            type="text" 
            value={formData.major} 
            onChange={e => setFormData({...formData, major: e.target.value})} 
          />
          {errors.major && <div className="error-msg">{errors.major}</div>}
        </div>
        <div className="form-group">
          <label>GPA</label>
          <input 
            type="text" 
            value={formData.gpa} 
            onChange={e => setFormData({...formData, gpa: e.target.value})} 
          />
          {errors.gpa && <div className="error-msg">{errors.gpa}</div>}
        </div>
        <div className="form-group">
          <label>Courses (comma separated)</label>
          <input 
            type="text" 
            value={formData.courses} 
            placeholder="Web Tech, AI, Databases"
            onChange={e => setFormData({...formData, courses: e.target.value})} 
          />
        </div>
        <button type="submit" className="submit-btn">Add Student</button>
      </form>
      {showNotification && (
        <div className="notification">
          Student added successfully!
        </div>
      )}
    </section>
  );
};

export default AddStudentForm;
