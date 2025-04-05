"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/admin-login", {
      method: "POST",
      body: JSON.stringify({ password }),
    });

    const data = await res.json();
    if (data.success) {
      sessionStorage.setItem("admin-auth", "true");
      router.push("/admin");
    } else {
      setError("Incorrect password.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded shadow w-full max-w-sm"
      >
        <h1 className="text-xl font-bold mb-4">Admin Login</h1>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          type="password"
          placeholder="Enter admin password"
          className="w-full p-2 rounded bg-gray-800 text-white mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition rounded p-2 font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}
