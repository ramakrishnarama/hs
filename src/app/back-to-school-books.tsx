"use client";

import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import {
  SparklesIcon,
  FireIcon,
  BanknotesIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const FEATURES = [
  {
    icon: AcademicCapIcon,
    title: "Eco-Friendly",
    desc: "Formulated with safe ingredients that care for your family and the planet.",
  },
  {
    icon: SparklesIcon,
    title: "Refreshing Fragrance",
    desc: "Keeps your clothes, utensils, and hands fresh and pleasant after every wash.",
  },
  {
    icon: FireIcon,
    title: "Powerful Cleaning",
    desc: "Tough on grease, stains, and dirt while being gentle on skin and fabrics.",
  },
  {
    icon: BanknotesIcon,
    title: "Affordable",
    desc: "High performance at a pocket-friendly price — more value in every wash.",
  },
];

export function TopBookCategories() {
  return (
    <section className="relative z-0 px-3 sm:px-6 pb-20 pt-20 lg:pt-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-white to-green-100"></div>

      <div className="container mx-auto relative z-10">
        <div className="mb-20 grid place-items-center text-center">
          <Typography
            variant="h2"
            className="my-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-700"
          >
            Trusted Cleaning Solutions
          </Typography>

          <Typography
            variant="lead"
            className="!text-gray-600 lg:w-8/12 text-base sm:text-lg mt-4"
          >
            From dishwashing to laundry care and personal hygiene, our products are
            designed to deliver fast, effective, and reliable cleaning every time.
            Combining powerful stain-fighting technology with safe, eco-friendly
            ingredients, we make daily cleaning simpler, fresher, and healthier.
          </Typography>

          <div className="mt-6 space-y-2 text-gray-800 text-sm sm:text-base">
            <p>✅ Safe for families, tough on dirt and stains</p>
            <p>✅ Fresh fragrances that last long</p>
            <p>✅ Reliable cleaning across kitchen, laundry, and hygiene</p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, desc }, idx) => (
            <Card
              key={idx}
              shadow={true}
              className="p-6 border border-gray-200 hover:shadow-xl transition-all bg-white rounded-2xl"
            >
              <CardBody className="text-center flex flex-col items-center">
                <Icon className="h-10 w-10 text-green-600 mb-4" />
                <Typography
                  variant="h5"
                  className="mb-2 font-bold text-gray-800"
                >
                  {title}
                </Typography>
                <Typography className="text-gray-600 text-sm">{desc}</Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopBookCategories;
