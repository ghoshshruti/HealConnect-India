
import React from "react";
import { Button } from "@/components/ui/button";
import { Ambulance } from "lucide-react";

type DriverStatusSectionProps = {
  driverStatus: 'available' | 'busy';
  toggleDriverStatus: () => void;
  driverLocation: {lat: number; lng: number} | null;
  activeCount: number;
  completedCount: number;
};

const DriverStatusSection: React.FC<DriverStatusSectionProps> = ({
  driverStatus,
  toggleDriverStatus,
  driverLocation,
  activeCount,
  completedCount,
}) => (
  <section className="mb-4">
    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center mb-2">
      <Ambulance className="mr-2 h-7 w-7 text-medical-orange" /> Ambulance Driver
    </h1>
    <p className="text-gray-600 mb-6">
      Manage emergency requests, live tracking, and connect with hospitals.
    </p>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Live Status & Emergency Handling</h2>
      </div>
      <div className="mt-4 md:mt-0 flex items-center">
        <div className={`px-4 py-2 rounded-full mr-4 font-medium ${
          driverStatus === 'available'
            ? 'bg-medical-green/20 text-medical-green'
            : 'bg-medical-orange/20 text-medical-orange'
        }`}>
          <span className="inline-block h-2 w-2 rounded-full mr-2 animate-pulse"
                style={{backgroundColor: driverStatus === 'available' ? '#4ade80' : '#fb923c'}}></span>
          {driverStatus === 'available' ? 'Available' : 'Busy'}
        </div>
        <Button
          variant={driverStatus === 'available' ? 'outline' : 'default'}
          className={driverStatus === 'available'
            ? 'border-medical-orange text-medical-orange hover:bg-medical-orange/10'
            : 'bg-medical-green hover:bg-medical-green-dark'
          }
          onClick={toggleDriverStatus}
        >
          {driverStatus === 'available' ? 'Go Offline' : 'Go Online'}
        </Button>
      </div>
    </div>
    <div className="bg-medical-blue/5 p-4 rounded-lg mb-8">
      <h2 className="font-semibold text-medical-blue flex items-center mb-2">
        <Ambulance className="h-5 w-5 mr-2" /> Your Current Status
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-md shadow-sm">
          <p className="text-sm text-gray-500">Current Location</p>
          <p className="font-medium">{driverLocation ? 'GPS Location Active' : 'Location not available'}</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-sm">
          <p className="text-sm text-gray-500">Active Requests</p>
          <p className="font-medium">{activeCount}</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-sm">
          <p className="text-sm text-gray-500">Completed Today</p>
          <p className="font-medium">{completedCount}</p>
        </div>
      </div>
    </div>
  </section>
);

export default DriverStatusSection;

