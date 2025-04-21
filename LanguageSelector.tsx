
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिंदी" },
  { code: "ta", name: "தமிழ்" },
  { code: "te", name: "తెలుగు" },
  { code: "bn", name: "বাংলা" },
  { code: "mr", name: "मराठी" },
  { code: "gu", name: "ગુજરાતી" },
  { code: "kn", name: "ಕನ್ನಡ" },
  { code: "ml", name: "മലയാളം" },
];

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (code: string) => {
    setSelectedLanguage(code);
    // In a real implementation, this would change the app's language
  };

  const getLanguageName = (code: string) => {
    return languages.find(lang => lang.code === code)?.name || "English";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="bg-white shadow-md rounded-full w-12 h-12 p-0">
            <Globe className="h-5 w-5 text-medical-blue" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white rounded-lg shadow-lg p-2 w-48">
          <div className="py-2 px-3 text-sm font-medium text-gray-700 border-b border-gray-100">
            Select Language
          </div>
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              className={`flex items-center px-3 py-2 text-sm rounded-md my-1 ${
                selectedLanguage === language.code
                  ? "bg-medical-blue text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => handleLanguageChange(language.code)}
            >
              {language.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelector;
