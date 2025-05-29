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
          
        
           <div className="max-w-6xl mx-auto">
             <VacanciesNavBar/>
           </div>
           <div className="p-10">
      <div className="bg-white bg-opacity-80 rounded-3xl shadow-lg px-6 py-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Applied Job Status:</h2>
        <div className="overflow-hidden rounded-2xl">
          <table className="w-full text-left text-sm text-gray-900 border-collapse">
            <thead className="bg-blue-900 text-white text-base">
              <tr>
                <th className="px-6 py-3">Job Field</th>
                <th className="px-6 py-3">Job Position</th>
                <th className="px-6 py-3">Recommendation</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white text-base">
              <tr className="border-t border-gray-200">
                <td className="px-6 py-4">Software</td>
                <td className="px-6 py-4">QA Trainee</td>
                <td className="px-6 py-4">Approved yesterday</td>
                <td className="px-6 py-4">Approved</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
           
           </div>
          
           </section>
       </>
       
    )
}