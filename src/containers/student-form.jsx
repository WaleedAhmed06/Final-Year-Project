import React, { useState } from 'react';
import GeneralInfo from '../components/studentFormComponent/GeneralInfo';
import ProgramPreferences from '../components/studentFormComponent/ProgramPreferences';
import QualificationInfo from '../components/studentFormComponent/qualificationInfo';
import VoucherDetail from '../components/studentFormComponent/voucherDetail';
import ChangePassword from '../components/studentFormComponent/changePassword';

const StudentForm = () => {
  const [activeTab, setActiveTab] = useState('GeneralInfo');

  const renderContent = () => {
    switch (activeTab) {
      case 'GeneralInfo':
        return <GeneralInfo />;
      case 'ProgramPreferences':
        return <ProgramPreferences />;
      case 'QualificationInfo':
        return <QualificationInfo />;
      case 'VoucherDetail':
        return <VoucherDetail />;
      case 'ChangePassword':
        return <ChangePassword />;
      default:
        return <GeneralInfo />;
    }
  };

  return (
    <div className="container mx-auto mt-6 p-4">
      <div className="flex space-x-4 border-b">
        {['General Info', 'Program Preferences', 'Qualification Info', 'Voucher Detail', 'Change Password'].map((tab, index) => (
          <button
            key={index}
            className={`pb-2 text-sm font-semibold ${
              activeTab === tab.replace(' ', '') ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab(tab.replace(' ', ''))}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default StudentForm;
