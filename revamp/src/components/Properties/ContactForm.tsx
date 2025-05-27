import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import axios from "axios";

const ContactForm: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Post form data to Laravel backend API
      const response = await axios.post(
        "http://localhost:8000/api/contact-form",
        formData
      );

      alert(response.data.message); // Show success message

      // Clear form after success
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error: any) {
      // Log error to console
      console.error("Error submitting form:", error);

      // Display user-friendly error message
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(`Failed to submit form: ${error.response.data.message}`);
      } else {
        alert("Failed to submit form. Please try again.");
      }
    }
  };

  return (
    <section className="w-full lg:w-[500px] bg-PRIMEwhite border border-PRIMElightgray rounded-xl p-6 self-start shadow-xl">
      <h3 className="text-maintitle text-PRIMEblue mb-4 gotham-bold">
        Contact Us
      </h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-subcontent text-PRIMEgray mb-1 gotham-bold">
            Full Name
          </label>
          <Input
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full border border-PRIMElightgray rounded-lg px-4 py-2 text-subcontent focus:outline-none focus:ring-2 focus:ring-PRIMEblue"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="block text-subcontent text-PRIMEgray mb-1 gotham-bold">
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            className="w-full border border-PRIMElightgray rounded-lg px-4 py-2 text-subcontent focus:outline-none focus:ring-2 focus:ring-PRIMEblue"
          />
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="email"
            className="block text-subcontent text-PRIMEgray mb-1 gotham-bold">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full border border-PRIMElightgray rounded-lg px-4 py-2 text-subcontent focus:outline-none focus:ring-2 focus:ring-PRIMEblue"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-subcontent text-PRIMEgray mb-1 gotham-bold">
            Message
          </label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            className="w-full border border-PRIMElightgray rounded-lg px-4 py-2 text-subcontent focus:outline-none focus:ring-2 focus:ring-PRIMEblue"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-PRIMEblue hover:bg-[#002855] rounded-lg py-2 text-subcontent gotham-bold text-PRIMEwhite">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
