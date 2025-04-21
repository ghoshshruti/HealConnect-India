
import { Ambulance } from "lucide-react";
import { Button } from "@/components/ui/button";

const AmbulanceDashboardSection = () => (
  <section id="ambulance" className="bg-white py-12 sm:py-16">
    <div className="section-container">
      <div className="lg:text-center">
        <h2 className="text-base text-medical-orange font-semibold tracking-wide uppercase flex items-center justify-center">
          <Ambulance className="mr-2 h-7 w-7 text-medical-orange" />
          For Ambulance
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Swift Emergency Response
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
          Real-time ambulance coordination, live driver tracking, and instant emergency management tools.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="feature-card">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-medical-orange text-white">
            <Ambulance className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Live Driver Dashboard</h3>
          <p className="mt-2 text-base text-gray-600">
            Track active emergencies, update availability status, and get navigation assistance.
          </p>
        </div>
        <div className="feature-card">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-medical-orange text-white">
            <Ambulance className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Hospital Coordination</h3>
          <p className="mt-2 text-base text-gray-600">
            Receive direct handoff alerts and notify hospitals ahead of patient arrival.
          </p>
        </div>
        <div className="feature-card">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-medical-orange text-white">
            <Ambulance className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Emergency Requests</h3>
          <p className="mt-2 text-base text-gray-600">
            Get notified instantly for new emergencies and manage request workflow efficiently.
          </p>
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <Button className="btn-accent">Access Ambulance Driver Portal</Button>
      </div>
    </div>
  </section>
);

export default AmbulanceDashboardSection;
