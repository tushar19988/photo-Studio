"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm({ preselectedPackage = "" }: { preselectedPackage?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "Wedding",
    eventDate: "",
    location: "",
    guests: "",
    budget: "",
    preferredPackage: preselectedPackage,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(data.message || "Failed to submit enquiry. Please check your entries.");
      }
    } catch (err) {
      setErrorMessage("Network connection error. Please try calling 097243 22046 directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-bg-secondary border border-border-custom rounded-2xl p-10 text-center flex flex-col items-center gap-6">
        <CheckCircle2 size={48} className="text-accent" />
        <h3 className="font-serif text-3xl text-text-primary">Thank You!</h3>
        <p className="text-text-secondary text-base max-w-md leading-relaxed">
          Your photography enquiry has been received successfully. Our team will review your details and contact you shortly.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              eventType: "Wedding",
              eventDate: "",
              location: "",
              guests: "",
              budget: "",
              preferredPackage: "",
              message: "",
            });
          }}
          className="px-6 py-2.5 rounded-full border border-border-custom bg-bg-surface text-xs font-semibold uppercase tracking-wider text-text-primary hover:border-accent"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-bg-secondary border border-border-custom rounded-2xl p-8 flex flex-col gap-6">
      {errorMessage && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-4 rounded-xl text-xs flex items-center gap-2">
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-wider font-semibold text-text-primary">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rahul Patel"
            className="w-full bg-bg-surface border border-border-custom rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-wider font-semibold text-text-primary">
            Phone Number <span className="text-accent">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 097243 22046"
            className="w-full bg-bg-surface border border-border-custom rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-wider font-semibold text-text-primary">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full bg-bg-surface border border-border-custom rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {/* Event Type */}
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-wider font-semibold text-text-primary">
            Event Type <span className="text-accent">*</span>
          </label>
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full bg-bg-surface border border-border-custom rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent transition-colors cursor-pointer"
          >
            <option value="Wedding">Wedding Photography</option>
            <option value="Engagement">Engagement Ceremony</option>
            <option value="Birthday">Birthday Party</option>
            <option value="Pre-Wedding">Pre-Wedding Shoot</option>
            <option value="Event">Anniversary / Special Event</option>
            <option value="Portrait">Couples / Portrait Session</option>
            <option value="Other">Other Event</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Event Date */}
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-wider font-semibold text-text-primary">
            Expected Event Date
          </label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full bg-bg-surface border border-border-custom rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {/* Location */}
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-wider font-semibold text-text-primary">
            Event Venue / Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Sanand / Ahmedabad"
            className="w-full bg-bg-surface border border-border-custom rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label className="text-xs uppercase tracking-wider font-semibold text-text-primary">
          Additional Details or Requirements
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your event timeline, ceremonies, or specific coverage preferences..."
          className="w-full bg-bg-surface border border-border-custom rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-full bg-accent text-bg-surface text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            <span>Sending Enquiry...</span>
          </>
        ) : (
          <>
            <span>Send Enquiry</span>
            <Send size={14} />
          </>
        )}
      </button>
    </form>
  );
}
