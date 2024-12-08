import { FaLock } from 'react-icons/fa';

const Confirmation = () => {
  return (
    <div className="space-y-6 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold">Confirmation</h2>

    
      <p className="text-gray-600">We are getting to the end. Just a few clicks and your rental is ready!</p>

      <div className="space-y-4">
     
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 border-2 border-blue-500 rounded-sm flex justify-center items-center">
            <div className="w-3 h-3 bg-blue-500"></div>
          </div>
          <span className="text-gray-600 text-sm">I agree with sending marketing and newsletter emails. No spam, promised!</span>
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 border-2 border-blue-500 rounded-sm flex justify-center items-center">
            <div className="w-3 h-3 bg-blue-500"></div>
          </div>
          <span className="text-gray-600 text-sm">I agree with our terms and conditions and privacy policy.</span>
        </div>
        <div className="w-full bg-blue-500 text-white text-center py-2 rounded-md cursor-pointer">
          <span className="font-semibold">Rent Now</span>
        </div>
        <div className="flex items-center space-x-2 mt-6">
          <FaLock className="text-blue-500 text-xl" />
          <div className="text-sm">
            <span className="font-semibold">All your data are safe</span>
            <p className="text-gray-600">We are using the most advanced security to provide you the best experience ever.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
