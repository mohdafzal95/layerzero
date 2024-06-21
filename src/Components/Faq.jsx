import React, { useState, useEffect } from "react";
import frog from "../assets/A techno Festival Rave Diamond psytrance DJ Diamon-Photoroom.png";
import FallingMeteors from "./starts";
import BlinkingStarsBackground from "./BlinkingStarsBackground";
import AOS from "aos";
import "aos/dist/aos.css";

function FAQSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "Where can I find out more about MOYE?",
      answer:
        "On our various social networks on Twitter, Telegram, and Discord.",
    },
    {
      question: "How do I buy MOYE?",
      answer:
        "At the moment, only in the pre-sale (PINKSALE & GEMPAD) you can navigate to the pre-sale page and be updated with the rest of the details.",
    },
    {
      question: "Who are the owners of the project?",
      answer:
        "3 Fatty and Handsome MOYEE Frogs who want to do good, and get back.",
    },
    {
      question: "What is the technology behind the project?",
      answer: "MOYEEEEEEEEEEEEEEE",
    },
  ];

  return (
    <div
      id="faq"
      className="w-full text-white py-8 md:py-12 z-50 flex flex-col md:flex-row justify-center bg-ocean-blue-900"
    >  
      <FallingMeteors></FallingMeteors>
      <div className="  absolute">
        <BlinkingStarsBackground />
      </div>
      {/* <div className="w-full md:w-1/3 relative mb-8 md:mb-0">
        <div className="flex justify-center md:justify-start animate-float">
          <img className="w-3/4 md:w-full" src={frog} alt="MOYE Frog" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 bg-pink-500 blur-2xl w-64 h-6"></div>
      </div> */}
      <div className="w-full md:w-2/3 px-4 md:px-8 lg:px-12" data-aos="fade-up">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>
        <div>
          <div className=" object-cover  absolute">
            <BlinkingStarsBackground />
          </div>
          {faqs.map((faq, index) => (
            <div key={index} className="w-full py-4">
              <h3
                className="flex justify-between items-center border border-white rounded-full px-3 py-4 md:py-6 text-base md:text-lg font-medium cursor-pointer"
                onClick={() => setOpen(open === index ? null : index)}
              >
                <span className="pr-4">{faq.question}</span>
                <span
                  className={`transform transition-transform duration-300 text-sm md:text-base ${
                    open === index ? "rotate-90" : ""
                  }`}
                >
                  &#9654;
                </span>
              </h3>
              {open === index && <div className="mt-4 px-3">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
