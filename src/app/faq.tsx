"use client";
import React from "react";
import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FAQS = [
  {
    title: "Are your cleaning products safe for daily use?",
    desc: "Yes! All our detergents, dishwashing liquids, and handwashes are made with safe, high-quality ingredients that are tough on dirt but gentle on your hands and fabrics.",
  },
  {
    title: "Do your products work on tough stains and grease?",
    desc: "Absolutely. Our advanced formulas are designed to remove tough grease, stains, and food residue quickly, even on kadai, grills, and oily surfaces.",
  },
  {
    title: "Are your products eco-friendly?",
    desc: "We are committed to sustainability. Many of our products are biodegradable, phosphate-free, and use safe ingredients that are gentle on the environment.",
  },
  {
    title: "Do you offer bulk purchase options?",
    desc: "Yes, we provide bulk purchase options for households, businesses, and distributors. Please contact our sales team for customized deals and pricing.",
  },
  {
    title: "Where can I buy your products?",
    desc: "Our products are available through authorized distributors, local retailers, and online platforms. You can also reach out to us directly for samples and orders.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="relative px-6 sm:px-10 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-white to-green-100 -z-10"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center">
          <Typography
            variant="h2"
            className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-700"
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-16 w-full max-w-2xl !text-gray-600 text-base sm:text-lg"
          >
            Everything you need to know about our detergents, dishwashing
            liquids, and hygiene products.
          </Typography>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto lg:max-w-screen-lg lg:px-20 space-y-4">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
              className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-md"
            >
              <AccordionHeader className="text-left text-green-700 font-semibold text-lg">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography className="font-normal text-gray-600 text-sm sm:text-base">
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
