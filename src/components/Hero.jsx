import React from "react";
import NavBar from "../components/NavBar";
import heroImage from "../assets/Hero.jpg";
import Card from "./Card";


export default function Hero() {
  return (
    <>
      <section className="relative w-full h-[400px]">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />

        {/* Navbar  */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-[98%] max-w-6xl">
          <NavBar />
        </div>
      </section>

      {/* Card Section */}
      <section className="-mt-24 bg-white rounded-t-2xl px-6 py-12 relative z-10">
      <div className="flex flex-wrap justify-center gap-6">
        <Card
          title="TRAINEE NETWORK ENGINEERS"
          description="We are hiring new training network engineers for slt-mobitel. Only an associate degree, a bachelor’s degree in computer science, information technology, computer engineering, or a related field (undergraduates – 3rd year, 4th year), and fresh graduates are preferred."
          points={[
            "No job experiences are needed.",
            "Networking knowledge.",
            "Operating systems knowledge.",
            "Network devices and security knowledge.",
            "Networking device configuration knowledge.",
          ]}
         
        />
        

        <Card
          title="ACCOUNTANT – FINANCIAL ACCOUNTING"
          description="Sri lanka telecom is in search of high caliber, result-oriented and qualified individuals capable of playing a key role in the finance team."
          points={[
            "Associate membership of icasl/cima/acca.",
            "Preference will be given to candidates who are prize winners.",
            "Be a resilient leader with excellent interpersonal and communication skills.",
          ]}
        />

        <Card
          title="ENGINEERS"
          description="As an engineer of the pioneering ict solutions provider, you will be a distinguished member of our team responsible for planning, designing, building, and maintaining state-of-the-art ict infrastructure."
          points={[
            "Bsc engineering or technology degree recognized by UGC.",
            "Associate member of the institute of engineers, Sri lanka.",
            
          ]}
        />

        <Card
          title="TECHNICIANS"
          description="Technicians install, maintain, and repair electronic communications equipment in telecommunication networks and internet systems."
          points={[
            "6 o/l passes including sinhala/tamil, english, and mathematics.",
            "NVQlevel 4 certificate in telecom/electrical/electronic/ict or similar fields.",
          ]}
        />
      </div>
    </section>
    </>
  );
}
