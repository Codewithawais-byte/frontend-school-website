import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import background from '../images/background.png'

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlLogin = ()=>{
    navigate('/login')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/user/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      console.log(response);
      
      if (response.status == 200) {
        setMessage("Sign up successful! Your account has been created.");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else if (response.data.error === "Email already registered") {
        setMessage("Email is already registered.");
     
      } else {
        setMessage(response.data.message || "Sign up failed. Please try again.");
      }
    } catch (error) {
       
        (error.response.data.errors === 'Email is already registered')
            setMessage("Email is already registered :(");
            (error.response.data.errors[0].field === 'password')
            setMessage("Password is short");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen " style={{backgroundImage:`url(${background})`}}>
      <div className="absolute inset-0  bg-opacity-50 h-screen backdrop-blur-sm"></div>
      <div className=" relative bg-purple-900  p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl text-white font-bold mb-6 text-center">Sign Up</h2>
        {message && <p className="text-yellow-300 text-center mb-4">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div >
            <label className="block text-sm font-medium text-white">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="mt-1 p-2 text-gray-600 w-full border border-gray-900 rounded-lg focus:ring focus:ring-white bg-white"
              required
            />
          </div>
          <div >
            <label className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              className="mt-1 p-2 text-gray-600 bg-white w-full  border rounded-lg focus:ring focus:ring-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 text-gray-600 bg-white p-2 w-full border rounded-lg focus:ring focus:ring-white"
              required
            />
          </div> 
          <button
          onClick={handleSubmit}
            type="submit"
            className="w-full text-white p-2 rounded-lg cursor-pointer bg-sky-600 hover:bg-sky-500"
          >
            Sign Up
          </button>
          <div className="text-white justify-center items-center flex gap-4">
          <p>Already have account ? </p>
          <button onClick={handlLogin} className="cursor-pointer border-1 hover:bg-sky-700 rounded-xl  bg-blue-900 text-gray-250 px-2 py-1 ">Login</button>
          </div>
          
        </form>
      </div>
    </div>
  );
}