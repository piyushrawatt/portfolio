import React, { useState } from "react";
import axios from "axios";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Footer() {
  const [formdata, setformdata] = useState({
    email: "",
    name: "",
    message: "",
  });

  const showdata = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/routes/contact`,
        formdata
      );

      alert(response.data.message);

      setformdata({
        email: "",
        name: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      id="footer"
      className="flex flex-col items-center w-full py-16 px-4 bg-[#020617] gap-10"
    >
      {/* TITLE */}
      <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
        Let’s Connect
      </h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="w-full max-w-2xl">
        <div className="flex flex-col gap-5 bg-[#0F172A] text-slate-200 p-6 md:p-10 rounded-2xl shadow-2xl">

          {/* NAME */}
          <div>
            <h1 className="text-lg font-bold text-white mb-2">Name</h1>
            <input
              name="name"
              value={formdata.name}
              onChange={showdata}
              className="w-full h-10 md:h-12 border px-4 text-base md:text-lg rounded-xl"
              placeholder="Your Name"
              type="text"
              required
            />
          </div>

          {/* EMAIL */}
          <div>
            <h1 className="text-lg font-bold text-white mb-2">Email</h1>
            <input
              name="email"
              value={formdata.email}
              onChange={showdata}
              className="w-full h-10 md:h-12 border px-4 text-base md:text-lg rounded-xl"
              placeholder="Your Email"
              type="email"
              required
            />
          </div>

          {/* MESSAGE */}
          <div>
            <h1 className="text-lg font-bold text-white mb-2">Message</h1>
            <textarea
              name="message"
              value={formdata.message}
              onChange={showdata}
              className="w-full h-24 border px-4 py-2 text-base md:text-lg rounded-xl"
              placeholder="Your Message"
              required
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full h-11 md:h-12 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* SOCIAL ICONS */}
      <div className="flex gap-6 text-3xl text-white">
      <a href="https://www.linkedin.com/in/piyush-rawat-69985b35b">  <CiLinkedin className="hover:text-blue-400 cursor-pointer" /> </a>
        <FaSquareXTwitter className="hover:text-blue-400 cursor-pointer" />
      <a href="https://github.com/piyushrawatt">  <FaGithub className="hover:text-blue-400 cursor-pointer" /></a>
      </div>
    </div>
  );
}

export default Footer;