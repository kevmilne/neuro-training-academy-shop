
import { Clock, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  link: string;
}

const CourseCard = ({ title, description, duration, level, price, features, isPopular, link }: CourseCardProps) => {
  return (
    <div className={`relative bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 ${
      isPopular ? 'border-2 border-red-500 shadow-2xl shadow-red-500/20' : 'border border-gray-700 hover:border-red-500/50'
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <span className="text-3xl font-bold text-red-400">{price}</span>
          <span className="text-gray-400"> / course</span>
        </div>
        <Link 
          to={link}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2"
        >
          <span>Learn More</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
