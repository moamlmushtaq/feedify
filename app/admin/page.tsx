"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./components/Sidebar";

export default function AdminPage() {
  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredFeedbacks, setFilteredFeedbacks] = useState<any[]>([]);
  const [showImportant, setShowImportant] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const isAuth = sessionStorage.getItem("admin-auth");
    if (!isAuth) {
      router.push("/admin/login");
    } else {
      fetchFeedbacks();
    }
  }, []);

  const fetchFeedbacks = async () => {
    const res = await fetch("/api/all-feedback");
    const data = await res.json();
    setFeedbacks(data.feedbacks);
    setFilteredFeedbacks(data.feedbacks);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/delete-feedback/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setMessage("Feedback deleted successfully.");
      fetchFeedbacks(); // Reload data after deletion
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    const res = await fetch(`/api/update-feedback-status/${id}`, {
      method: "PUT",
      body: JSON.stringify({ status }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      setMessage(`Feedback marked as ${status}.`);
      fetchFeedbacks(); // Reload data after status update
    }
  };

  const handleToggleImportant = () => {
    setShowImportant(!showImportant);
    const filtered = showImportant
      ? feedbacks
      : feedbacks.filter((fb) => fb.status === "important");
    setFilteredFeedbacks(filtered);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 p-6">
        <h1 className="text-3xl font-bold mb-6">📬 Feedback Dashboard</h1>

        {message && (
          <div className="text-green-600 bg-gray-800 p-2 mb-4 rounded-lg">{message}</div>
        )}

        <button
          onClick={handleToggleImportant}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mb-4"
        >
          {showImportant ? "Show All Feedback" : "Show Important Feedback"}
        </button>

        {filteredFeedbacks.length === 0 ? (
          <p className="text-gray-400">No feedback submitted yet.</p>
        ) : (
          <div className="grid gap-4">
            {filteredFeedbacks.map((fb: any) => (
              <div
                key={fb._id}
                className="bg-gray-900 p-4 rounded-lg border border-gray-800 shadow-sm"
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold">{fb.name}</h2>
                  <span className="text-sm text-gray-400">
                    {new Date(fb.createdAt).toLocaleString()}
                  </span>
                </div>
                <p className="text-gray-200 mb-4">{fb.message}</p>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleStatusChange(fb._id, "important")}
                    className="bg-yellow-600 text-white py-1 px-3 rounded-lg hover:bg-yellow-700"
                  >
                    Mark as Important
                  </button>
                  <button
                    onClick={() => handleStatusChange(fb._id, "pending")}
                    className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700"
                  >
                    Mark as Pending
                  </button>
                  <button
                    onClick={() => handleDelete(fb._id)}
                    className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
