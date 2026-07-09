import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useApp } from "../context/AppContext";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { BiSend } from "react-icons/bi";
import Button from "./ui/Button";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const EMAILJS_SERVICE_ID = "service_0p9m5eb";
const EMAILJS_TEMPLATE_ID = "template_nyef1nf";
const EMAILJS_PUBLIC_KEY = "WUy658_PNbQkVRhFx";

const Contact = () => {
  const { language, t } = useApp();
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const now = new Date();
    const time = now.toLocaleString(language === "en" ? "en-US" : "vi-VN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: nameRef.current.value,
          from_email: emailRef.current.value,
          message: messageRef.current.value,
          title: "Contact Form",
          time,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-4 bg-white"
      style={{
        fontFamily: language === "vi" ? "Inter, sans-serif" : "inherit",
      }}
    >
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Contact details */}
          <div className="flex flex-col justify-start">
            <h1 className="text-2xl text-neutral-900 tracking-wide leading-none mb-6 ">
              {t.getInTouch}
            </h1>
            <p className="text-base leading-relaxed mb-10 text-neutral-600">
              {t.contactDescription}
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-4 border border-dashed border-neutral-200 rounded-none px-6 py-4 transition-all hover:bg-neutral-50">
                <FiPhone className="text-lg opacity-70" />
                <div className="text-sm font-semibold">
                  Phone:{" "}
                  <a href="tel:+84363337511" className="hover:underline">
                    +84 363 337 511
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 border border-dashed border-neutral-200 rounded-none px-6 py-4 transition-all hover:bg-neutral-50">
                <FiMail className="text-lg opacity-70" />
                <div className="text-sm font-semibold">
                  Email:{" "}
                  <a
                    href="mailto:tt.tan25204@gmail.com"
                    className="hover:underline"
                  >
                    tt.tan25204@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 border border-dashed border-neutral-200 rounded-none px-6 py-4 transition-all hover:bg-neutral-50">
                <FiMapPin className="text-lg opacity-70" />
                <div className="text-sm font-semibold">
                  Address: Thu Duc, Vietnam
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact form */}
          <div className="flex flex-col justify-center">
            <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-5">
              <div className="flex flex-col gap-1">
                <input
                  ref={nameRef}
                  type="text"
                  required
                  placeholder={language === "en" ? "Name" : "Tên của bạn"}
                  className="w-full px-5 py-4 border border-gray-200 rounded-none text-sm bg-transparent text-black transition-all outline-none focus:border-neutral-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <input
                  ref={emailRef}
                  type="email"
                  required
                  placeholder="E-mail"
                  className="w-full px-5 py-4 border border-gray-200 rounded-none text-sm bg-transparent text-black transition-all outline-none focus:border-neutral-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <textarea
                  ref={messageRef}
                  required
                  rows="5"
                  placeholder={language === "en" ? "Message" : "Tin nhắn..."}
                  className="w-full px-5 py-4 border border-gray-200 rounded-none text-sm bg-transparent text-black transition-all outline-none resize-none focus:border-neutral-500"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 border border-black text-black hover:border-black hover:text-white relative overflow-hidden z-1 before:absolute before:bottom-0 before:right-0 before:w-0 before:h-0 before:bg-black before:rounded-full before:transition-all before:duration-500 hover:before:scale-[800%] before:-z-1 hover:before:w-10 hover:before:h-10 px-6 py-4 rounded-none text-sm font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" && <span>{language === "en" ? "Sending..." : "Đang gửi..."}</span>}
                {status === "success" && <span className="text-green-600 flex items-center gap-1.5"><FaCheckCircle />{language === "en" ? "Message sent!" : "Đã gửi thành công!"}</span>}
                {status === "error" && <span className="text-red-500 flex items-center gap-1.5"><IoMdCloseCircle />{language === "en" ? "Failed. Try again." : "Lỗi, thử lại nhé."}</span>}
                {status === "idle" && <><span>{t.contactMe}</span><BiSend size={16} /></>}
              </Button>
            </form>
          </div>
        </div>

        {/* Grayscale map below - Centered at Thu Duc, Ho Chi Minh City */}
        <div className="mt-16 w-full h-80 rounded-none overflow-hidden shadow-sm ">
          <iframe
            title="Google Maps Location"
            className="w-full h-full grayscale border-0 opacity-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.47965963282!2d106.75806411134015!3d10.85143248925232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752797e50c9539%3A0xa19f50e7b8f9a263!2zVGjhu6cgxJDhu6ljLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
