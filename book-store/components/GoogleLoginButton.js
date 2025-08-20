import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = () => {
  const handleLoginSuccess = async (response) => {
    const tokenId = response.tokenId;  // Get Google token
    // Send token to backend for verification
    const res = await fetch('http://localhost:5000/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: tokenId }),
    });

    const data = await res.json();
    if (data.success) {
      console.log('Login successful');
      // Save token in localStorage or handle user session
    } else {
      console.error('Login failed');
    }
  };

  const handleLoginFailure = (response) => {
    console.error('Google Login Failed:', response);
  };

  return (
    <div>
        <div>
            <form>
                
            </form>
        </div>
      <GoogleLogin
        clientId="google client id"  // Replace with your Google Client ID
        buttonText="Login with Google"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
};

export default GoogleLoginButton;
