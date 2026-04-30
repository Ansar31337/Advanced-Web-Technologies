import React from 'react';
import './App.css';
import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';

const studentsData = [
  {
    name: 'Bruce Wayne',
    id: 'UG02-43-18-001',
    avatar: 'https://img.icons8.com/color/96/batman.png',
    gpa: 3.92,
    major: 'Computer Science',
    courses: [
      { name: 'Web Tech', color: '#3b82f6' },
      { name: 'AI', color: '#8b5cf6' }
    ]
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
    ]
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
    ]
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
    ]
  }
];

function App() {
  return (
    <div className="dashboard-container">
      <DashboardHeader 
        title="Student Dashboard" 
        tagline="Manage and track student performance effectively" 
      />
      
      <main className="student-grid">
        {studentsData.map((student) => (
          <StudentCard 
            key={student.id}
            {...student}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
