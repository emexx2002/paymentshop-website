import React, { useState } from "react";

const faqData = [
  {
    question: "What is PaymentShop?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "How does it work?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, expedita!",
  },
  {
    question: "How can it scale my business?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.",
  },
  {
    question: "What banks can be used on PaymentShop portal?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a metus sit amet ligula convallis vehicula.",
  },
];

const Questions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 px-8 min-h-screen">
        <div className="max-w-6xl max-h-full mx-auto bg-[#D3D3D3] shadow-lg rounded-2xl p-40">
      <h1 className="text-4xl font-bold text-center mb-4">FAQ's</h1>
      <p className="text-center text-gray-600 mb-6">
        Got questions? We've got answers. If you have some other questions, feel
        free to send us an email to <a href="mailto:sales@paymentshop.io" className="text-blue-500 underline">sales@paymentshop.io</a>
      </p>
      <div className="">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="py-6 border-b last:border-b-0 cursor-pointer border-gray-600"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h2>
              <span className="text-orange-500 text-xl">
                {openIndex === index ? "\u25B2" : "\u25BC"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default Questions;
