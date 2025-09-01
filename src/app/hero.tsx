"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Hero() {
  return (
    <header className="mt-4 sm:mt-8 bg-gradient-to-r from-yellow-100 via-white to-green-100 px-3 sm:px-6">
      <div className="container mx-auto grid h-full min-h-[70vh] w-full grid-cols-1 lg:grid-cols-10 place-items-center gap-y-8">
        
        {/* Left Section - 70% */}
        <div className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start px-2 sm:px-4">
          <Typography
            variant="h1"
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold !leading-snug text-green-700"
          >
            Clean. Fresh. Safe.
          </Typography>
          <Typography
            variant="h1"
            className="mt-2 text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold !leading-snug text-blue-900 max-w-xl"
          >
            Haasbharg Handwash & Dishwash
          </Typography>
          <Typography
            variant="lead"
            className="mb-6 mt-3 text-sm sm:text-base md:text-lg font-normal !text-gray-700 px-1 sm:px-0 md:pr-10 lg:pr-16 xl:pr-24"
          >
            Protect your family with{" "}
            <span className="text-yellow-600 font-semibold">germ-free handwash</span> and{" "}
            <span className="text-green-700 font-semibold">powerful dishwash</span>.  
            Fresh fragrance, gentle on skin, tough on grease.
          </Typography>
          <Button
            size="lg"
            color="blue"
            className="bg-yellow-500 text-blue-900 font-bold shadow-lg hover:scale-105 transition-transform"
          >
            Explore Products
          </Button>
        </div>

        {/* Right Section - 30% */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="order-1 lg:order-2 lg:col-span-3 w-full flex justify-center"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="w-[70%] sm:w-[60%] md:w-[70%] lg:w-[90%]"
          >
            <SwiperSlide className="flex justify-center">
              <Image
                width={380}
                height={380}
                src="/image/product/progrillgreen-removebg-preview (1).png"
                className="rounded-xl w-full h-[500px] object-contain shadow-lg bg-white p-4"
                alt="Handwash Gel"
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center">
              <Image
                width={380}
                height={380}
                src="/image/product/Untitled design.png"
                className="rounded-xl w-full h-[500px] object-contain shadow-lg bg-white p-4"
                alt="Dishwash Gel"
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center">
              <Image
                width={380}
                height={380}
                src="/image/product/WhatsApp_Image_2025-08-18_at_12.55.03-removebg-preview (1).png"
                className="rounded-xl w-full h-[500px] object-contain shadow-lg bg-white p-4"
                alt="Haasbharg Product 1"
              />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center">
              <Image
                width={380}
                height={380}
                src="/image/product/WhatsApp_Image_2025-08-18_at_12.55.03-removebg-preview (1).png"
                className="rounded-xl w-full h-[500px] object-contain shadow-lg bg-white p-4"
                alt="Haasbharg Product 2"
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </header>
  );
}

export default Hero;


// "use client";

// import Image from "next/image";
// import { Button, Typography } from "@material-tailwind/react";
// import { motion } from "framer-motion";

// function Hero() {
//   return (
//     <header className="mt-4 sm:mt-8 bg-gradient-to-r from-yellow-100 via-white to-green-100 px-3 sm:px-6">
//       <div className="container mx-auto grid h-full min-h-[70vh] w-full grid-cols-1 lg:grid-cols-10 place-items-center gap-y-8">
        
//         {/* Left Section */}
//         <div className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start px-2 sm:px-4">
//           <Typography
//             variant="h1"
//             className="text-2xl sm:text-3xl md:text-5xl font-extrabold !leading-snug text-green-700"
//           >
//             Clean. Fresh. Safe.
//           </Typography>
//           <Typography
//             variant="h1"
//             className="mt-2 text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold !leading-snug text-blue-900 max-w-xl"
//           >
//             Haasbharg Handwash & Dishwash
//           </Typography>
//           <Typography
//             variant="lead"
//             className="mb-6 mt-3 text-sm sm:text-base md:text-lg font-normal !text-gray-700 px-1 sm:px-0 md:pr-10 lg:pr-16 xl:pr-24"
//           >
//             Protect your family with{" "}
//             <span className="text-yellow-600 font-semibold">germ-free handwash</span> and{" "}
//             <span className="text-green-700 font-semibold">powerful dishwash</span>.  
//             Fresh fragrance, gentle on skin, tough on grease.
//           </Typography>
//           <Button
//             size="lg"
//             color="blue"
//             className="bg-yellow-500 text-blue-900 font-bold shadow-lg hover:scale-105 transition-transform"
//           >
//             Explore Products
//           </Button>
//         </div>

