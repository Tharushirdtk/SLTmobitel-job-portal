import VacanciesNavBar from "../components/VacanciesNavBar";
import heroImage from "../assets/VHero.jpg";


export default function AppliedJobStatus(){

    return(
       <>
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
             <VacanciesNavBar/>
           </div>
           
           </div>
          
           </section>
       </>
       
    )
}