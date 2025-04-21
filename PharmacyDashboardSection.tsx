
import { Store } from "lucide-react";
import { Button } from "@/components/ui/button";

const PharmacyDashboardSection = () => (
  <section id="pharmacy" className="bg-white py-12 sm:py-16">
    <div className="section-container">
      <div className="lg:text-center">
        <h2 className="text-base text-medical-green font-semibold tracking-wide uppercase flex items-center justify-center">
          <Store className="mr-2 h-7 w-7 text-medical-green" />
          For Pharmacy
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Smart Medical Store Solutions
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
          AI-powered pharmacy search, real-time inventory updates, and seamless order management.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="feature-card">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-medical-green text-white">
            <Store className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Nearby Medical Shops</h3>
          <p className="mt-2 text-base text-gray-600">
            Search and filter pharmacies near your location using AI-powered recommendations.
          </p>
        </div>
        <div className="feature-card">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-medical-green text-white">
            <Store className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Medicine Availability</h3>
          <p className="mt-2 text-base text-gray-600">
            Instantly check medicine stock and request drugs from verified suppliers.
          </p>
        </div>
        <div className="feature-card">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-medical-green text-white">
            <Store className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Order & Delivery</h3>
          <p className="mt-2 text-base text-gray-600">
            Place orders online and coordinate pickup or doorstep delivery with pharmacy partners.
          </p>
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <Button className="btn-secondary">Explore Pharmacy Portal</Button>
      </div>
    </div>
  </section>
);

export default PharmacyDashboardSection;
