import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-100 to-blue-300 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white px-6"
    >
      {/* Profile Image */}
      <div className="w-36 h-36 relative rounded-full overflow-hidden shadow-lg mb-6">
        <Image src="/Kathryn Chadwick Profile.png" alt="Kate Chadwick" fill className="object-cover" />
      </div>

      {/* Logo & Name */}
      <div className="flex items-center space-x-3">
        <span className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">KC</span>
        <h1 className="text-5xl font-bold">Kate Chadwick</h1>
      </div>

      {/* Tagline */}
      <h2 className="text-2xl mt-4 font-light">Engineering Scalable, Intuitive, and Accessible Web Experiences</h2>

      {/* Short Bio */}
      <p className="mt-6 text-lg max-w-2xl">
        Software Engineer specializing in frontend and full-stack development. Passionate about UX/UI design, scalable architectures, 
        and building impactful digital solutions. Experienced in React, TypeScript, AWS, and modern web technologies.
      </p>

      {/* Credential Badges */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <div className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-1 rounded-full shadow">
          🎓 OMSCS Admit – Georgia Tech <span className="ml-1 text-xs font-normal">(ML & Interactive Intelligence)</span>
        </div>
        <a href="https://www.credly.com/badges/9d85fadb-b928-463f-a4a3-190b4b015964/public_url" target="_blank" rel="noopener noreferrer" className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full shadow hover:underline">
          ☁️ AWS Cloud Practitioner Certified
        </a>
      </div>

      {/* CTA Buttons */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <a href="/Kathryn Chadwick Resume.docx.pdf" target="_blank" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">View Resume</a>
        <a href="https://github.com/kathrynec02" target="_blank" className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition">GitHub</a>
        <a href="https://www.linkedin.com/in/kathrynec/" target="_blank" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">LinkedIn</a>
      </div>
    </motion.section>
  );
}
