"use client";

import React from "react";
import { useGetAllUserQuery } from "@/GlobalRedux/api/api"; // Import your query hook

const UserList: React.FC = () => {
  const { data: users, isLoading, error } = useGetAllUserQuery(undefined
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700">
        <p className="text-white text-2xl">Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700">
        <p className="text-red-500 text-2xl">Failed to load users.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-black mb-10">User List</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">User ID</th>
                <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Name</th>
                <th className="px-4 py-3 text-right text-sm font-semibold uppercase">Balance</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.data?.map((user: {_id:string, userId: string; name: string; balance: number }, index: number) => (
                  <tr
                    key={user._id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-700" : "bg-gray-600"
                    } hover:bg-gray-500 transition-colors`}
                  >
                    <td className="px-4 py-3 text-2xl">{user.userId}</td>
                    <td className="px-4 py-3 text-2xl">{user.name}</td>
                    <td className="px-4 py-3 text-right text-2xl">${user.balance.toFixed(2)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
