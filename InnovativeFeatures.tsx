import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Dna, 
  Brain, 
  Bot, 
  Globe, 
  Clock,
  Zap,
  MessageCircle,
  Video
} from "lucide-react";
import { useState } from "react";

const InnovativeFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      title: "AI-Powered Diagnostic Tools",
      icon: <Brain className="w-12 h-12 text-medical-blue" />,
      description: "Advanced AI systems that can diagnose diseases from medical images with accuracy comparable to specialists, reducing diagnosis time from days to minutes.",
      origin: "United States, UK",
      impact: "Could revolutionize healthcare in rural India where specialist doctors are scarce, enabling quick and accurate diagnosis through telemedicine."
    },
    {
      title: "Smart Wearables Integration",
      icon: <Smartphone className="w-12 h-12 text-medical-green" />,
      description: "Healthcare systems directly integrated with wearable devices that monitor vital signs and alert medical providers of potential health issues before they become emergencies.",
      origin: "Singapore, Japan",
      impact: "Would enable preventive healthcare for India's growing chronic disease population, especially in remote areas with limited access to regular checkups."
    },
    {
      title: "Genomic Medicine Programs",
      icon: <Dna className="w-12 h-12 text-medical-orange" />,
      description: "National genomic sequencing initiatives that personalize treatments based on genetic profiles, resulting in more effective healthcare delivery and medication plans.",
      origin: "Estonia, Iceland",
      impact: "Could transform treatment approaches for India's diverse genetic population, leading to more effective and personalized care."
    },
    {
      title: "Robotic Surgery Networks",
      icon: <Bot className="w-12 h-12 text-purple-600" />,
      description: "Centralized robotic surgery systems that allow skilled surgeons to perform procedures remotely, bringing specialized surgical care to underserved regions.",
      origin: "South Korea, Germany",
      impact: "Would address India's significant urban-rural healthcare divide by enabling expert surgeons to operate on patients in remote locations."
    },
    {
      title: "Universal Digital Health Passport",
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      description: "Digital health passports that securely store complete medical histories accessible by any healthcare provider worldwide, ensuring continuity of care across borders.",
      origin: "Denmark, Australia",
      impact: "Could enhance India's existing ABHA system by making health records globally recognized and interoperable with international healthcare systems."
    },
    {
      title: "24/7 Virtual Primary Care",
      icon: <Clock className="w-12 h-12 text-green-600" />,
      description: "Around-the-clock virtual primary care services that provide immediate medical consultation through video, voice, or chat at any time of day.",
      origin: "Sweden, Canada",
      impact: "Would significantly improve healthcare access across India's 1.4 billion population, particularly in areas with doctor shortages."
    },
    {
      title: "Voice-Based Healthcare Access",
      icon: <MessageCircle className="w-12 h-12 text-green-600" />,
      description: "Voice-enabled healthcare interface in multiple Indian languages that helps illiterate patients describe symptoms, understand prescriptions, and receive medical instructions through audio.",
      origin: "India Innovation",
      impact: "Makes healthcare accessible to over 287 million illiterate Indians by removing literacy barriers and providing voice-based medical assistance."
    },
    {
      title: "Interstate Doctor Network",
      icon: <Video className="w-12 h-12 text-indigo-600" />,
      description: "Unified platform for doctors across Indian states to collaborate, share expertise, and conduct joint virtual consultations with real-time language translation.",
      origin: "India Innovation",
      impact: "Enables seamless knowledge sharing between doctors across different states, improving healthcare quality through collaborative diagnosis and treatment planning."
    },
    {
      title: "Live Ambulance Tracking",
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      description:
        "Patients and hospitals can track ambulance locations on a live map, receive accurate ETA updates, and optimize emergency response.",
      origin: "United States, Israel",
      impact:
        "Would greatly reduce response times and uncertainty for Indian patients, providing real-time visibility and peace of mind during emergencies."
    },
    {
      title: "AI-Powered Report & Disease Filtering",
      icon: <Brain className="w-12 h-12 text-medical-blue" />,
      description:
        "Automatic AI-driven classification of medical reports and probable diseases, flagging high-risk cases and routing them to specialists instantly.",
      origin: "Germany, United States",
      impact:
        "Helps overloaded Indian hospitals and labs quickly triage patients and focus on urgent cases, especially during outbreaks."
    },
    {
      title: "AI-Powered Pharmacy Finder",
      icon: <Smartphone className="w-12 h-12 text-medical-green" />,
      description:
        "Advanced system that suggests the best nearby open medical store, checks medicine stock, and offers delivery/pickup with real-time updates.",
      origin: "India, Singapore",
      impact:
        "Saves time and anxiety for Indian families hunting for medicines; especially helpful for urgent or rare drugs."
    },
    {
      title: "Predictive Outbreak Monitoring",
      icon: <Zap className="w-12 h-12 text-red-500" />,
      description:
        "AI system analyzes health data and news trends to predict and alert about potential disease outbreaks before they spread in a city.",
      origin: "UK, Singapore",
      impact:
        "Could help Indian health authorities act early and contain diseases, reducing risk of widespread epidemics."
    },
    {
      title: "Multilingual Health Literacy AI",
      icon: <MessageCircle className="w-12 h-12 text-purple-600" />,
      description:
        "AI automatically translates and simplifies medical documents into local languages and easy audio/text, making them accessible for everyone.",
      origin: "India Innovation",
      impact:
        "Empowers illiterate and rural Indians to understand prescriptions and medical instructions, improving self-care and compliance."
    }
  ];

  const handleNext = () => {
    setActiveFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveFeature((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return (
    <div id="innovations" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-medical-blue/10 px-4 py-2 rounded-full mb-4">
            <Zap className="inline-block w-5 h-5 text-medical-blue mr-2" />
            <span className="text-medical-blue font-medium">Global Innovation</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Healthcare Innovations India Could Adopt
          </h2>
          <p className="text-lg text-gray-600">
            Cutting-edge healthcare technologies and systems from around the world that could transform India's healthcare landscape
          </p>
        </div>

        <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl">
          <div className="lg:grid lg:grid-cols-2">
            <div className="bg-gradient-to-br from-medical-blue to-purple-700 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white/10 rounded-full p-6 inline-block mb-6">
                  {features[activeFeature].icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{features[activeFeature].title}</h3>
                <div className="text-sm bg-white/20 rounded-full px-4 py-1 inline-block text-white mb-6">
                  Pioneered in: {features[activeFeature].origin}
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <p className="text-lg text-gray-700 mb-6">
                    {features[activeFeature].description}
                  </p>
                  <div className="bg-orange-50 border-l-4 border-medical-orange p-4 mb-8">
                    <h4 className="font-semibold text-medical-orange-dark mb-2">Potential Impact for India:</h4>
                    <p className="text-gray-700">
                      {features[activeFeature].impact}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex space-x-1">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveFeature(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          index === activeFeature ? "w-8 bg-medical-blue" : "w-2.5 bg-gray-200"
                        }`}
                        aria-label={`Go to feature ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handlePrev}
                      className="border-gray-300"
                    >
                      Previous
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={handleNext}
                      className="bg-medical-blue hover:bg-medical-blue-dark"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeFeatures;
