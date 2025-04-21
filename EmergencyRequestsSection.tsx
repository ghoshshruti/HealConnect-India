
import React from "react";
import { Button } from "@/components/ui/button";
import { Ambulance, Navigation, Phone, MapPin } from "lucide-react";

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

type EmergencyRequestsSectionProps = {
  emergencyRequests: EmergencyRequest[];
  acceptEmergencyRequest: (id: string) => void;
  completeEmergencyRequest: (id: string) => void;
  calculateTimeEstimate: (distance: string) => string;
  notifyHospital: (hospitalInfo?: { name: string; address: string }) => void;
};

const EmergencyRequestsSection: React.FC<EmergencyRequestsSectionProps> = ({
  emergencyRequests,
  acceptEmergencyRequest,
  completeEmergencyRequest,
  calculateTimeEstimate,
  notifyHospital,
}) => (
  <div>
    <h2 className="text-xl font-semibold text-gray-900 mb-4">Emergency Requests</h2>
    {emergencyRequests.length === 0 ? (
      <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
        <p className="text-gray-500">No emergency requests at the moment.</p>
      </div>
    ) : (
      <div className="space-y-4">
        {emergencyRequests
          .filter(request => request.status !== 'completed')
          .map(request => (
          <div key={request.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className={`p-4 ${
              request.status === 'new'
                ? 'bg-medical-orange/10 border-b border-medical-orange/20'
                : 'bg-medical-green/10 border-b border-medical-green/20'
            }`}>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Ambulance className={`h-5 w-5 mr-2 ${
                    request.status === 'new' ? 'text-medical-orange' : 'text-medical-green'
                  }`} />
                  <h3 className="font-medium">
                    {request.status === 'new' ? 'New Emergency Request' : 'Active Emergency'}
                  </h3>
                </div>
                <div className="text-sm text-gray-500">
                  {request.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Patient</p>
                  <p className="font-medium">{request.patientName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Contact</p>
                  <p className="font-medium flex items-center">
                    <Phone className="h-4 w-4 mr-1 text-medical-blue" />
                    {request.contactNumber}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Location</p>
                <p className="font-medium flex items-start">
                  <MapPin className="h-4 w-4 mr-1 text-medical-orange mt-1 flex-shrink-0" />
                  {request.location.address}
                </p>
              </div>
              {request.nearestHospital && (
                <div className="mb-4 p-3 bg-gray-50 rounded-md">
                  <p className="text-sm text-gray-500 mb-1">Nearest Hospital</p>
                  <p className="font-medium">{request.nearestHospital.name}</p>
                  <p className="text-sm text-gray-600">{request.nearestHospital.address}</p>
                  <div className="flex items-center mt-1 text-sm text-gray-600">
                    <Navigation className="h-4 w-4 mr-1 text-medical-blue" />
                    {request.nearestHospital.distance} away
                    <span className="mx-2">•</span>
                    <span>ETA: {calculateTimeEstimate(request.nearestHospital.distance)}</span>
                  </div>
                </div>
              )}
              <div className="flex flex-wrap justify-end space-x-3 mt-4">
                {request.status === 'new' ? (
                  <>
                    <Button variant="outline" onClick={() => window.open(`tel:${request.contactNumber}`)}>
                      <Phone className="h-4 w-4 mr-2" /> Call Patient
                    </Button>
                    <Button
                      className="bg-medical-orange hover:bg-medical-orange-dark"
                      onClick={() => acceptEmergencyRequest(request.id)}
                    >
                      Accept Request
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" onClick={() => window.open(`tel:${request.contactNumber}`)}>
                      <Phone className="h-4 w-4 mr-2" /> Call Patient
                    </Button>
                    <Button variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue/10">
                      <Navigation className="h-4 w-4 mr-2" /> Navigation
                    </Button>
                    <Button
                      variant="outline"
                      className="border-medical-orange text-medical-orange hover:bg-medical-orange/10"
                      onClick={() => notifyHospital(request.nearestHospital)}
                    >
                      <Ambulance className="h-4 w-4 mr-2" /> Notify Hospital
                    </Button>
                    <Button
                      className="bg-medical-green hover:bg-medical-green-dark"
                      onClick={() => completeEmergencyRequest(request.id)}
                    >
                      Complete
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default EmergencyRequestsSection;
