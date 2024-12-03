"use client";
import React, { useState } from "react";
import { useTransferDataMutation } from "@/GlobalRedux/api/api"; // Import your mutation hook

const TransferBalanceForm: React.FC = () => {
  const [formData, setFormData] = useState({ senderId: "", receiverId: "", amount: 0 });
  const [transferBalance, { isLoading }] = useTransferDataMutation();
  const [success, setSuccess] = useState<string | null>(null); // State for success message
  const [error, setError] = useState<string | null>(null); // State for error message

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "amount" ? Number(value) : value, // Ensure amount is a number
    }));
    setSuccess(null); // Clear success message on input change
    setError(null);   // Clear error message on input change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await transferBalance(formData).unwrap();
      console.log("Transfer successful:", response);
      setSuccess("Transfer successful!"); // Set success message
      setFormData({ senderId: "", receiverId: "", amount: 0 }); // Clear form fields
      setError(null); // Clear any previous error messages
    } 
    catch (err) {
      if (err && typeof err === "object" && "data" in err) {
        setError((err as { data: { message: string } })?.data?.message || "An unexpected error occurred");
      } else {
        setError("An unexpected error occurred");
      }
      setSuccess(null); // Clear success message on error
      console.error("Error creating user:", err);
    }
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black to-gray-800">
      <div className="w-full max-w-md bg-black text-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Transfer Balance</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Success Message */}
          {success && (
            <div className="bg-green-500 text-white p-2 rounded text-center">
              {success}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-500 text-white p-2 rounded text-center">
              {error}
            </div>
          )}

          {/* Sender ID Input */}
          <div>
            <label className="block text-sm font-medium mb-2">Sender ID</label>
            <input
              type="text"
              name="senderId"
              value={formData.senderId}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
              placeholder="Enter Sender ID"
              required
            />
          </div>

          {/* Receiver ID Input */}
          <div>
            <label className="block text-sm font-medium mb-2">Receiver ID</label>
            <input
              type="text"
              name="receiverId"
              value={formData.receiverId}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
              placeholder="Enter Receiver ID"
              required
            />
          </div>

          {/* Amount Input */}
          <div>
            <label className="block text-sm font-medium mb-2">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
              placeholder="Enter Amount"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 ease-in-out"
          >
            {isLoading ? "Processing..." : "Transfer Balance"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransferBalanceForm;
