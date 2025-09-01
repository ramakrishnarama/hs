"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import FeatureCard from "@/components/feature-card";
import {
  TruckIcon,
  BanknotesIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/solid";

const FEATURES = [
  {
    icon: BanknotesIcon,
    title: "We Support All Detergents",
    description:
      "From hand wash to dish wash and fabric care, our solutions cover all your cleaning needs with quality and care.",
  },
  {
    icon: LifebuoyIcon,
    title: "Support 24/7",
    description:
      "Our customer care team is available around the clock to assist with orders, product guidance, and support.",
  },
  {
    icon: TruckIcon,
    title: "Easy Shopping, Quick Delivery",
    description:
      "Order your cleaning essentials online with ease and enjoy fast, reliable doorstep delivery.",
  },
];

export function GetYourBookFromUs() {
  return (
    <section className="relative px-6 sm:px-10 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-white to-green-100 -z-10"></div>

      <div className="container mx-auto mb-16 text-center relative z-10">
        <Typography
          variant="h2"
          className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-700"
        >
          Get Your Clean From Us!
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-600 lg:w-6/12 text-base sm:text-lg"
        >
          Discover trusted cleaning solutions designed to make your everyday
          life simpler, fresher, and healthier.
        </Typography>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {FEATURES.map(({ icon, title, description }) => (
          <FeatureCard
            key={title}
            icon={icon}
            title={title}
            className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all"
          >
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default GetYourBookFromUs;
