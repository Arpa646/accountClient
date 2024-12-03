"use client";

import { useState } from "react";
import { useSignUpMutation } from "@/GlobalRedux/api/api"; 

const CreateUser = () => {
  const [formData, setFormData] = useState({ name: "", userId: "" });
  const [signUp, { isLoading }] = useSignUpMutation();
  const [error, setError] = useState<string | null>(null); // State to track errors
  const [success, setSuccess] = useState<string | null>(null); // State to track success

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null); // Clear error on input change
    setSuccess(null); // Clear success message on input change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await signUp(formData).unwrap();
      console.log("User Created", response);
      setError(null); // Clear error on success
      setSuccess("User created successfully!"); // Set success message
      setFormData({ name: "", userId: "" }); // Reset form
    }  catch (err) {
      if (err && typeof err === "object" && "data" in err) {
        setError((err as { data: { error: string } })?.data?.error || "An unexpected error occurred");
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
        <h1 className="text-3xl font-bold mb-6 text-center">Create User</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-500 text-white p-2 rounded text-center">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-500 text-white p-2 rounded text-center">
              {success}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">User ID</label>
            <input
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
              placeholder="Enter your user ID"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 ease-in-out"
          >
            {isLoading ? "Creating..." : "Create User"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
