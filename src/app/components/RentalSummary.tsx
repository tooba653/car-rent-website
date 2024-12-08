import Image from "next/image";
import { FaStar } from "react-icons/fa";

const RentalSummary = () => {
  return (
    <div className="rental-summary max-w-md mx-auto p-6 bg-white shadow-md rounded space-y-6">
     
      <h2 className="text-2xl font-bold"> Rental Summary</h2>

      <p className="text-gray-600">
        Review your rental details below before proceeding to the next step.
      </p>

     
      <div className="flex items-center space-x-4 border border-gray-200 rounded-lg p-4">
        <div className="w-24 h-24 bg-blue-500 flex justify-center items-center rounded-md">
          <Image
            src="/car.webp" 
            alt="Car Image"
            width={60}
            height={60}
            className="object-cover rounded-md"
          />
        </div>
        <div>
          <div className="text-lg font-semibold">Nissan GT-R</div>
          
          <div className="flex items-center space-x-2 mt-1">
            <div className="flex">
              
              {[...Array(4)].map((_, index) => (
                <FaStar key={index} className="text-orange-500" />
              ))}
             
              <FaStar className="text-gray-300" />
            </div>
            
            <span className="text-sm text-gray-500">440+ Reviews</span>
          </div>
        </div>
      </div>

      
      <div className="space-y-2 border border-gray-200 rounded-lg p-4">
        <div className="flex justify-between">
          <span className="text-gray-700">Subtotal:</span>
          <span className="font-semibold">$80.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Tax:</span>
          <span className="font-semibold">$0</span>
        </div>

        
        <div className="flex justify-between items-center border border-gray-300 rounded p-2">
          <input
            type="text"
            placeholder="Apply promo code"
            className="flex-grow text-gray-500 placeholder-gray-400 bg-transparent outline-none"
          />
          <button className="text-blue-500 font-semibold">Apply Now</button>
        </div>
      </div>

      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span className="text-lg font-bold">Total Rental Price:</span>
          <span className="text-lg font-bold">$80.00</span>
        </div>
        <p className="text-sm text-gray-500">
          Overall price includes rental discounts and taxes.
        </p>
      </div>
    </div>
  );
};

export default RentalSummary;
