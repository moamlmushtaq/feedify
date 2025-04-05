"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ImportantFeedbackPage() {
  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const isAuth = sessionStorage.getItem("admin-auth");
    if (!isAuth) {
      router.push("/admin/login");
    } else {
      fetch("/api/all-feedback")
        .then((res) => res.json())
        .then((data) => {
          setFeedbacks(data.feedbacks.filter((fb: any) => fb.status === "important"));
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">📬 Important Feedback</h1>

      {feedbacks.length === 0 ? (
        <p className="text-gray-400">No important feedback found.</p>
      ) : (
        <div className="grid gap-4">
          {feedbacks.map((fb: any) => (
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
