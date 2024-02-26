import React, { useState } from "react";
import Footer from "../Footer";
import emailjs from "@emailjs/browser";

function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    department: "",
    studentClass: "",
    rollNumber: "",
  });
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");

  const senderName = "RavalBit";
  const senderEmail = "ravalbit@gmail.com";
  const recipientEmails = ["mahmadali3180@gmail.com", "mahmadaliwork3180.com"];
  // const recipientEmails = [
  //   "muhammadasadsaeed9439@gmail.com",
  //   "Eshafayyaz212@gmail.com",
  // ];
  const serviceID = "service_ysc9ynw";
  const templateID = "template_vqv2vxp";
  const publicKey = "cmb8dUqvncj9y3vlM";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const message = `
    Name: ${formData.fullName}
    Email: ${formData.email}
    Phone Number: ${formData.phoneNumber}
    Department: ${formData.department}
    Class: ${formData.studentClass}
    Roll Number: ${formData.rollNumber}
  `;

    const emailParams = {
      message,
      from_name: senderName,
      from_email: senderEmail,
      to_email: recipientEmails.join(", "),
    };

    emailjs.send(serviceID, templateID, emailParams, publicKey).then(
      (response) => {
        setStatus(true);
        console.log("Email sent successfully!", response);
      },
      (error) => {
        console.error("Email sending failed:", error);
        setStatus(false);
        setError(error);
      }
    );
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      department: "",
      studentClass: "",
      rollNumber: "",
    });
    setStatus(false);
  };

  return (
    <>
      <section className="mt-8">
        <div className="bg-white shadow-custom shadow-gray-500 rounded-lg p-12 max-w-3xl mx-auto mb-20">
          <h1 className="text-primary text-2xl sm:text-4xl mb-8 text-center font-semibold">
            Register
          </h1>
          {status && (
            <div className="bg-green-200 border-green-500 border-2 rounded-lg w-1/2 mx-auto text-center py-6 text-green-600">
              Registration Successfull
            </div>
          )}
          {!status && error.length > 1 && (
            <div className="bg-pink-200 border-red-400 border-2 rounded-lg w-1/2 mx-auto text-center py-6 text-red-500">
              Failed to Register. Please Try Later
            </div>
          )}

          <form
            action="sumbit"
            className="flex flex-col gap-4"
            onSubmit={handleFormSubmit}
            onFocus={() => setStatus(false)}
          >
            <div className="flex flex-col gap-1">
              <label className="text-gray-600 text-sm">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="pt-4 border-b-2 border-gray-300 text-primary"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gray-600 text-sm">Email</label>
              <input
                type="email"
                required
                placeholder="username@example.com"
                className="pt-4 border-b-2 border-gray-300 text-primary"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gray-600 text-sm">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                required
                placeholder="03XXXXXXXXX"
                className="pt-4 border-b-2 border-gray-300 text-primary"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gray-600 text-sm">Department</label>
              <input
                type="text"
                placeholder="Department"
                name="department"
                required
                className="pt-4 border-b-2 border-gray-300 text-primary"
                value={formData.department}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gray-600 text-sm">Class</label>
              <input
                type="text"
                placeholder="Class"
                name="studentClass"
                required
                className="pt-4 border-b-2 border-gray-300 text-primary"
                value={formData.studentClass}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gray-600 text-sm">Roll Number</label>
              <input
                type="text"
                name="rollNumber"
                required
                placeholder="Example: 17c"
                className="pt-4 border-b-2 border-gray-300 text-primary"
                value={formData.rollNumber}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="px-8 py-2 my-6 bg-primary rounded-full max-w-[40%] mx-auto text-center text-white font-semibold"
            >
              Register
            </button>
          </form>
        </div>
        <div>
          <Footer />
        </div>
      </section>
    </>
  );
}

export default RegisterForm;
