import React, { useContext, useEffect } from 'react';
import './App.css';
import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';
import AddStudentForm from './components/AddStudentForm';
import { StudentContext } from './context/StudentContext';

function App() {
  const { students, loading, searchQuery, sortType } = useContext(StudentContext);

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
    document.title = `Dashboard — ${filteredAndSortedStudents.length} Students`;
  }, [filteredAndSortedStudents.length]);

  return (
    <div className="dashboard-container">
      <DashboardHeader 
        title="Student Dashboard" 
        tagline="Manage and track student performance effectively" 
      />

      <AddStudentForm />

      <div className="controls-section">
        <SearchBar />
        <SortControls />
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
            />
          ))}
          {filteredAndSortedStudents.length === 0 && (
            <div style={{ textAlign: 'center', gridColumn: '1/-1', padding: '2rem', color: '#64748b' }}>
              No students found
            </div>
          )}
        </main>
      )}
    </div>
  );
}

export default App;
