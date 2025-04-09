import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoGallery from "@/components/PhotoGallery";
import TechnicalSkills from "@/components/TechnicalSkills";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <Navbar />
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-4">
          I'm Kate, a frontend-focused full stack developer who loves crafting clean, modern, and intuitive UIs.
          I’m currently in Vanguard's Technology Leadership Program and hold the AWS Cloud Practitioner certification.
        </p>
        <p className="text-lg mb-4">
          Outside of coding, I enjoy fitness, traveling, art, and exploring trendy coffee shops and bakeries.
        </p>
        <p className="text-lg">
          This site is my corner of the internet — welcome!
        </p>
      </section>
      <TechnicalSkills />
      <PhotoGallery />
      <Footer />
    </div>
  );
}
