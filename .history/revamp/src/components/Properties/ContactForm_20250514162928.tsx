// src/components/properties/ContactForm.tsx

import React, { useState } from "react";
import { Input, Textarea, Button } from "your-ui-library";
// Adjust the import paths according to your setup

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full lg:w-[500px] bg-PRIMEwhite border border-PRIMElightgray rounded-xl p-6 self-start shadow-xl">
      <h3 className="text-maintitle text-PRIMEblue mb-4 gotham-bold">
        Contact Us
      </h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
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
