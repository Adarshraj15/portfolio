import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l2knco3",
        "template_ymjfpj8",
        form.current,
        "zhP7TnNNaSmXWud_9"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! 🚀", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        () => {
          toast.error("Failed to send message 😕", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-36 px-[8vw] md:px-[10vw] lg:px-[20vw]
                 bg-gradient-to-b from-[#020617] via-[#0b1120] to-[#020617]"
    >
      <ToastContainer />

      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-wide">
          Contact
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full" />

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          Have an idea, opportunity, or just want to say hi?  
          My inbox is always open.
        </p>
      </div>

      {/* Contact Card */}
      <div className="flex justify-center">
        <div
          className="relative w-full max-w-md p-8 rounded-2xl
                     bg-gradient-to-br from-white/10 to-white/[0.03]
                     backdrop-blur-xl
                     border border-white/10
                     shadow-[0_0_60px_rgba(99,102,241,0.25)]"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none
                          bg-gradient-to-r from-blue-500/10 to-purple-500/10" />

          <h3 className="relative text-2xl font-semibold text-white text-center mb-6">
            Connect With Me <span className="ml-1">🚀</span>
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="relative flex flex-col gap-5"
          >
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-xl
                         bg-white/5 text-white
                         border border-white/10
                         focus:outline-none
                         focus:border-blue-500/50
                         focus:bg-white/10"
            />

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-xl
                         bg-white/5 text-white
                         border border-white/10
                         focus:outline-none
                         focus:border-blue-500/50
                         focus:bg-white/10"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-xl
                         bg-white/5 text-white
                         border border-white/10
                         focus:outline-none
                         focus:border-blue-500/50
                         focus:bg-white/10"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-xl
                         bg-white/5 text-white
                         border border-white/10
                         focus:outline-none
                         focus:border-blue-500/50
                         focus:bg-white/10"
            />

            {/* Button */}
            <button
              type="submit"
              className="mt-4 w-full py-3 rounded-xl
                         font-semibold text-white
                         bg-gradient-to-r from-blue-600 to-purple-600
                         hover:shadow-[0_10px_40px_rgba(99,102,241,0.5)]
                         hover:-translate-y-[1px]
                         transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
