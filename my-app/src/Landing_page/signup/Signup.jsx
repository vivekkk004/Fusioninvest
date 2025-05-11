import React, { useState } from 'react';
import EmailVerify from './EmailVerify';
import Login from './Login';
import ResetPassword from './ResetPassword';

const Signup = () => {
  const [currentView, setCurrentView] = useState('emailVerify'); // State to track which component to show

  // Render components based on the state
  const renderView = () => {
    switch (currentView) {
      case 'emailVerify':
        return <EmailVerify />;
      case 'login':
        return <Login />;
      case 'resetPassword':
        return <ResetPassword />;
      default:
        return <EmailVerify />;
    }
  };

  return (
    <div>
      <Login/>
   
      {/* {renderView()} */}
    </div>
  );
}

export default Signup;
