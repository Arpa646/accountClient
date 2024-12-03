"use client";
import React, { useState } from "react";
import { useAddBalanceMutation } from "@/GlobalRedux/api/api"; // Import your mutation hook

const AddBalanceForm: React.FC = () => {
  const [formData, setFormData] = useState({ userId: "", deposit: 0 });
  const [addBalance, { isLoading }] = useAddBalanceMutation();
  const [success, setSuccess] = useState<string | null>(null); // State for success message

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "deposit" ? Number(value) : value, // Ensure deposit is a number
    }));
    setSuccess(null); // Clear success message on input change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await addBalance(formData).unwrap();
      console.log("Deposit added successfully:", response);
      setSuccess("Balance added successfully!"); // Set success message
      setFormData({ userId: "", deposit: 0 }); // Clear form fields
    } catch (err) {
      console.error("Error adding deposit:", err);
      setSuccess(null); // Clear success message on error
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black to-gray-800">
      <div className="w-full max-w-md bg-black text-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Add Deposit</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Success Message */}
          {success && (
            <div className="bg-green-500 text-white p-2 rounded text-center">
              {success}
            </div>
          )}

          {/* User ID Input */}
          <div>
            <label className="block text-sm font-medium mb-2">User ID</label>
            <input
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
              placeholder="Enter User ID"
              required
            />
          </div>

          {/* Deposit Input */}
          <div>
            <label className="block text-sm font-medium mb-2">Deposit</label>
            <input
              type="number"
              name="deposit"
              value={formData.deposit}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
              placeholder="Enter Deposit Amount"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 ease-in-out"
          >
            {isLoading ? "Adding..." : "Add Deposit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBalanceForm;
