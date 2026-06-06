import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import { CursorGlow, Particles, Noise, ScanLine } from "./components/Background";
import {
  About,
  Skills,
  Projects,
  Education,
  CredentialsAndActivities,
  Contact,
  Footer,
} from "./components/Sections";

export default function App() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      {/* Background layers */}
      <CursorGlow />
      <Noise />
      <Particles />
      <ScanLine />

      {/* UI */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects onOpenModal={setActiveModal} />
      <Education />
      <CredentialsAndActivities />
      <Contact />
      <Footer />

      {/* Project detail modal */}
      {activeModal && (
        <Modal project={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}
