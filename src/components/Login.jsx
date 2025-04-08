import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, Form, Input, message } from 'antd';
import loginimage from '../images/loginimage.jpg'

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const [successMessage, setSuccessMessage] = useState(''); // Success message state

  const onFinish = async (values) => {
    setLoading(true);
    setErrorMessage(''); // Reset error message before request
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:3001/user/login', values);
      setSuccessMessage('Welcome'); // Display welcome message on success
      message.success('Login successful!');
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      console.log(error);

      const errorField = error.response.data.status;
      const errorText = error.response?.data?.message

      if (errorField === 'Fail') {
        setErrorMessage('Email or password is incorrect');
      } else if (errorField === 'password') {
        setErrorMessage('Password is incorrect');
      } else {
        setErrorMessage(errorText);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    navigate('/signup');
  };

  return (
    <div className=' min-h-screen bg-center bg-cover' style={{ backgroundImage: `url(${loginimage})` }}>

      <div className='flex items-center justify-center min-h-screen'>
        <div className='min-h-screen bg-center ' style={{ backgroundImage: `url(${loginimage})` }}>
          <div className='flex items-center justify-center min-h-screen'>
            <div className="bg-purple-900 p-8 rounded-lg shadow-md w-full max-w-sm"> {/* Changed Card background and made it responsive */}
              <h2 className="text-2xl text-white font-bold text-center mb-4">Login</h2>

              {errorMessage && <h3 className="text-red-500 text-center">{errorMessage}</h3>} {/* Error message display */}
              {successMessage && <h3 className="text-green-500 text-center">{successMessage}</h3>} {/* Success message */}

              <Form onFinish={onFinish}>
                <Form.Item name="email" rules={[{ required: true, message: "Please enter your email!", type: "email" }]}>
                  <Input size="large" placeholder="Email" className="w-full" /> {/* Made input full width */}
                </Form.Item>

                <Form.Item name='password' rules={[{ required: true, message: "Password is required" }]}>
                  <Input.Password size="large" placeholder="Password" className="w-full" /> {/* Made input full width */}
                </Form.Item>

                <Form.Item>
                  <Button loading={loading} size="large" type="primary" htmlType="submit" block>
                    Login
                  </Button>
                </Form.Item>
              </Form>

              <div className='flex flex-col gap-4 items-center md:flex-row'> {/* Adjusted layout for mobile responsiveness */}
                <p className="text-white">Don't have an account?</p>
                <button
                  onClick={handleClick}
                  className='text-blue-500 bg-blue-100 p-1 rounded-xl hover:bg-blue-600 hover:text-white cursor-pointer'
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Login;
