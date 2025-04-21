
const AppMockups = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Seamless Experience Across Devices
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Access the platform from anywhere, anytime
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md">
            <div className="bg-gray-800 h-8 w-full flex items-center px-4">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-gray-400 text-xs">Doctor Dashboard</span>
              </div>
            </div>
            <div className="h-80 bg-medical-blue-light p-4">
              <div className="bg-white h-full rounded-lg shadow-sm p-4 flex flex-col">
                <div className="border-b pb-2 mb-2">
                  <div className="text-lg font-medium text-medical-blue">Today's Appointments</div>
                </div>
                <div className="space-y-3 flex-1 overflow-y-auto">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-gray-50 p-3 rounded-md flex items-center justify-between">
                      <div>
                        <div className="font-medium">Patient #{i}</div>
                        <div className="text-sm text-gray-500">10:3{i} AM • General Checkup</div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-2 py-1 bg-medical-blue text-white text-xs rounded">Start</button>
                        <button className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">Reschedule</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-2 mt-2 flex justify-between">
                  <button className="bg-medical-blue text-white px-3 py-1 rounded-md text-sm">Calendar View</button>
                  <button className="bg-medical-green text-white px-3 py-1 rounded-md text-sm">New Appointment</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-64 h-[500px] border-8 border-gray-800 relative">
            <div className="bg-gray-800 h-6 w-full flex items-center justify-center">
              <div className="h-2 w-20 rounded-full bg-gray-700"></div>
            </div>
            <div className="h-full bg-medical-orange-light p-3">
              <div className="bg-white h-full rounded-lg shadow-sm overflow-hidden flex flex-col">
                <div className="bg-medical-blue text-white p-3">
                  <div className="text-sm font-medium">HealConnect Patient App</div>
                </div>
                <div className="p-3 flex-1 overflow-y-auto">
                  <div className="text-xs font-medium text-gray-500 mb-2">UPCOMING APPOINTMENTS</div>
                  <div className="bg-blue-50 p-2 rounded-md mb-4">
                    <div className="text-xs text-gray-800 font-medium">Dr. Sharma • Cardiologist</div>
                    <div className="text-xs text-gray-600">Tomorrow, 11:00 AM</div>
                    <div className="flex justify-end mt-1">
                      <button className="bg-medical-blue text-white px-2 py-0.5 rounded text-xs">Confirm</button>
                    </div>
                  </div>
                  
                  <div className="text-xs font-medium text-gray-500 mb-2">MEDICATIONS</div>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-gray-50 p-2 rounded-md mb-2 flex items-center">
                      <div className="h-6 w-6 rounded-full bg-medical-green-light mr-2 flex items-center justify-center text-xs font-bold text-medical-green">{i}</div>
                      <div>
                        <div className="text-xs text-gray-800 font-medium">Medication #{i}</div>
                        <div className="text-xs text-gray-600">1 pill, 3 times daily</div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="text-xs font-medium text-gray-500 mb-2 mt-4">QUICK ACTIONS</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-medical-blue text-white p-2 rounded-md text-xs">Book Appointment</button>
                    <button className="bg-medical-green text-white p-2 rounded-md text-xs">View Records</button>
                    <button className="bg-medical-orange text-white p-2 rounded-md text-xs">Emergency</button>
                    <button className="bg-gray-200 text-gray-800 p-2 rounded-md text-xs">Find Hospital</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppMockups;
