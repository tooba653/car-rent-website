
import Image from 'next/image';
import { FaGasPump, FaCogs, FaUser } from 'react-icons/fa'; // For icons

const CarCard = () => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
   
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">CR-V</h2>
        <p className="text-gray-500">SUV</p>


        <div className="my-4">
          <Image
            src="/car 2.webp" 
            alt="Car"
            width={500}
            height={300}
            className="object-cover w-full h-48 rounded-md"
          />
        </div>

      
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <FaGasPump className="text-blue-500" />
            <span>80L</span>
          </div>

        
          <div className="flex items-center space-x-1">
            <FaCogs className="text-gray-500" />
            <span>Manual</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaUser className="text-gray-500" />
            <span>6 People</span>
          </div>
        </div>

        
        <div className="my-4">
          <p className="text-2xl font-bold text-gray-800">$80.00/day</p>
          <p className="text-gray-500">Day</p>
        </div>
        <div className="mt-6">
          <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
