import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkExperience from "@/components/WorkExperience";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <Navbar />
      <WorkExperience />
      <Footer />
    </div>
  );
}
