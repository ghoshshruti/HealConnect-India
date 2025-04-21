
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PlatformShowcase = () => {
  return (
    <div id="features" className="bg-gray-50 py-12 sm:py-16">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How HealConnect India Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            A unified platform connecting all healthcare stakeholders
          </p>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="hospitals" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto">
              <TabsTrigger value="hospitals" className="py-3 data-[state=active]:bg-medical-blue data-[state=active]:text-white">
                Hospitals
              </TabsTrigger>
              <TabsTrigger value="doctors" className="py-3 data-[state=active]:bg-medical-green data-[state=active]:text-white">
                Doctors
              </TabsTrigger>
              <TabsTrigger value="patients" className="py-3 data-[state=active]:bg-medical-orange data-[state=active]:text-white">
                Patients
              </TabsTrigger>
            </TabsList>
            
            <div className="mt-6 bg-white rounded-lg shadow-lg p-2 sm:p-6">
              <TabsContent value="hospitals" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">Hospital Dashboard</h3>
                    <p className="text-gray-600">
                      Manage your hospital operations, staff, and patient care from a centralized dashboard designed for healthcare facilities.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-medical-blue text-white">
                            1
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Complete Hospital Profile</h4>
                          <p className="mt-1 text-gray-600">Create a comprehensive profile with all facilities and services.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-medical-blue text-white">
                            2
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Manage Doctors & Staff</h4>
                          <p className="mt-1 text-gray-600">Add doctors, manage shifts and handle staff operations.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-medical-blue text-white">
                            3
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Patient Records & Billing</h4>
                          <p className="mt-1 text-gray-600">Access patient records and handle billing in one place.</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-5">
                      <Button className="bg-medical-blue hover:bg-medical-blue-dark">
                        Hospital Registration
                      </Button>
                    </div>
                  </div>
                  <div className="lg:col-span-3 rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                    <div className="bg-white m-4 rounded-lg shadow-sm p-4 w-full h-[400px] flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xl font-semibold text-medical-blue mb-2">Hospital Management Dashboard</div>
                        <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-gray-600">Hospital dashboard interface preview</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="doctors" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">Doctor Platform</h3>
                    <p className="text-gray-600">
                      A complete solution for doctors to manage appointments, patient records, and conduct teleconsultations securely.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-medical-green text-white">
                            1
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Patient Appointments</h4>
                          <p className="mt-1 text-gray-600">View and manage your daily appointment schedule.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-medical-green text-white">
                            2
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Digital Prescriptions</h4>
                          <p className="mt-1 text-gray-600">Create and send digital prescriptions to patients instantly.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-medical-green text-white">
                            3
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Video Consultations</h4>
                          <p className="mt-1 text-gray-600">Conduct secure video consultations with patients remotely.</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-5">
                      <Button className="bg-medical-green hover:bg-medical-green-dark">
                        Doctor Registration
                      </Button>
                    </div>
                  </div>
                  <div className="lg:col-span-3 rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                    <div className="bg-white m-4 rounded-lg shadow-sm p-4 w-full h-[400px] flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xl font-semibold text-medical-green mb-2">Doctor's Console</div>
                        <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-gray-600">Doctor interface preview</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="patients" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">Patient Portal</h3>
                    <p className="text-gray-600">
                      Take control of your healthcare journey with our patient-friendly platform designed for accessibility.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-medical-orange text-white">
                            1
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Find & Book Appointments</h4>
                          <p className="mt-1 text-gray-600">Search for doctors and book appointments with ease.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-medical-orange text-white">
                            2
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Health Records</h4>
                          <p className="mt-1 text-gray-600">Access your complete medical history and reports in one place.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-medical-orange text-white">
                            3
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Medication Reminders</h4>
                          <p className="mt-1 text-gray-600">Never miss your medications with timely reminders.</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-5">
                      <Button className="bg-medical-orange hover:bg-medical-orange-dark">
                        Patient Registration
                      </Button>
                    </div>
                  </div>
                  <div className="lg:col-span-3 rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                    <div className="bg-white m-4 rounded-lg shadow-sm p-4 w-full h-[400px] flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xl font-semibold text-medical-orange mb-2">Patient Health Portal</div>
                        <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-gray-600">Patient interface preview</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PlatformShowcase;
