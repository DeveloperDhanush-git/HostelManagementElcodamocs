import React from "react";

const TeamConfirmation = () => {
  return (
    <div className=" font-montserrat flex items-top justify-center min-h-screen bg-white-100">
      <div className="bg-white  rounded-lg p-6 w-200 text-center">
        
        <p className="font-bold -black-700 mt-11 ">You're all set!</p>
        <p className="text-gray-600 py-3">Your visit to The Bunkhouse has been confirmed. We'll see you on</p>
        <h2 className="text-xl font-bold mt-2">Friday, March 15th</h2>
        <div className="mt-4">
        <button className="font-bold w-90 bg-[#69205D] text-white py-2 px-4 rounded-lg  flex justify-center">
        Add to calendar
        </button>

          <button className=" font-bold w-90 bg-gray-100 text-black-600 py-2 px-4 rounded-lg mt-2 hover:bg-gray-300 flex justify-center ">
            Get directions
          </button>
          <button className=" font-bold py-5 w-90 text-black-600 mt-2 hover:underline flex justify-center ">
            View your reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamConfirmation;
