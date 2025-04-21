
import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const DriverHospitalCoordinationSection: React.FC = () => (
  <section>
    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center mb-2">
      <MapPin className="mr-2 h-7 w-7 text-medical-blue" /> Hospital Management
    </h1>
    <p className="text-gray-600 mb-6">
      Connect ambulance driver with hospital for real-time emergency ward preparation and collaboration.
    </p>
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-2 flex flex-col gap-2">
      <h2 className="font-semibold text-lg mb-2">Driver–Hospital Coordination</h2>
      <p className="text-gray-500 mb-2">
        Notify the hospital and management team as you approach, so the emergency ward can be arranged proactively. AI assists in automating & prioritizing alerts depending on emergency type.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          className="bg-medical-blue hover:bg-medical-blue-dark"
          onClick={() => toast.success("Connected with hospital management! Emergency ward is being prepared.")}
        >
          Notify & Connect Hospital
        </Button>
        <Button
          variant="outline"
          className="text-medical-blue border-medical-blue hover:bg-medical-blue/10"
          onClick={() => toast.info("AI prioritization report sent to hospital.")}
        >
          AI Emergency Report
        </Button>
      </div>
    </div>
  </section>
);

export default DriverHospitalCoordinationSection;
