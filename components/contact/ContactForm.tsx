"use client";

import { useState, useEffect } from "react";

import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
type FormData = {
  name: string;
  email: string;
  phone: string;
  project_type: string;
  note: string;
};

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    project_type: "Website Design & Development",
    note: "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setStatus("sending");

    try {
      console.log("sending message")
      console.log("sending message")
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("message sent")

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to send your message."
        );
      }

      setStatus("success");

      // Clear the form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        project_type: "Website Design & Development",
        note: "",
      });

    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("error");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="card p-6 space-y-5"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Your Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === "sending"}
            placeholder="Enter your name"
            className="input w-full"
          />
        </div>
        
        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Your Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === "sending"}
            placeholder="you@example.com"
            className="input w-full"
          />
        </div>
        {/* phone */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Your Contact No.
          </label>

          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={status === "sending"}
            placeholder="you@example.com"
            className="input w-full"
          />
        </div>

        {/* Project */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Project Type
          </label>

          <select
            name="project_type"
            value={formData.project_type}
            onChange={handleChange}
            disabled={status === "sending"}
            className="input w-full"
          >
            <option>Website Design & Development</option>
            <option>Web Development</option>
            <option>Brand Identity</option>
            <option>SEO & Performance</option>
            <option>Other</option>
          </select>
        </div>

        {/* Message / Note */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Your Message
          </label>

          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            disabled={status === "sending"}
            rows={4}
            placeholder="Any additional information..."
            className="input w-full resize-y"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-lg bg-[var(--accent)] px-6 py-3 font-bold text-[#102018] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <ArrowUpRight className="w-5 h-5" />
            </>
          )}
        </button>

        {/* Error */}
        {status === "error" && (
          <p className="text-sm text-red-500">
            Failed to send your message. Please try again.
          </p>
        )}
      </form>

      {/* Success animation */}
      {status === "success" && <SuccessFlare />}
    </>
  );
}

function SuccessFlare() { const [visible, setVisible] = useState(true); useEffect(() => { const timer = setTimeout(() => { setVisible(false); }, 4500); return () => clearTimeout(timer); }, []); if (!visible) return null; return (<div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none" aria-live="polite" > {/* Confetti */} <div className="absolute inset-0 overflow-hidden"> {Array.from({ length: 45 }).map((_, index) => (<span key={index} className="absolute w-2 h-4 rounded-sm animate-success-confetti" style={{ left: `${Math.random() * 100}%`, top: "-20px", animationDelay: `${Math.random() * 0.8}s`, animationDuration: `${2.5 + Math.random() * 2}s`, }} />))} </div> {/* Success message */} <div className="relative flex flex-col items-center gap-4 animate-success-pop"> <div className="rounded-full bg-white/95 p-4 shadow-2xl"> <CheckCircle2 className="w-14 h-14 text-green-500" /> </div> <div className="rounded-2xl bg-white/95 px-8 py-5 shadow-2xl text-center"> <h3 className="text-xl font-bold text-gray-900"> Message Sent! </h3> <p className="mt-1 text-sm text-gray-600"> Thanks for reaching out. We'll get back to you soon. </p> </div> </div> </div>); }
