"use client";

import React from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import ProductCard from "@/components/book-card"; // you can rename this later to ProductCard

// Replace with your actual product images
const PRODUCTS = [
  {
    img: `/image/books/progrillMain.png`,
    category: "Dishwashing",
    title: "Dish Wash",
    desc: "Heavy-duty grill and oven cleaner that cuts through tough grease effortlessly, Gentle on hands, tough on grease. Sparkling clean dishes with fresh fragrance.",
    price: "$29",
    offPrice: "$24",
  },
  {
    img: `/image/books/ChatGPT Image Sep 1, 2025, 08_42_26 PM.png`,
    category: "Hand Hygiene",
    title: "Hand Wash",
    desc: "Germ-free protection with moisturizing formula. Clean, fresh, and safe hands.",
    price: "$19",
    offPrice: "$15",
  },
  {
    img: `/image/books/turbexlMain.png`,
    category: "Laundry Care",
    title: "TurbexL",
    desc: "Advanced liquid detergent designed for washing machines. Tough on stains, gentle on fabrics, leaving clothes fresh and bright.",
    price: "$99",
    offPrice: "$79",
  },
];

const PRODUCT_TABS = ["All Products"];

export function ProductShowcase() {
  const [activeTab, setActiveTab] = React.useState("All Products");

  return (
    <section className="px-6 pt-20 pb-16 bg-gradient-to-r from-yellow-100 via-white to-green-100 px-3 sm:px-6">
      <div className="container mx-auto mb-16 text-center">
        <Typography
          as="p"
          color="blue-gray"
          className="mb-3 font-bold uppercase tracking-wide text-green-700"
        >
          Save up to 20%
        </Typography>
        <Typography as="h1" color="blue-gray" className="mb-2 font-extrabold">
          Our Best-Selling Products
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-600 lg:w-8/12"
        >
          From household essentials to industrial solutions, our products are
          crafted to keep your home and workplace clean, safe, and fresh.
        </Typography>

        {/* Tabs */}
        <div className="mt-12 flex items-center justify-center">
          <Tabs value={activeTab} className="w-full lg:w-6/12">
            <TabsHeader
              className="h-12 bg-transparent"
              indicatorProps={{
                className: "!bg-green-600 rounded-lg",
              }}
            >
              {PRODUCT_TABS.map((tab) => (
                <Tab
                  key={tab}
                  value={tab}
                  className={`!font-medium capitalize transition-all duration-300
                    ${activeTab === tab ? "text-white" : "text-gray-700"}
                  `}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((props, key) => (
          <ProductCard key={key} {...props} />
        ))}
      </div>

      {/* Show More */}
      <div className="grid place-items-center">
        <Button className="mt-20 px-8 py-3 rounded-xl shadow-md border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition">
          Show more
        </Button>
      </div>
    </section>
  );
}

export default ProductShowcase;
