import { FaChevronDown } from 'react-icons/fa';

const RentalInfo = () => {
  return (
    <div className="space-y-6 p-6 bg-white shadow-lg rounded-lg">
   
      <h2 className="text-xl font-bold">Rental Information</h2>

      <p className="text-gray-600">Please select your rental date</p>
      <div className="flex items-center space-x-3">
   
        <div className="w-6 h-6 bg-blue-500 rounded-full flex justify-center items-center">
          <span className="text-white text-xs"></span>
        </div>
        <span className="text-gray-600">Pick-Up</span>
      </div>

 
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Locations</span>
        </div>
        <div className="w-full border p-2 rounded-md flex justify-between items-center">
          <span className="text-gray-600">Select your city</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Time</span>
        </div>
        <div className="w-full border p-2 rounded-md flex justify-between items-center">
          <span className="text-gray-600">Select your time</span>
          <span className="text-gray-600">&#x2191;</span> 
        </div>
      </div>

      <div className="space-y-2">
        <span className="text-gray-600">Date</span>
        <div className="w-full border p-2 rounded-md flex justify-between items-center">
          <span className="text-gray-600">Select your date</span>
          <span className="text-gray-600">&#x2191;</span>
        </div>
      </div>

      
      <div className="flex items-center space-x-3 mt-6">
   
        <div className="w-6 h-6 bg-blue-500 rounded-full flex justify-center items-center">
          <span className="text-white text-xs"></span>
        </div>
        <span className="text-gray-600">Drop-Off</span>
      </div>

      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Locations</span>
        </div>
        <div className="w-full border p-2 rounded-md flex justify-between items-center">
          <span className="text-gray-600">Select your city</span>
          <span className="text-gray-600">&#x2191;</span> 
        </div>
      </div>

     
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Time</span>
        </div>
        <div className="w-full border p-2 rounded-md flex justify-between items-center">
          <span className="text-gray-600">Select your time</span>
          <span className="text-gray-600">&#x2191;</span>
        </div>
      </div>

      
      <div className="space-y-2">
        <span className="text-gray-600">Date</span>
        <div className="w-full border p-2 rounded-md flex justify-between items-center">
          <span className="text-gray-600">Select your date</span>
          <span className="text-gray-600">&#x2191;</span>
        </div>
      </div>
    </div>
  );
};

export default RentalInfo;
