"use client";
import React, { useState } from "react";
import Button from "../components/Button";

export default function FeedbackPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // التحقق من صحة البريد الإلكتروني
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // إرسال الملاحظة إذا كان البريد صالحًا
    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setError(""); // إزالة أي خطأ إذا تم الإرسال بنجاح
    } else {
      setError("Something went wrong, please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[var(--color-background)] text-[var(--color-foreground)]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 shadow-xl transition-all duration-300"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">📬 Send Feedback</h1>

        {success && (
          <div className="mb-4 p-2 bg-green-600/90 text-white text-sm rounded-lg">
            ✅ Thanks! Your feedback has been submitted.
          </div>
        )}

        {error && (
          <div className="mb-4 p-2 bg-red-600/90 text-white text-sm rounded-lg">
            ❌ {error}
          </div>
        )}

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          className="w-full p-3 mb-4 rounded-xl bg-transparent border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className="w-full p-3 mb-4 rounded-xl bg-transparent border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          required
          className="w-full h-32 p-3 mb-4 rounded-xl bg-transparent border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] resize-none"
        />

        <Button type="submit" className="w-full">Send</Button>
      </form>
    </div>
  );
}
