import React, { useState } from "react";

const Modals = () => {
  const [success, setIssuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      {/* Buttons to show modals */}
      <button
        onClick={() => setIssuccess(true)}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Show Success Modal
      </button>
      <button
        onClick={() => setFailed(true)}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Show Failed Modal
      </button>

      {/* Success Modal */}
      {success && (
        <div
          className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-md"
          onClick={() => setIssuccess(false)} // Close modal when clicking on the overlay
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg space-y-4 text-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h1 className="text-2xl font-bold text-green-600">Success</h1>
            <p className="text-gray-700">Transaction has been successful.</p>
            <button
              onClick={() => setIssuccess(false)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Failed Modal */}
      {failed && (
        <div
          className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-md"
          onClick={() => setFailed(false)} // Close modal when clicking on the overlay
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg space-y-4 text-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h1 className="text-2xl font-bold text-red-600">Failed</h1>
            <p className="text-gray-700">
              Transaction has failed. Please try again.
            </p>
            <button
              onClick={() => setFailed(false)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modals;
