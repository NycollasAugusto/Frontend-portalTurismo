import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-gradient-to-r from-orange-600 via-red-700 to-yellow-500 text-black py-4 px-6 shadow-xl mt-auto font-dbz relative overflow-hidden">
        {/* Aura animada atrás do footer */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-20 animate-pulse-slow blur-3xl"
          style={{ zIndex: 0 }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg font-bold text-black drop-shadow-[0_0_10px_rgba(255,165,0,0.9)] animate-glow-pulse">
              DRAGON BALL © 2025
            </p>
          </div>

          <div className="flex space-x-8 text-black">
            {[
              { icon: <FaFacebookF />, href: "#" },
              { icon: <FaWhatsapp />, href: "#" },
              { icon: <FaInstagram />, href: "#" },
            ].map(({ icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="text-black hover:text-yellow-400 transition-colors duration-300 relative group"
                aria-label="Social Link"
              >
                <span className="absolute -inset-1 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-500 animate-pulse-slow"></span>
                <span className="relative text-2xl drop-shadow-[0_0_5px_rgba(255,165,0,0.9)]">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes glow-pulse {
            0%, 100% {
              text-shadow: 0 0 8px #f59e0b, 0 0 12px #fbbf24, 0 0 20px #fbbf24;
            }
            50% {
              text-shadow: 0 0 15px #fbbf24, 0 0 25px #f59e0b, 0 0 30px #f59e0b;
            }
          }
          .animate-glow-pulse {
            animation: glow-pulse 3s ease-in-out infinite;
          }

          @keyframes pulse-slow {
            0%, 100% {
              opacity: 0.6;
              filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.7));
            }
            50% {
              opacity: 1;
              filter: drop-shadow(0 0 14px rgba(251, 191, 36, 1));
            }
          }
          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;
