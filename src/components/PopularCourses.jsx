import { ArrowRight } from "lucide-react";
import placeHolder from '../images/Placeholder.png'

const PopularCourses = () => {
  const handleClick = ()=>{
    
  }
  return (
    <div className="bg-dark mt-20 text-white p-8 md:p-16 flex flex-col md:flex-row items-center gap-10">
      {/* Left Side Image */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <div className="absolute w-60 h-40 rounded-full opacity-80 -z-10 blur-2xl"></div>
        <img
          src={placeHolder}
          alt="Kid using phone"
          className="w-72 h-auto rounded-lg shadow-lg "
        />
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="h-1 w-10 bg-red-500 mb-4"></div>
        <h2 className="text-3xl font-bold mb-4">Our Popular Courses</h2>
        <p className="text-gray-300 mb-6">
          Problems trying to resolve the conflict between the two major realms of
          Classical physics: Newtonian mechanics
        </p>
        <button onClick={handleClick} className="text-purple-400 flex items-center cursor-pointer gap-2 hover:underline">
          Learn More <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default PopularCourses;
