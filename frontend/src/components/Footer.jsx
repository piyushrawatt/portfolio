import React, { useState } from "react";
import axios from "axios";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Footer() {
  const [formdata, setformdata] = useState({
    mail: "",
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
       "http://localhost:4000/routes/gmail",
        formdata
      );

      alert(response.data.message);

      // optional: clear form after submit
      setformdata({
        mail: "",
        name: "",
        message: "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="footer" className="flex flex-col h-screen w-full items-center gap-10">
      <div className="text-5xl tracking-widest font-bold">Lets Connect</div>

      <form onSubmit={handleSubmit}>
        <div className="border h-150 w-170 gap-5 pt-4 flex flex-col rounded-2xl shadow-2xl">

          <div className="text-center">
            <h1 className="text-xl font-bold tracking-widest">Name</h1>
            <input
              name="name"
              value={formdata.name}
              onChange={showdata}
              className="h-10 w-150 border pl-4 text-xl rounded-2xl mt-3"
              placeholder="Your Name"
              type="text"
              required
            />
          </div>

          <div className="text-center">
            <h1 className="text-xl font-bold tracking-widest">Your Email</h1>
            <input
              name="mail"
              value={formdata.mail}
              onChange={showdata}
              className="h-10 w-150 border pl-4 text-xl rounded-2xl mt-3"
              placeholder="Your Email"
              type="email"
              required
            />
          </div>

          <div className="text-center">
            <h1 className="text-xl font-bold tracking-widest">Message</h1>
            <input
              name="message"
              value={formdata.message}
              onChange={showdata}
              className="h-20 w-150 border pl-4 text-xl rounded-2xl mt-3"
              placeholder="Your Message"
              type="text"
              required
            />
          </div>

          <div className="w-full text-center">
            <button
              type="submit"
              className="border h-12 w-140 bg-blue-600 text-white rounded-4xl"
            >
              Send Message
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default Footer;
