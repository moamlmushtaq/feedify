import React from "react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="bg-gray-900 text-white w-64 p-6 h-full fixed left-0 top-0">
      <h2 className="text-2xl font-semibold mb-8">Admin Dashboard</h2>
      <ul>
        <li>
          <button
            onClick={() => router.push("/admin")}
            className="w-full text-left p-3 mb-4 hover:bg-gray-700 rounded-lg transition duration-300"
          >
            Dashboard
          </button>
        </li>
        <li>
          <button
            onClick={() => router.push("/admin/important-feedback")}
            className="w-full text-left p-3 mb-4 hover:bg-gray-700 rounded-lg transition duration-300"
          >
            Important Feedback
          </button>
        </li>
        <li>
          <button
            onClick={() => router.push("/admin/pending-feedback")}
            className="w-full text-left p-3 mb-4 hover:bg-gray-700 rounded-lg transition duration-300"
          >
            Pending Feedback
          </button>
        </li>
      </ul>
    </div>
  );
}
