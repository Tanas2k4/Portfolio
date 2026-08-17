import { BsDownload, BsGithub, BsLinkedin } from "react-icons/bs";
import { SiZalo } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { useApp } from "../context/AppContext";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

import cc1 from "../../public/cv/cc1.pdf";
import cc2 from "../../public/cv/cc2.pdf";
import cc3 from "../../public/cv/cc3.pdf";
import aw from "../assets/aw.png";
import aw1 from "../assets/aw1.png";

const Intro = ({ setActiveTab }) => {
  const { language, t } = useApp();
  const [clickedStat, setClickedStat] = useState(null);
  const [parent] = useAutoAnimate();


  const stats = [
    {
      id: "projects",
      value: "3+",
      label: t.abProjects,
    },
    {
      id: "awards",
      value: "2+",
      label: t.abAwards,
      preview: [
        {
          name: "Database design champion 2024",
          date: "2024",
          image: aw,
        },
        {
          name: "HDBank Hackathon 2024",
          date: "2023",
          image: aw1,
        },
      ],
    },
    {
      id: "certificates",
      value: "3+",
      label: t.abCertificates,
      preview: [
        {
          name: "JavaScript Essentials 1",
          image: cc1,
        },
        {
          name: "JavaScript Essentials 2",
          image: cc2,
        },
        {
          name: "Networking Basics",
          image: cc3,
        },
      ],
    },
  ];



  return (
    <section
      id="home"
      className="w-full text-left py-1"
      style={{
        fontFamily: language === "vi" ? "Inter, sans-serif" : "inherit",
      }}
    >
      <div className="w-full ">
        {/* Name Title */}
        <h1 className="text-2xl  text-neutral-800 tracking-wide leading-none ">
          Summary
        </h1>

        {/* Bio Paragraph (Blockquote style with vertical left border) */}
        <div className="pl-5 border-l-4 border-neutral-300 my-4">
          <p className="text-base leading-relaxed text-neutral-600 font-light">
            {t.introDescription}
          </p>
        </div>

        {/* Row 1: Socials (GitHub, LinkedIn, Email, Zalo) - Nền đen, hover chuyển màu */}
        <div className="my-6 flex flex-wrap gap-5 items-center">
          {/* GitHub */}
          <a
            href="https://github.com/Tanas2k4"
            target="_blank"
            rel="noreferrer"
            title="GitHub Profile"
          >
            <BsGithub size={36} />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/t%E1%BA%A5n-tr%E1%BA%A7n-78b8b5379/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn Profile"
          >
            <BsLinkedin size={36} />
          </a>

          <a
            href="https://zalo.me/0363337511"
            target="_blank"
            rel="noreferrer"
            title="Zalo Chat"
            className="p-1.5 bg-black text-white rounded-sm"
          >
            <SiZalo size={25} />
          </a>
        </div>

        {/* Row 2: Stats Achievements clickable blocks */}
        <div className="my-6 flex flex-wrap gap-8 items-center pb-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              onClick={() => {
                if (stat.id === "projects" && setActiveTab) {
                  setActiveTab("projects");
                  window.history.pushState(null, "", `#projects`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else if (stat.preview) {
                  setClickedStat(stat.id);
                }
              }}
              className="flex flex-col justify-start select-none cursor-pointer hover:text-black transition-all"
            >
              <span className="font-bold text-neutral-900 text-2xl">
                {stat.value}
              </span>
              <span className="text-neutral-500 font-light">{stat.label}</span>
            </div>
          ))}
        </div>


      </div>

      {/* --- RENDER STAT PREVIEW MODALS IF CLICKED --- */}
      <div ref={parent}>
        {clickedStat && (
          <>
            {/* Backdrop */}
            <div
              onClick={() => setClickedStat(null)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md"
            />

            {/* Modal popup */}
            <div className="fixed z-[110] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl max-h-[85vh] overflow-y-auto rounded-none border border-neutral-400 p-6 sm:p-8 bg-white text-black">
              {/* Header / Close */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  {stats.find((s) => s.id === clickedStat)?.label}
                </h3>
                <button
                  onClick={() => setClickedStat(null)}
                  className="p-1 rounded-full text-gray-500 hover:bg-neutral-100 transition"
                >
                  <IoCloseOutline size={24} />
                </button>
              </div>

              {/* Grid display */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats
                  .find((s) => s.id === clickedStat)
                  ?.preview?.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-full h-72 overflow-hidden bg-white flex items-center justify-center">
                        {typeof item.image === "string" &&
                        item.image.includes(".pdf") ? (
                          <>
                            <iframe
                              src={item.image}
                              className="hidden sm:block w-full h-full"
                              title={item.name}
                            />
                            <a
                              href={item.image}
                              target="_blank"
                              rel="noreferrer"
                              className="sm:hidden flex flex-col items-center justify-center gap-1 text-blue-600 text-sm"
                            >
                              View PDF Link
                            </a>
                          </>
                        ) : (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>
                      <div className="mt-3 text-sm text-center">
                        {item.name}
                      </div>
                      {item.date && (
                        <div className="text-xs text-neutral-400 mt-1">
                          {item.date}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Intro;
