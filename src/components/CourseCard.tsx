
import { Clock, Users, Award, ArrowRight } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const CourseCard = ({ title, description, duration, level, price, features, isPopular }: CourseCardProps) => {
  return (
    <div className={`relative bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 ${
      isPopular ? 'border-2 border-green-500 shadow-2xl shadow-green-500/20' : 'border border-gray-700 hover:border-green-500/50'
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
      
      <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
        <div className="flex items-center space-x-1">
          <Clock className="h-4 w-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Award className="h-4 w-4" />
          <span>{level}</span>
        </div>
      </div>
      
      <div className="mb-6">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-gray-300">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <span className="text-3xl font-bold text-green-400">{price}</span>
          <span className="text-gray-400"> / course</span>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2">
          <span>Enroll Now</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
