import React from "react";
import NotificationBar from "@components/NotificationBar/NotificationBar";
import Navbar from "@components/Navbar/Navbar";
import HeroCarousel from "@components/HeroCarousel/HeroCarousel";
import { CheckCircle } from 'lucide-react';
import CountdownTimer from "./Clock";
import Notice from "./Notice";

const subThemes = [
  "Solar Power Innovations (Perovskite cells, floating solar)",
  "Wind Energy Advancements (Offshore wind, high-efficiency turbines)",
  "Green Hydrogen and Fuel Cells",
  "Geothermal and Tidal Energy",
  "Energy Storage & Battery Technologies (Solid-state, flow batteries)",
  "Carbon Capture, Utilization, and Storage (CCUS)",
  "Direct Air Capture (DAC) Technologies",
  "Carbon Offsetting and Trading Mechanisms",
  "Industrial-Decarbonization Strategies",
  "Low-Carbon Manufacturing and Supply Chains",
  "Eco-friendly Materials and Biodegradable Alternatives",
  "Waste-to-Energy and Waste Management Innovations",
  "Circular Economy Business Models (Product life extension, remanufacturing)",
  "Sustainable Packaging Solutions",
  "Blockchain for Sustainable Supply Chains",
  "Energy-Efficient Buildings & Retrofitting",
  "Smart Grids and Decentralized Energy Systems",
  "Sustainable Urban Mobility (EVs, public transport electrification)",
  "Green Roofing & Vertical Forests",
  "Water Management & Conservation Technologies",
  "Nature-Based Solutions (Reforestation, blue carbon initiatives)",
  "Climate Change Adaptation Policies",
  "Sustainable Agriculture & Regenerative Farming",
  "AI & Big Data for Climate Monitoring",
  "Corporate Net-Zero Roadmaps & Sustainability Reporting",
  "Green Finance & Sustainable Investing",
  "ESG Regulations & Compliance",
  "Stakeholder Engagement in Sustainability",
  "Sustainable Supply Chain Management",
  "UN Sustainable Development Goals (SDGs) & Climate Agreements",
  "Green Policy Innovations & Government Incentives",
  "Carbon Taxation & Emission Regulations",
  "Green Technology Accelerators for Climate Action",
  "Green Public Procurement Strategies",
  "Any other topic related to Energy & Sustainability"
];

const Home = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Notification Bar */}
      <div className="fixed top-16 left-0 w-full z-40">
        <NotificationBar />
      </div>

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* About Section */}
      <div
        className="flex flex-col lg:flex-row items-start gap-8 px-4 md:px-8 lg:px-12 py-12 bg-white"
        data-aos="fade-up" // 
      >
        {/* Poster Image */}
        <div className="w-full lg:w-1/4">
          <img
            src="logonitt.png"
            alt="Environment 2024 Poster"
            className="rounded-xl shadow-lg w-full max-w-[400px] max-h-[400px] object-contain"
          />
        </div>

        {/* Initial Text Content */}
        <div className="w-full lg:w-3/4 mt-8 lg:mt-0">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            About the Conference
          </h2>
          <div className="w-20 h-1 bg-green-500 mb-6" />

          <p className="text-gray-700 mb-4 text-justify leading-relaxed">
            The Advances in Green, Net-Zero Innovation - Sustainability (AGNI-S) conference,
            organized by the Energy and Environment Department at NIT Trichy, is a platform
            dedicated to fostering innovation and sustainable development. AGNI-S focuses
            on advancing research and technologies that support the transition to a green,
            net-zero future. The conference brings together researchers, industry experts, and policymakers to address
            critical challenges in energy efficiency, renewable energy systems, carbon neutrality, and
            environmental sustainability. Key themes include net-zero strategies, energy storage solutions,
            green hydrogen technologies, smart grids, climate change mitigation, and sustainable materials.
            The event features keynote addresses by leading experts, technical sessions, poster presentations,
            and interactive workshops.
          </p>
        </div>
      </div>

      {/* Remaining Text Content Below */}
      <div
        className="px-4 md:px-8 lg:px-16 pb-16 bg-white"
        data-aos="fade-up" // 
      >
        <p className="text-gray-700 mb-4 text-justify leading-relaxed">
          The conference brings together researchers, industry experts, and policymakers to address
          critical challenges in energy efficiency, renewable energy systems, carbon neutrality, and
          environmental sustainability. Key themes include net-zero strategies, energy storage solutions,
          green hydrogen technologies, smart grids, climate change mitigation, and sustainable materials.
          The event features keynote addresses by leading experts, technical sessions, poster presentations,
          and interactive workshops.
        </p>
        <p className="text-gray-700 text-justify leading-relaxed">
          AGNI-S aims to inspire collaboration and innovation, emphasizing actionable solutions for global
          energy and environmental challenges. With a strong focus on green technologies and sustainability,
          AGNI-S represents a vital step toward achieving long-term environmental goals and fostering a
          resilient, low-carbon future.
        </p>
      </div>

      <div className="mx-auto w-11/12 md:w-5/6 lg:w-4/5">
        <h1 className="text-center text-3xl font-bold mb-4 text-gray-800 ">AGNIS THEME</h1>
        <div className="w-20 h-1 bg-green-500 mb-6 mx-auto" />
        <section className="relative px-4 py-16 md:px-8 lg:px-10 bg-white shadow-2xl shadow-green-200 rounded-xl border border-green-500 min-h-screen">
          {/* Sub-Themes Heading with Rounded Styling */}
          <div className="relative flex justify-center mb-12">
            <h2 className="relative z-10 px-8 py-3 text-3xl font-bold text-green-700 bg-white rounded-full border border-green-300">
              Sub-Themes
            </h2>

            {/* Vertical Line (full height, starting from the top of the section) */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-green-500 z-0 h-full rounded-sm" />
          </div>

          {/* Timeline Items */}
          <div className="relative z-10">
            <div className="flex flex-col gap-5">
              {subThemes.map((theme, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center md:items-start gap-3 md:gap-8`}
                  data-aos="fade-up"
                  style={{ marginBottom: index === subThemes.length - 1 ? 0 : '12px' }} // Remove margin for the last item
                >
                  <div className="w-full md:w-1/2 px-4 md:px-8">
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="text-green-600" />
                        <p className="text-gray-800 text-lg font-medium">{theme}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="w-full"
        data-aos="zoom-in-up">
        <img
          src="date.png"
          alt="IMportant date"
          className="rounded-xl mt-8 mb-0 shadow-lg w-full object-contain"
        />
      </div>

      <div
        className="flex flex-col lg:flex-row items-start gap-8 px-4 md:px-8 lg:px-12 py-12 bg-white"
        data-aos="fade-up">
          {/* news */}
          <div className="w-full lg:w-1/2"
           data-aos="zoom-in-up">
              <Notice />
          </div>

          {/* timer */}
          <div className="min-h-screen lg:w-1/2 mt-0 lg:mt-0 bg-white flex items-top justify-center"
          data-aos="zoom-in-up">
            <CountdownTimer />
          </div>
      </div>
    </div>
  );
};

export default Home;