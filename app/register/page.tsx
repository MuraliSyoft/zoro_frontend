"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    // Add other form fields as needed
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        toast.error("Authentication failed");
      }
      if (response.ok) {
        toast.success("Success");
      }

      const data = await response.json();
    } catch (error) {
      console.error("Error sending POST request:");
    }
  };
  return (
    <main className="p-24" style={{ backgroundColor: "#1e293c" }}>
      <div style={{ backgroundColor: "" }}></div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-10">
        <div className="sm:col-span-12">
          <label
            htmlFor="first-name"
            className="text-sm font-medium leading-6 text-gray-500"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="sm:col-span-12">
          <label
            htmlFor="last-name"
            className="text-sm font-medium leading-6 text-gray-500"
          >
            Password
          </label>
          <div className="mt-2">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Register
      </button>

      <ToastContainer />
    </main>
  );
}
