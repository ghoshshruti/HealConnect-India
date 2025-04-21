
import React from "react";

type EmergencyRequest = {
  id: string;
  patientName: string;
  location: {
    address: string;
    coords: { lat: number; lng: number };
  };
  timestamp: Date;
  status: 'new' | 'accepted' | 'completed';
  contactNumber: string;
  nearestHospital?: {
    name: string;
    distance: string;
    address: string;
  };
};

type CompletedRequestsSectionProps = {
  emergencyRequests: EmergencyRequest[];
};

const CompletedRequestsSection: React.FC<CompletedRequestsSectionProps> = ({ emergencyRequests }) => (
  <div className="mt-8">
    <h2 className="text-xl font-semibold text-gray-900 mb-4">Completed Requests</h2>
    {emergencyRequests.filter(request => request.status === 'completed').length === 0 ? (
      <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
        <p className="text-gray-500">No completed requests today.</p>
      </div>
    ) : (
      <div className="space-y-2">
        {emergencyRequests
          .filter(request => request.status === 'completed')
          .map(request => (
          <div key={request.id} className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{request.patientName}</p>
                <p className="text-sm text-gray-500">{request.location.address}</p>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">Completed</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default CompletedRequestsSection;
