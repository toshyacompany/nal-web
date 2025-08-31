/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

const SidebarBlock: React.FC<{
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, children, className }) => (
  <div className={`p-6 ${className ?? "bg-white"} shadow-sm`}>
    <h4 className="mb-4 text-2xl font-bold text-[#131313]">{title}</h4>
    <div className="text-base text-[#343434]">{children}</div>
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full px-4 py-3 text-left"
        aria-expanded={open}
      >
        <span className=" text-lg font-bold text-[#131313]">{question}</span>
      </button>

      {open && <div className="px-4 py-3 text-sm text-gray-600">{answer}</div>}
    </div>
  );
};

const SingleServiceContent: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left sidebar */}
          <div className="space-y-6">
            <SidebarBlock
              title="Other Services"
              className="bg-[#F4F4F4] border border-[#1212120F]"
            >
              <ul className="space-y-3">
                <li className="py-3 border-b">Industrial Support</li>
                <li className="py-3 border-b">Equipment Support</li>
                <li className="py-3">Material Support</li>
              </ul>
            </SidebarBlock>

            <SidebarBlock
              title="Company Profile"
              className="bg-[#F4F4F4] border border-[#1212120F]"
            >
              <div className="flex items-center justify-between w-full p-4 bg-white rounded-md">
                <div className="flex items-center gap-4">
                  <div className="w-px h-10 bg-[#1212120F] opacity-20" />
                  <span className="text-lg font-medium">Download Pdf</span>
                </div>

                <a
                  href="/company-profile.pdf"
                  download
                  className="inline-flex items-center justify-center w-10 h-10 text-white bg-orange-400 rounded-md"
                  aria-label="Download PDF"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v12m0 0l4-4m-4 4l-4-4M21 21H3"
                    />
                  </svg>
                </a>
              </div>
            </SidebarBlock>

            <div className="relative ">
              <img
                src="/SS1.png"
                alt="team"
                className="w-full h-auto shadow-sm"
              />

              <div className="absolute w-[336px] py-8 px-8 -translate-x-1/2 bg-white shadow-lg left-1/2 -bottom-16 ">
                <img src="/layer1.png" alt="" className="mx-auto mb-2 " />
                <h5 className="mb-4 text-2xl font-bold text-center text-[#131313]">
                  We&apos;re Always Ready For Help You
                </h5>

                <button className="block px-20 py-4 mx-auto mt-4 text-white bg-orange-400 rounded">
                  NEED HELP
                </button>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="md:col-span-2">
            <div className="mb-10">
              <img src="/MS.jpg" alt="service" className="w-full h-auto" />
            </div>

            <h2 className="mb-4 text-5xl font-bold text-[#131313]">
              Manpower Support
            </h2>
            <p className="mb-4 text-base font-normal text-[#343434]">
              Nal Arabia Provides Reliable Manpower Solutions Tailored To
              Industrial And Construction Projects. Our Workforce Ranges From
              Unskilled Labor To Highly Trained Professionals, Ensuring That
              Every Project Is Delivered Safely, On Time, And With Quality.
            </p>

            <p className="text-base font-normal text-[#343434] mb-2">
              We specialize in supplying:
            </p>
            <div className="mb-3 text-sm prose text-gray-700">
              <ul className="ml-6 list-disc">
                <li>
                  Skilled Workers: Pipe Fabricators, Fitters, Electricians...
                </li>
                <li>
                  Professionals: Engineers (Civil, Mechanical, Electrical)
                </li>
                <li>General Manpower: Helpers, Guards, Watchmen, Loaders</li>
              </ul>
            </div>
            <p className="text-base font-normal text-[#343434]">
              Our manpower support helps clients reduce risk, maintain
              efficiency, and meet critical project timelines.
            </p>

            <hr className="my-6" />

            <h3 className="mb-3 text-xl font-semibold">Working Challenge</h3>
            <div className="grid grid-cols-1 gap-4 mb-6 text-sm text-gray-700 md:grid-cols-2">
              <div>
                <ul className="ml-6 list-disc">
                  <li>Quick Mobilization Of Workforce</li>
                  <li>Long-Term & Short-Term Manpower Supply</li>
                </ul>
              </div>
              <div>
                <ul className="ml-6 list-disc">
                  <li>Specialized Technical Staff For Key Operations</li>
                  <li>Safety-Trained Teams With Industrial Standards</li>
                </ul>
              </div>
            </div>

            <hr className="my-6" />

            <h3 className="mb-5 text-3xl text-[#131313] font-bold">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <FAQItem
                question="How Does Nal Arabia Ensure Manpower Quality?"
                answer="Through rigorous screening, training, and on-site supervision to meet client expectations."
              />
              <FAQItem
                question="Can Manpower Be Supplied On Short Notice?"
                answer="Yes, we have a strong database and mobilization system to provide workforce quickly."
              />
              <FAQItem
                question="Do You Provide Both Skilled And Unskilled Workers?"
                answer="Yes, we supply both categories based on project requirements."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleServiceContent;
