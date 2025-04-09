import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid gap-10 md:grid-cols-2">
        {/* KatteLatte Studio */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-left"
        >
          <div className="mb-4">
            <Image
              src="/images/kattelattestudio.jpg"
              alt="KatteLatte Studio"
              width={600}
              height={300}
              className="rounded-md object-cover w-full"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">KatteLatte Studio</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            UX/UI design brand and digital storefront offering coffee-themed coloring books and digital content.
          </p>
          <a
            href="https://www.etsy.com/shop/KatteLatte?ref=seller-platform-mcnav"
            target="_blank"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Visit Etsy Store
          </a>
        </motion.div>

        {/* gritGorilla */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-left"
        >
          <div className="mb-4">
            <Image
              src="/images/gritGorilla.avif"
              alt="gritGorilla App"
              width={600}
              height={300}
              className="rounded-md object-cover w-full"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">gritGorilla</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            A strength-building & protein-tracking app inspired by WaterLlama. Currently in UX/UI prototyping phase under KatteLatteWatt.
          </p>
          <a
            href="https://github.com/kathrynec02/gritGorilla"
            target="_blank"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View GitHub
          </a>
        </motion.div>

        {/* wordl-triv */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-left"
        >
          <div className="mb-4">
            <Image
              src="/images/wordle.png"
              alt="wordl-triv Game"
              width={600}
              height={300}
              className="rounded-md object-cover w-full"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">wordl-triv</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Wordle clone with custom virtual/physical keyboard support, Redux state management, animations, and future trivia-based integration.
          </p>
          <a
            href="https://github.com/kathrynec02/wordl-triv"
            target="_blank"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View on GitHub
          </a>
        </motion.div>

        {/* HoosReview */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-left"
        >
          <div className="mb-4">
            <Image
              src="/images/hoosreview.jpg"
              alt="HoosReview Platform"
              width={600}
              height={300}
              className="rounded-md object-cover w-full"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">HoosReview</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            A platform for UVA students to review clubs and organizations. Built with HTML, CSS, Bootstrap, and PostgreSQL.
          </p>
          <a
            href="https://github.com/kathrynec02/uvaClubReview"
            target="_blank"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
