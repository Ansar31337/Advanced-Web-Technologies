import React, { useState, useEffect } from 'react';
import './App.css';
import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';

const initialStudents = [
  {
    name: 'Bruce Wayne',
    id: 'UG02-43-18-001',
    avatar: 'https://img.icons8.com/color/96/batman.png',
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
  },
  {
    name: 'Bob Smith',
    id: 'UG02-43-18-003',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
    gpa: 3.50,
    major: 'Cyber Security',
    courses: [
      { name: 'Security', color: '#ef4444' },
      { name: 'Cryptography', color: '#6366f1' }
    ],
    isFavorite: false
  },
  {
    name: 'Charlie Davis',
    id: 'UG02-43-18-004',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
    gpa: 3.75,
    major: 'Information Systems',
    courses: [
      { name: 'ERP', color: '#ec4899' },
      { name: 'UI/UX', color: '#06b6d4' }
    ],
    isFavorite: false
  }
];

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortType, setSortType] = useState('default');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStudents(initialStudents);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleFavorite = (id) => {
    setStudents(prev => prev.map(s => 
      s.id === id ? { ...s, isFavorite: !s.isFavorite } : s
    ));
  };

  const favoriteCount = students.filter(s => s.isFavorite).length;

  const filteredAndSortedStudents = students
    .filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      s.major.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === 'name') return a.name.localeCompare(b.name);
      if (sortType === 'gpa') return b.gpa - a.gpa;
      return 0;
    });

  useEffect(() => {
    const filteredCount = filteredAndSortedStudents.length;
    document.title = `Dashboard — ${filteredCount} Students`;
  }, [filteredAndSortedStudents.length]);

  return (
    <div className="dashboard-container">
      <DashboardHeader 
        title="Student Dashboard" 
        tagline="Manage and track student performance effectively" 
        favoriteCount={favoriteCount}
      />

      <div className="controls-section">
        <SearchBar query={searchQuery} setQuery={setSearchQuery} />
        <SortControls sortType={sortType} setSortType={setSortType} />
      </div>
      
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner-icon"></div>
          Loading student data...
        </div>
      ) : (
        <main className="student-grid">
          {filteredAndSortedStudents.map((student) => (
            <StudentCard 
              key={student.id}
              {...student}
              onToggleFavorite={toggleFavorite}
            />
          ))}
          {filteredAndSortedStudents.length === 0 && !loading && (
            <div style={{ textAlign: 'center', gridColumn: '1/-1', padding: '2rem', color: '#64748b' }}>
              No students found matching "{searchQuery}"
            </div>
          )}
        </main>
      )}
    </div>
  );
}

export default App;
