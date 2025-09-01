"use client";

import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS: string[] = []; // currently empty
// You can add: ["About Us", "Products", "Distributors", "Blog", "Contact"]
const SUB_LINKS: string[] = [];
// "Privacy Policy", "Terms & Conditions", "Support"
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative mt-10 px-8 pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-white to-green-100 -z-10"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-wrap items-start justify-center gap-12 md:justify-between">
          {/* Logo + Contact */}
          <div className="text-center md:text-left max-w-sm">
            <Typography
              as="a"
              href="/"
              variant="h4"
              className="mb-4 font-extrabold text-green-700"
            >
              HaasBharg
            </Typography>

            <Typography className="mb-2 text-sm text-gray-600">
              Have questions or need support?  
              Reach out to us anytime via email:
            </Typography>
            <Typography className="text-sm text-gray-700">
              📧{" "}
              <a
                href="mailto:shashikumar@haasbharg.com"
                className="text-green-700 font-medium hover:underline"
              >
                shashikumar@haasbharg.com
              </a>
            </Typography>

            {LINKS.length > 0 && (
              <ul className="mt-4 flex flex-wrap items-center justify-center md:justify-start">
                {LINKS.map((link, idx) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      className={`py-1 font-medium !text-gray-700 hover:!text-green-700 transition-colors ${
                        idx === 0 ? "pr-3" : "px-3"
                      }`}
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Newsletter */}
          <div className="w-full sm:w-[24rem] sm:min-w-[24rem]">
            <Typography
              variant="h6"
              className="mb-3 font-semibold text-green-700"
            >
              Join Our Newsletter
            </Typography>
            <Typography className="mb-4 text-sm text-gray-600">
              Get the latest updates on new cleaning products, offers, and tips
              for a fresher home.
            </Typography>
            <div className="flex flex-col gap-3 sm:flex-row">
              {/* @ts-ignore */}
              <Input
                color="green"
                label="Enter your email"
                className="bg-white rounded-lg"
              />
              <Button className="flex-shrink-0 bg-green-600 hover:bg-green-700 rounded-lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-green-200 py-6 md:justify-between">
          <Typography className="text-center font-normal text-gray-700">
            &copy; {CURRENT_YEAR} HaasBharg. All rights reserved.
          </Typography>

          <ul className="flex items-center">
            {SUB_LINKS.map((link, idx) => (
              <li key={link}>
                <Typography
                  as="a"
                  href="#"
                  className={`py-1 font-normal text-gray-700 hover:text-green-700 transition-colors ${
                    idx === SUB_LINKS.length - 1 ? "pl-2" : "px-2"
                  }`}
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