//         {/* Right Section - Two Rows, not strict columns */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="order-1 lg:order-2 lg:col-span-3 w-full flex flex-wrap justify-center"
//         >
//           {/* Row 1 */}
//           <div className="flex gap-8">
//             <Image
//               src="/image/product/progrillgreen-removebg-preview (1).png"
//               alt="Handwash Gel"
//               width={180}
//               height={180}
//               className="rounded-xl object-contain shadow-lg bg-white p-3"
//             />
//             <Image
//               src="/image/product/Untitled design.png"
//               alt="Dishwash Gel"
//               width={180}
//               height={180}
//               className="rounded-xl object-contain shadow-lg bg-white p-3 mt-6"
//             />
//           </div>

//           {/* Row 2 */}
//           <div className="flex gap-4 mt-6 ml-8">
//             <Image
//               src="/image/product/WhatsApp_Image_2025-08-18_at_12.55.03-removebg-preview (1).png"
//               alt="Haasbharg Product 1"
//               width={180}
//               height={180}
//               className="rounded-xl object-contain shadow-lg bg-white p-3"
//             />
//             <Image
//               src="/image/product/WhatsApp_Image_2025-08-25_at_23.38.17-removebg-preview.png"
//               alt="Haasbharg Product 2"
//               width={180}
//               height={180}
//               className="rounded-xl object-contain shadow-lg bg-white p-3 mt-4"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </header>
//   );
// }

// export default Hero;


// "use client";

// import Image from "next/image";
// import { Button, Typography } from "@material-tailwind/react";
// import { motion } from "framer-motion";

// function Hero() {
//   return (
//     <header className="mt-4 sm:mt-8 bg-gradient-to-r from-yellow-100 via-white to-green-100 px-3 sm:px-6">
//       <div className="container mx-auto grid h-full min-h-[70vh] w-full grid-cols-1 lg:grid-cols-10 place-items-center gap-y-8">
        
//         {/* Left Section */}
//         <div className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start px-2 sm:px-4">
//           <Typography
//             variant="h1"
//             className="text-2xl sm:text-3xl md:text-5xl font-extrabold !leading-snug text-green-700"
//           >
//             Clean. Fresh. Safe.
//           </Typography>
//           <Typography
//             variant="h1"
//             className="mt-2 text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold !leading-snug text-blue-900 max-w-xl"
//           >
//             Haasbharg Handwash & Dishwash
//           </Typography>
//           <Typography
//             variant="lead"
//             className="mb-6 mt-3 text-sm sm:text-base md:text-lg font-normal !text-gray-700 px-1 sm:px-0 md:pr-10 lg:pr-16 xl:pr-24"
//           >
//             Protect your family with{" "}
//             <span className="text-yellow-600 font-semibold">germ-free handwash</span> and{" "}
//             <span className="text-green-700 font-semibold">powerful dishwash</span>.  
//             Fresh fragrance, gentle on skin, tough on grease.
//           </Typography>
//           <Button
//             size="lg"
//             color="blue"
//             className="bg-yellow-500 text-blue-900 font-bold shadow-lg hover:scale-105 transition-transform"
//           >
//             Explore Products
//           </Button>
//         </div>

//         {/* Right Section - Single Image (collage) */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="order-1 lg:order-2 lg:col-span-3 w-full flex justify-center"
//         >
//           <Image
//             src="/image/product/collage-removebg-preview.png"
//             alt="Haasbharg Products Collage"
//             width={400}
//             height={400}
//             className="rounded-xl object-contain shadow-lg bg-white p-4"
//           />
//         </motion.div>
//       </div>
//     </header>
//   );
// }

// export default Hero;
