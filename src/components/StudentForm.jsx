import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function StudentForm() {
  // Initial State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    courses: "",
  });
  const navigate = useNavigate();
  const [message, SetMessage] = useState("")
  // Course Fee Mapping
  const courseFees = {
    "Web Development": 500,
    "Data Science": 700,
    "Graphic Design": 400,
    "AI & Machine Learning": 1000,
  };

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/courses/admission", {
        name: formData.name,
        email: formData.email,
        courses: formData.courses
      });

      SetMessage(response.data.message);

      console.log(response.data);

    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
      } else {
        SetMessage("Error submitting admission. Please try again.");
      }

      console.error("There was an error!", error);

    }
    // alert(`Student: ${student.name}\nEmail: ${student.email}\nCourse: ${student.course}\nFee: $${courseFees[student.course] || 0}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        
        <h2 className="text-2xl font-bold text-center mb-4">Student Registration</h2>
        {/* Display Message */}
        {message && (
          <p className="mt-4 text-center text-lg font-semibold text-red-600">
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 p-2 w-full border rounded-lg"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 p-2 w-full border rounded-lg"
              required
            />
          </div>

          {/* Course Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Course</label>
            <select
              name="courses"
              value={formData.courses}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg"
              required
            >
              <option value="">Choose a course</option>
              {Object.keys(courseFees).map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          {/* Display Fee Dynamically */}
          {formData.courses && (
            <p className="text-lg font-semibold text-blue-600">
              Fee: ${courseFees[formData.courses]}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-white p-2 rounded-lg bg-blue-600 hover:bg-blue-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
