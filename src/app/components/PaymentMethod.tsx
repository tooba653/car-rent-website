import { FaCcVisa, FaPaypal, FaBitcoin } from 'react-icons/fa';

const PaymentMethod = () => {
  return (
    <div className="space-y-6 p-6 bg-white shadow-lg rounded-lg">
      
      <h2 className="text-xl font-bold">Payment Method</h2>

    
      <p className="text-gray-600">Please enter your payment method</p>

   
      <div className="w-full p-4 bg-gray-100 rounded-md flex items-center space-x-4">
        <div className="w-6 h-6 bg-blue-500 rounded-full flex justify-center items-center">
          <span className="text-white text-xs"></span>
        </div>
        <span className="font-bold text-gray-600">Credit Card</span>
    
        <span className="font-bold text-gray-600 ml-2">VISA</span>
        <FaCcVisa size={24} className="text-blue-500 ml-2" />
      </div>

  
      <div className="space-y-2">
        <div className="text-lg font-semibold text-gray-700">Card Number</div>
        <div className="w-full border p-3 rounded-md">
          <input
            type="text"
            placeholder="Card Number"
            className="w-full border-none focus:ring-0"
          />
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-lg font-semibold text-gray-700">Card Holder</div>
        <div className="w-full border p-3 rounded-md">
          <input
            type="text"
            placeholder="Card Holder Name"
            className="w-full border-none focus:ring-0"
          />
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-lg font-semibold text-gray-700">Expiration Date</div>
        <div className="w-full border p-3 rounded-md">
          <input
            type="text"
            placeholder="DD/MM/YY"
            className="w-full border-none focus:ring-0"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-lg font-semibold text-gray-700">CVC</div>
        <div className="w-full border p-3 rounded-md">
          <input
            type="text"
            placeholder="CVC"
            className="w-full border-none focus:ring-0"
          />
        </div>
      </div>

    
      <div className="w-full p-4 bg-gray-100 rounded-md flex items-center space-x-4">
       
        <div className="w-6 h-6 bg-blue-500 rounded-full flex justify-center items-center">
          <span className="text-white text-xs"></span>
        </div>
        <span className="font-bold text-gray-600">PayPal</span>
        <FaPaypal size={24} className="text-blue-500 ml-2" />
      </div>


      <div className="w-full p-4 bg-gray-100 rounded-md flex items-center space-x-4">
        <div className="w-6 h-6 bg-blue-500 rounded-full flex justify-center items-center">
          <span className="text-white text-xs"></span>
        </div>
        <span className="font-bold text-gray-600">Bitcoin</span>
        <FaBitcoin size={24} className="text-blue-500 ml-2" />
      </div>
    </div>
  );
};

export default PaymentMethod;
