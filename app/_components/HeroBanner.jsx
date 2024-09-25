import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <section className="w-full h-[90vh] ">
      {/* herobanner image */}
      <div className="h-full">
        <Image
          src="/herobanner.png"
          alt="herobanner"
          fill
          className="w-full h-full -z-10"
        />
      </div>
      {/* overlay  */}
      <div className="absolute inset-0 bg-black/85 z-10 h-full" />
      {/* information */}
      <div className="absolute top-[50%] -translate-y-[50%] -translate-x-[50%] left-[50%]  h-fit z-30">
        <h1 className="text-white font-semibold text-2xl md:text-4xl lg:text-6xl">
          Find & Book <span className="text-blue-500">Appointment </span>with
          your Favourite <span className="text-blue-500">Doctors.</span>
        </h1>
        <p className="text-white font-medium my-2 text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
          voluptas quo totam natus perspiciatis sapiente nisi eveniet numquam
          facilis alias!.
        </p>
        <Button>Explore Now</Button>
      </div>
      {/* waves image */}
      <div className="absolute bottom-0 left-0 right-0 z-50">
        <div className="custom-shape-divider-bottom-1724320119">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
