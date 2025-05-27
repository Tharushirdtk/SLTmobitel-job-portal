import React from "react";
import NavBar from "../components/VacanciesNavBar";
import heroImage from "../assets/VHero.jpg";
import Card from "../components/Card"; 
import { Link } from "react-router-dom";

export default function Hero() {
  
  return (
    
<section className="relative w-full h-[700px]">
    <img
    src={heroImage}
    alt="Hero"
    className="w-full h-full object-cover"
    />

  <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

  <div className="absolute top-0 left-0 w-full h-full px-6 pt-8 z-10">
   
    {/* NavBar */}
    <div className="max-w-6xl mx-auto">
      <NavBar />
    </div>

    {/* Heading */}
    <div className="mt-3 max-w-6xl mx-auto">
      <h2 className="text-white text-3xl font-bold text-left drop-shadow-lg">
        Find Your Job that is prefer for you
      </h2>
    </div>

    <br></br>

    {/* Cards */}
    
          <div className="flex flex-wrap justify-center gap-6 rounded-3xl">
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
           {/* CTA Button */}
        <div className="text-center mt-6">
           <Link to="/appliedJobStatus" className="bg-blue-600 text-white py-2 px-6 rounded-full text-sm font-medium hover:bg-blue-700">
                         Check the Applied Job Status
                        </Link>
        </div>
  

</div></section>
    
 
)
}
