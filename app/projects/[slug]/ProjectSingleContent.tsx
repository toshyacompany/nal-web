/* eslint-disable @next/next/no-img-element */
import React from "react";

const MetaItem: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div className="text-sm">
    <div className="text-base font-normal text-[#343434] ">{label}</div>
    <div className="pt-1 text-lg font-bold text-[#131313]">{value}</div>
  </div>
);

const ProjectSingleContent: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container px-6 mx-auto">
        <div className="max-w-5xl mx-auto mb-8">
          <img
            src="/project1.png"
            alt="project"
            className="w-full h-[777.59px] object-cover"
          />
        </div>

        <div className="grid items-start max-w-5xl grid-cols-1 gap-6 mx-auto mb-8 md:grid-cols-3">
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 gap-2 text-sm text-gray-600 md:grid-cols-4 md:gap-6 border-b border-[#E7E7E7] pb-5">
                <MetaItem label="Date" value="21 March 2024" />
                <MetaItem
                  label="Category"
                  value="Industrial Support & Manpower"
                />
                <MetaItem label="Customer" value="NEOM Consortium" />
                <MetaItem label="Locations" value="NEOM, Saudi Arabia" />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <h3 className="text-3xl font-bold text-[#131313]">
                  About Project
                </h3>
                <p className="col-span-2 font-normal text-[#343434] text-base leading-8">
                  Nal Arabia Contracting Establishment was entrusted to
                  provide industrial support and manpower services for the NEOM
                  Green Hydrogen Project. Our role included mobilizing skilled
                  and unskilled manpower, supplying scaffolding materials, and
                  supporting civil and mechanical works. The project demanded
                  strict adherence to safety, timelines, and technical
                  standards. Our workforce of engineers, technicians, and
                  general laborers played a vital role in ensuring smooth
                  execution of daily operations.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <img
                  src="/service1.png"
                  alt="thumb1"
                  className="w-full h-auto"
                />
                <img
                  src="/service2.png"
                  alt="thumb2"
                  className="w-full h-auto"
                />
                <img
                  src="/service3.png"
                  alt="thumb3"
                  className="w-full h-auto"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
                <h4 className="mb-2 text-2xl font-semibold text-[#131313]">
                  The Challenges
                </h4>
                <ul className="col-span-2 ml-6 text-base text-[#343434] leading-8 list-disc">
                  <li>
                    Mobilizing manpower in a remote project location within
                    tight deadlines
                  </li>
                  <li>
                    Maintaining safety standards for high-risk construction and
                    industrial activities
                  </li>{" "}
                  <li>
                    Coordinating between multiple contractors and project teams
                  </li>{" "}
                  <li>
                    Ensuring continuous supply of scaffolding, fabrication, and
                    electrical support teams
                  </li>
                </ul>

                <h4 className="mb-2 text-2xl font-semibold text-[#131313]">
                  The Solutions
                </h4>
                <ul className="col-span-2 ml-6 text-base text-[#343434] leading-8 list-disc">
                  <li>
                    Rapid Mobilization: Deployed 250+ skilled and unskilled
                    workers within two weeks through Nal Arabia’s workforce
                    pool.
                  </li>
                  <li>
                    Skilled Expertise: Provided experienced engineers, pipe
                    fitters, scaffolders, electricians, and supervisors for
                    critical works.
                  </li>{" "}
                  <li>
                    Safety & Training: Conducted mandatory safety orientation
                    and on-site training before deployment.
                  </li>{" "}
                  <li>
                    Reliable Support: Ensured 24/7 availability of backup teams,
                    materials, and technical staff to meet project demands.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSingleContent;
