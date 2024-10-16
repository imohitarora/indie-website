"use client";
import { colors } from "@/theme";
import { motion } from "framer-motion";

const OrbitingCircle = () => {
  return (
    <motion.div
      style={{
        position: "relative",
        width: 200,
        height: 200,
        borderRadius: "50%",
        border: "2px solid #333",
        top: 50,
        left: 50,
        boxSizing: "border-box",
      }}
      transition={{ loop: Infinity, ease: "linear" }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: "-5%",
          width: "55%",
          transformOrigin: "top right",
        }}
        initial={{
          rotate: 0,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{ loop: Infinity, duration: 3, ease: "linear" }}
      >
        <div className="h-5 w-5 bg-primary" />
      </motion.div>
    </motion.div>
  );
};

export function Header() {
  return (
    <section className="">
      <div className="relative flex items-center bg-gray-100 ">
        <div>
          <OrbitingCircle />
        </div>
        <div className="p-8 sm:px-16 lg:px-24 py-40 max-w-[800px]">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Indie Tech is the first automated consulting management system
            uniting consultants and clients
          </h2>
          <p className="mt-4 text-gray-600">
            This innovative platform will manage contract deliverables and
            supplier risk while consultants and clients connect towards the same
            goals.
          </p>
        </div>
      </div>
    </section>
  );
}
