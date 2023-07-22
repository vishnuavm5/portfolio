import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/portimage.png";

const Hero = () => {
  const text = "Developer";

  return (
    <div className="flex justify-center  min-h-screen" id="Hero">
      <section className="bg-black text-white py-12">
        <div className="container mx-auto flex flex-col  items-center space-y-10">
          <div className="mb-8 -mt-300px">
            <img
              src={profilePic}
              alt="Profile Image"
              className="rounded-full h-60 w-60 md:h-60 md:w-60 object-cover"
            />
          </div>
          <div className="text-center space-y-2 flex flex-col items-center space-y-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Vishnu</h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-xl md:text-2xl mb-4 font-bold"
            >
              <motion.span
                style={{ display: "inline-block", width: "1ch" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  style={{ display: "inline-block" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
            <p className="text-lg md:text-xl mx-16">
              "Passionate about technology and driven to craft innovative
              software solutions that empower users. Harnessing the power of
              code to transform ideas into reality."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
