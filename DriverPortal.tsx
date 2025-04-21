
import React, { useState, useEffect } from 'react';
import { toast } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DriverStatusSection from "@/components/driver/DriverStatusSection";
import EmergencyRequestsSection from "@/components/driver/EmergencyRequestsSection";
import CompletedRequestsSection from "@/components/driver/CompletedRequestsSection";
import PharmacySection from "@/components/pharmacy/PharmacySection";
import DriverHospitalCoordinationSection from "@/components/hospital/DriverHospitalCoordinationSection";

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

const DriverPortal = () => {
  const [emergencyRequests, setEmergencyRequests] = useState<EmergencyRequest[]>([]);
  const [driverStatus, setDriverStatus] = useState<'available' | 'busy'>('available');
  const [driverLocation, setDriverLocation] = useState<{lat: number; lng: number} | null>(null);

  useEffect(() => {
    const mockRequests: EmergencyRequest[] = [
      {
        id: '1',
        patientName: 'Rahul Sharma',
        location: {
          address: '123 Gandhi Road, New Delhi',
          coords: { lat: 28.6139, lng: 77.2090 },
        },
        timestamp: new Date(),
        status: 'new',
        contactNumber: '+91 9876543210',
        nearestHospital: {
          name: 'AIIMS Delhi',
          distance: '3.5 km',
          address: 'Ansari Nagar, New Delhi',
        },
      },
      {
        id: '2',
        patientName: 'Priya Patel',
        location: {
          address: '456 Nehru Avenue, New Delhi',
          coords: { lat: 28.6129, lng: 77.2295 },
        },
        timestamp: new Date(Date.now() - 5 * 60000),
        status: 'new',
        contactNumber: '+91 9876543211',
        nearestHospital: {
          name: 'Safdarjung Hospital',
          distance: '2.1 km',
          address: 'Ansari Nagar West, New Delhi',
        },
      },
    ];

    setEmergencyRequests(mockRequests);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setDriverLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting driver location:", error);
          toast.error("Unable to get your location. Some features may be limited.");
        }
      );
    }
  }, []);

  const acceptEmergencyRequest = (requestId: string) => {
    setEmergencyRequests(prev =>
      prev.map(request =>
        request.id === requestId
          ? { ...request, status: 'accepted' }
          : request
      )
    );
    setDriverStatus('busy');
    toast.success("Emergency request accepted! Navigation details sent to your device.");
  };

  const completeEmergencyRequest = (requestId: string) => {
    setEmergencyRequests(prev =>
      prev.map(request =>
        request.id === requestId
          ? { ...request, status: 'completed' }
          : request
      )
    );
    setDriverStatus('available');
    toast.success("Emergency request completed! You are now available for new requests.");
  };

  const toggleDriverStatus = () => {
    setDriverStatus(prev => prev === 'available' ? 'busy' : 'available');
    toast.info(`You are now ${driverStatus === 'available' ? 'busy' : 'available'} for new emergency requests.`);
  };

  const calculateTimeEstimate = (distance: string): string => {
    const distanceValue = parseFloat(distance.split(' ')[0]);
    const estimatedMinutes = Math.round(distanceValue * 3);
    return `${estimatedMinutes} minutes`;
  };

  const notifyHospital = (hospitalInfo?: { name: string; address: string }) => {
    if (hospitalInfo) {
      toast.success(
        `Hospital "${hospitalInfo.name}" has been notified to prepare for emergency at ${hospitalInfo.address}.`
      );
    } else {
      toast.error("No hospital info available to notify.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="section-container space-y-12">
          <DriverStatusSection
            driverStatus={driverStatus}
            toggleDriverStatus={toggleDriverStatus}
            driverLocation={driverLocation}
            activeCount={emergencyRequests.filter(r => r.status === 'accepted').length}
            completedCount={emergencyRequests.filter(r => r.status === 'completed').length}
          />
          <EmergencyRequestsSection
            emergencyRequests={emergencyRequests}
            acceptEmergencyRequest={acceptEmergencyRequest}
            completeEmergencyRequest={completeEmergencyRequest}
            calculateTimeEstimate={calculateTimeEstimate}
            notifyHospital={notifyHospital}
          />
          <CompletedRequestsSection emergencyRequests={emergencyRequests} />
          <PharmacySection />
          <DriverHospitalCoordinationSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DriverPortal;
