
import React from "react";
import { Button } from "@/components/ui/button";
import { Store } from "lucide-react";

const PharmacySection: React.FC = () => (
  <section className="mb-4">
    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center mb-2">
      <Store className="mr-2 h-7 w-7 text-medical-green" /> Pharmacy
    </h1>
    <p className="text-gray-600 mb-6">
      Find AI-powered, filtered medical shops and pharmacy services near you.
    </p>
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-2 flex flex-col md:flex-row items-center md:items-start gap-4">
      <div className="flex-1">
        <h2 className="font-semibold text-lg mb-3">Medical Shop Near Me</h2>
        <p className="text-gray-500 mb-2">Use our AI-powered tool to quickly discover and filter pharmacies based on your disease or medicine needs.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        <Button className="bg-medical-green hover:bg-medical-green-dark">
          Find Nearby Medical Stores
        </Button>
        <Button variant="outline" className="text-medical-green border-medical-green hover:bg-medical-green/10">
          Disease/Meds AI Filter
        </Button>
      </div>
    </div>
  </section>
);

export default PharmacySection;
