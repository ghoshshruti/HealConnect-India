
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Ambulance, Navigation, Store, Phone, MapPin } from "lucide-react";
import { toast } from "@/components/ui/sonner";

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  type?: 'normal' | 'ambulance' | 'medical-store' | 'hospital';
  metadata?: {
    name?: string;
    distance?: string;
    contact?: string;
    address?: string;
    availability?: string;
    eta?: string;
  };
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I am your healthcare assistant. How can I help you today?',
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState('');
  const [location, setLocation] = useState<{lat: number; lng: number} | null>(null);
  const [pincode, setPincode] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Get user location on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          // Fetch pincode from coordinates using reverse geocoding
          fetchPincodeFromCoordinates(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          toast.error("Unable to get your location. Please enter your pincode manually.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by your browser. Please enter your pincode manually.");
    }
  }, []);

  const fetchPincodeFromCoordinates = async (lat: number, lng: number) => {
    try {
      // In a real implementation, you would use a geocoding API like Google Maps API
      // This is a placeholder for demonstration
      console.log(`Fetching pincode for coordinates: ${lat}, ${lng}`);
      // For demo purposes, we'll set a dummy pincode
      setPincode("110001"); // Example Delhi pincode
    } catch (error) {
      console.error("Error fetching pincode:", error);
    }
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user'
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Process the message and generate a response
    setTimeout(() => {
      processUserMessage(input);
    }, 1000);
  };

  const processUserMessage = (userInput: string) => {
    const lowerInput = userInput.toLowerCase();
    
    // Check for ambulance-related queries
    if (lowerInput.includes('ambulance') || lowerInput.includes('emergency')) {
      handleAmbulanceRequest();
    } 
    // Check for medical store queries
    else if (lowerInput.includes('medical') || lowerInput.includes('medicine') || lowerInput.includes('pharmacy')) {
      handleMedicalStoreRequest();
    } 
    // Check for hospital queries
    else if (lowerInput.includes('hospital') || lowerInput.includes('doctor')) {
      handleHospitalRequest();
    } 
    // Default response
    else {
      const botResponse: Message = {
        id: Date.now().toString(),
        text: "I can help you with emergency services, finding nearby ambulances, medical stores, or connecting with hospitals. What do you need assistance with?",
        sender: 'bot'
      };
      setMessages(prev => [...prev, botResponse]);
    }
  };

  const handleAmbulanceRequest = () => {
    // Mock ambulance data - in a real app, this would come from a backend API
    const ambulanceResponse: Message = {
      id: Date.now().toString(),
      text: "I've found available ambulances near your location. Would you like to contact one?",
      sender: 'bot',
      type: 'ambulance',
      metadata: {
        name: "HealConnect Emergency Services",
        distance: "2.5 km away",
        contact: "+91 9876543210",
        eta: "Estimated arrival: 8 minutes"
      }
    };
    
    setMessages(prev => [...prev, ambulanceResponse]);
  };

  const handleMedicalStoreRequest = () => {
    // Mock medical store data
    const medicalStoreResponse: Message = {
      id: Date.now().toString(),
      text: "Here are medical stores near you that are open now:",
      sender: 'bot',
      type: 'medical-store',
      metadata: {
        name: "Apollo Pharmacy",
        distance: "1.2 km away",
        contact: "+91 9876543211",
        address: "123 Main St, Delhi",
        availability: "Open 24 hours"
      }
    };
    
    setMessages(prev => [...prev, medicalStoreResponse]);
  };

  const handleHospitalRequest = () => {
    // Mock hospital data
    const hospitalResponse: Message = {
      id: Date.now().toString(),
      text: "I found these hospitals near your location:",
      sender: 'bot',
      type: 'hospital',
      metadata: {
        name: "AIIMS Delhi",
        distance: "3.5 km away",
        contact: "+91 9876543212",
        address: "Ansari Nagar, New Delhi",
        availability: "Emergency services available"
      }
    };
    
    setMessages(prev => [...prev, hospitalResponse]);
  };

  const handleContactAmbulance = (contact: string) => {
    // In a real app, this would initiate a call
    toast.success(`Calling ambulance service at ${contact}`);
    
    // Add confirmation message
    const confirmationMessage: Message = {
      id: Date.now().toString(),
      text: `Connecting you to emergency services at ${contact}. An ambulance is being dispatched to your location.`,
      sender: 'bot'
    };
    
    setMessages(prev => [...prev, confirmationMessage]);
  };

  const renderMessageContent = (message: Message) => {
    if (message.sender === 'user') {
      return <div className="bg-gray-100 p-3 rounded-lg max-w-[80%] ml-auto">{message.text}</div>;
    }
    
    switch (message.type) {
      case 'ambulance':
        return (
          <div className="bg-white p-4 rounded-lg border border-medical-orange shadow-md max-w-[80%]">
            <p>{message.text}</p>
            <div className="mt-3 bg-medical-orange/10 p-3 rounded-md">
              <div className="flex items-center text-medical-orange font-medium mb-1">
                <Ambulance className="mr-2 h-4 w-4" /> {message.metadata?.name}
              </div>
              <div className="text-sm text-gray-600 mb-1">
                <Navigation className="inline-block mr-1 h-4 w-4" /> {message.metadata?.distance}
              </div>
              <div className="text-sm text-gray-600 mb-1">
                <Navigation className="inline-block mr-1 h-4 w-4" /> {message.metadata?.eta}
              </div>
              <Button 
                className="mt-2 bg-medical-orange hover:bg-medical-orange-dark"
                onClick={() => message.metadata?.contact && handleContactAmbulance(message.metadata.contact)}
              >
                <Phone className="mr-2 h-4 w-4" /> Contact Ambulance
              </Button>
            </div>
          </div>
        );
        
      case 'medical-store':
        return (
          <div className="bg-white p-4 rounded-lg border border-medical-green shadow-md max-w-[80%]">
            <p>{message.text}</p>
            <div className="mt-3 bg-medical-green/10 p-3 rounded-md">
              <div className="flex items-center text-medical-green font-medium mb-1">
                <Store className="mr-2 h-4 w-4" /> {message.metadata?.name}
              </div>
              <div className="text-sm text-gray-600 mb-1">
                <Navigation className="inline-block mr-1 h-4 w-4" /> {message.metadata?.distance}
              </div>
              <div className="text-sm text-gray-600 mb-1">
                <MapPin className="inline-block mr-1 h-4 w-4" /> {message.metadata?.address}
              </div>
              <div className="text-sm text-gray-600 mb-1">
                <Store className="inline-block mr-1 h-4 w-4" /> {message.metadata?.availability}
              </div>
              <Button 
                className="mt-2 bg-medical-green hover:bg-medical-green-dark"
                onClick={() => window.open(`tel:${message.metadata?.contact}`)}
              >
                <Phone className="mr-2 h-4 w-4" /> Call Store
              </Button>
            </div>
          </div>
        );
        
      case 'hospital':
        return (
          <div className="bg-white p-4 rounded-lg border border-medical-blue shadow-md max-w-[80%]">
            <p>{message.text}</p>
            <div className="mt-3 bg-medical-blue/10 p-3 rounded-md">
              <div className="flex items-center text-medical-blue font-medium mb-1">
                <Store className="mr-2 h-4 w-4" /> {message.metadata?.name}
              </div>
              <div className="text-sm text-gray-600 mb-1">
                <Navigation className="inline-block mr-1 h-4 w-4" /> {message.metadata?.distance}
              </div>
              <div className="text-sm text-gray-600 mb-1">
                <MapPin className="inline-block mr-1 h-4 w-4" /> {message.metadata?.address}
              </div>
              <div className="text-sm text-gray-600 mb-1">
                <Store className="inline-block mr-1 h-4 w-4" /> {message.metadata?.availability}
              </div>
              <Button 
                className="mt-2 bg-medical-blue hover:bg-medical-blue-dark"
                onClick={() => window.open(`tel:${message.metadata?.contact}`)}
              >
                <Phone className="mr-2 h-4 w-4" /> Contact Hospital
              </Button>
            </div>
          </div>
        );
        
      default:
        return <div className="bg-white p-3 rounded-lg border border-gray-200 max-w-[80%]">{message.text}</div>;
    }
  };

  return (
    <>
      {/* Chat button (fixed at bottom right) */}
      <Button
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg bg-medical-blue hover:bg-medical-blue-dark"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[350px] md:w-[400px] h-[500px] bg-white rounded-xl shadow-xl flex flex-col border border-gray-200 z-50">
          {/* Chat header */}
          <div className="bg-medical-blue text-white p-4 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              <h3 className="font-semibold">HealConnect Assistant</h3>
            </div>
            {pincode && (
              <div className="text-xs bg-white/20 px-2 py-1 rounded-full">
                <MapPin className="inline h-3 w-3 mr-1" />
                {pincode}
              </div>
            )}
          </div>
          
          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {renderMessageContent(message)}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input area */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-medical-blue"
              />
              <Button 
                className="rounded-l-none bg-medical-blue hover:bg-medical-blue-dark"
                onClick={handleSendMessage}
              >
                Send
              </Button>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              Try asking about emergency services, ambulances, medical stores, or hospitals near you.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
