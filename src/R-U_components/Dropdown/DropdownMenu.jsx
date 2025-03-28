import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function DropdownMenu({ actions }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-[#3A859E] text-white rounded-md transition"
      >
        Actions
        <ChevronDown size={16} />
      </button>

      {/* Dropdown List (Position Fixed) */}
      {isOpen && (
        <div className="absolute right-0 mt-2 min-w-[150px] bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
          {actions.length > 0 ? (
            actions.map((action, index) => (
              <button
                key={index}
                onClick={() => {
                  action.action();
                  setIsOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-2 w-full text-left text-gray-700 hover:bg-blue-100 transition"
              >
                {action.icon && <action.icon size={18} className="text-[#3A859E]" />}
                {action.label}
              </button>
            ))
          ) : (
            <p className="px-4 py-2 text-gray-400">No Actions</p>
          )}
        </div>
      )}
    </div>
  );
}
