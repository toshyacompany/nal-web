/* eslint-disable @next/next/no-img-element */
import React from "react";

const IconPlaceholder: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => (
  <div className="flex items-center justify-center w-14 h-14 mb-4 text-[#1420b8]">
    {children}
  </div>
);

const AdvanceSolution: React.FC = () => {
  return (
    <section className="w-full bg-[#f6f6f6] py-16">
      <div className="container px-6 mx-auto">
        <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex flex-col gap-2">
                <span className="w-10 h-[2px] bg-[#1420b8] rounded" />
                <span className="w-10 h-[2px] bg-[#1420b8] rounded" />
              </div>
              <div className="text-xs font-semibold text-[#1420b8] tracking-wide">
                ADVANCE SOLUTIONS
              </div>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-[#0b0b0b]">
              We Help For
              <br />
              <span className="text-4xl">Industrial Growth</span>
            </h2>

            <p className="max-w-md mt-6 text-sm text-gray-600">
              Delivering Trusted Manpower, Equipment, And Material Support To
              Empower Industries And Ensure Project Success.
            </p>
          </div>

          <div className="mt-20 md:col-span-3">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <article className="flex flex-col">
                <IconPlaceholder>
                  <img src="/IS.png" alt="" />
                </IconPlaceholder>
                <h3 className="mb-2 text-lg font-semibold">
                  Industrial Support
                </h3>
                <p className="text-sm text-gray-600">
                  Comprehensive Manpower And Trade Services Tailored To Diverse
                  Industrial Requirements.
                </p>
              </article>

              <article className="flex flex-col">
                <IconPlaceholder>
                  <img src="/SW.png" alt="" />
                </IconPlaceholder>
                <h3 className="mb-2 text-lg font-semibold">
                  Skilled Workforce
                </h3>
                <p className="text-sm text-gray-600">
                  Qualified Professionals And Technicians Ensuring Quality,
                  Safety, And Timely Delivery.
                </p>
              </article>

              <article className="flex flex-col">
                <IconPlaceholder>
                  <img src="/CC.png" alt="" />
                </IconPlaceholder>
                <h3 className="mb-2 text-lg font-semibold">
                  Client Commitment
                </h3>
                <p className="text-sm text-gray-600">
                  Dedicated To Transparency, Reliability, And Building Long-Term
                  Client Relationships.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvanceSolution;
