const BillingInfo = () => {
    return (
      <div className="space-y-6 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-bold">Billing Information</h2>
        <p className="text-gray-600">Please enter your billing details below:</p>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-gray-600"> Name</label>
            <input 
              id="fullName" 
              name="fullName" 
              type="text" 
              placeholder="Your name" 
              title="Your  name"
              className="border p-2 rounded"
              required 
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-600">Address</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="Address" 
              title="Address"
              className="border p-2 rounded"
              required 
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-gray-600">Phone Number</label>
            <input 
              id="phone" 
              name="phone" 
              type="tel" 
              placeholder=" Phone Number" 
              title=" phone Number"
              className="border p-2 rounded"
              required 
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-gray-600">Town/city</label>
            <input 
              id="phone" 
              name="phone" 
              type="tel" 
              placeholder="Town or city" 
              title="Town or city"
              className="border p-2 rounded"
              required 
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default BillingInfo;
  