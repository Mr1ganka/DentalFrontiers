"use client";

import { useState } from "react";
import { Button } from "../ui/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.warn("NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not defined. Simulating submission.");
      setTimeout(() => {
        setStatus("success");
        setMessage("Thank you! Your message has been sent successfully. (Simulated)");
        (e.target as HTMLFormElement).reset();
      }, 1500);
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage("Thank you! Your message has been sent successfully.");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="h-12 rounded-md border bg-transparent px-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          placeholder="Jane Doe"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="h-12 rounded-md border bg-transparent px-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            placeholder="jane@example.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            pattern="[0-9\+\-\s\(\)]+"
            className="h-12 rounded-md border bg-transparent px-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="rounded-md border bg-transparent p-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          placeholder="How can we help you today?"
        ></textarea>
      </div>

      <Button type="submit" size="lg" className="w-full md:w-auto self-start" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>

      {status === "success" && (
        <p className="text-sm text-green-600 font-medium">{message}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 font-medium">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
