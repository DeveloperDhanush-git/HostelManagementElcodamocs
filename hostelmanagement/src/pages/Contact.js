import { HiLocationMarker, HiPhone, HiChatAlt2 } from "react-icons/hi";

export default function ContactSection() {
  return (
    <div className="bg-[#FFD806] text-white py-16 px-6">
      <h2 className="text-center text-3xl font-bold mb-10 text-teal-900">GET IN TOUCH</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        
        {/* Address Section */}
        <div>
          <div className="flex justify-center mb-4">
            <div className="bg-gray-200 p-4 rounded-full">
              <HiLocationMarker className="text-4xl text-teal-900" />
            </div>
          </div> 
          <h3 className="font-bold uppercase text-teal-900">Address</h3>
          <p className="mt-2 font-semibold  text-teal-900">Weifield Group Contracting</p>
          <p className=" text-teal-900">No: 162, First Floor,</p>
          <p className=" text-teal-900">Balasundaram Street, Road,</p>
          <p className="   text-teal-900">Kamadhenu Nagar, Avarampalayam, Coimbatore,</p>
          <p className=" text-teal-900">Tamil Nadu 641006</p>
        </div>

        {/* Phone Section */}
        <div>
          <div className="flex justify-center mb-4">
            <div className="bg-gray-200 p-4 rounded-full">
              <HiPhone className="text-4xl text-teal-900" />
            </div>
          </div>
          <h3 className="font-bold uppercase  text-teal-900">Phone</h3>
          <p className="mt-2 font-semibold text-teal-900">EL Codamics Group Contracting</p>
          <p className=" text-teal-900">+91 7539923413</p>
          <p className="mt-4 font-semibold text-teal-900">Weifield 24/7 Service Department</p>
          <p className=" text-teal-900">303.428.2011</p>
          <p className="text-sm  text-teal-900">(Then press 2 for emergency calls)</p>
        </div>

        {/* Email Section */}
        <div>
          <div className="flex justify-center mb-4">
            <div className="bg-gray-200 p-4 rounded-full">
              <HiChatAlt2 className="text-4xl text-teal-900" />
            </div>
          </div>
          <h3 className="font-bold uppercase text-teal-900">Email</h3>
          <p className="mt-2 font-semibold text-teal-900">Request for Proposal</p>
          <p className=" text-teal-900">info@elcodamics.com</p>
          <p className="mt-4 font-semibold text-teal-900">Service Calls</p>
          <p className=" text-teal-900">sales@elcodamics.com</p>
        </div>

      </div>
    </div>
  );
}
