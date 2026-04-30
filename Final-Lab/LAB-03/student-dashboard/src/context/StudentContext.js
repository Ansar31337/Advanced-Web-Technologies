import React, { createContext, useState, useEffect } from 'react';

export const StudentContext = createContext();

const initialData = [
  {
    name: 'Ansar',
    id: 'UG02-43-18-001',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ansar',
    gpa: 3.92,
    major: 'Computer Science',
    courses: [
      { name: 'Web Tech', color: '#3b82f6' },
      { name: 'AI', color: '#8b5cf6' }
    ],
    isFavorite: false
  },
  {
    name: 'Alice Johnson',
    id: 'UG02-43-18-002',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
    gpa: 3.85,
    major: 'Software Engineering',
    courses: [
      { name: 'Databases', color: '#10b981' },
      { name: 'Networking', color: '#f59e0b' }
    ],
    isFavorite: false
  }
];

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('students');
    return saved ? JSON.parse(saved) : initialData;
  });
  const [loading, setLoading] = useState(!localStorage.getItem('students'));
  const [searchQuery, setSearchQuery] = useState('');
  const [sortType, setSortType] = useState('default');

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = (newStudent) => {
    setStudents(prev => [...prev, { ...newStudent, isFavorite: false }]);
  };

  const removeStudent = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  };

  const toggleFavorite = (id) => {
    setStudents(prev => prev.map(s => 
      s.id === id ? { ...s, isFavorite: !s.isFavorite } : s
    ));
  };

  return (
    <StudentContext.Provider value={{ 
      students, loading, searchQuery, setSearchQuery, 
      sortType, setSortType, addStudent, removeStudent, toggleFavorite 
    }}>
      {children}
    </StudentContext.Provider>
  );
};
