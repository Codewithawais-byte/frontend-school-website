import { Star } from "lucide-react";
import profile1 from '../images/profile1.jpg'
import profile2 from '../images/profile2.jpg'

const testimonials = [
  {
    name: "Regina Miles",
    role: "Designer",
    review:
      "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    rating: 4,
    image: profile1
  },
  {
    name: "Alexa",
    role: "Designer",
    review:
      "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    rating: 5,
    image: profile2
  },
];
console.log(testimonials);

const Testimonials = () => {
  return (
    <div className=" text-white p-8 md:p-16 mt-20">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h4 className="text-purple-400 font-semibold">Testimonials</h4>
        <h2 className="text-3xl font-bold mt-2">Video in Live Action</h2>
        <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white text-black p-6  shadow-lg text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-600 mb-4">{testimonial.review}</p>
            <div className="flex justify-center gap-1 text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill={i < testimonial.rating ? "#facc15" : "none"} stroke="#facc15" />
              ))}
            </div>
            <h3 className="font-bold text-lg">{testimonial.name}</h3>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
