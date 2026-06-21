import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkExperience from "@/components/WorkExperience";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main className="pt-24">
        <WorkExperience />
      </main>
      <Footer />
    </div>
  );
}
