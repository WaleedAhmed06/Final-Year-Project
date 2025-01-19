import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdmissionForm from '../containers/admission-form';
import AdmissionFormList from '../containers/admission-form-list';
import AdmissionFormLists from '../containers/admission-form-lists';
import StudentForm from '../containers/student-form';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="admission-form" element={<AdmissionForm />} />
        <Route path="admission-form-list" element={<AdmissionFormList />} />
        <Route path="admission-form-lists" element={<AdmissionFormLists />} />
        <Route path="student-form" element={<StudentForm />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
