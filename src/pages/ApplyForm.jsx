import VacanciesNavBar from "../components/VacanciesNavBar"
export default function ApplyForm(){
     return(
        <>
       <VacanciesNavBar/>
        <div className="bg-white rounded-2xl p-8 shadow-md max-w-2xl mx-auto mt-10">
  <span className="text-xl font-bold mb-6">Job Title: <span className="font-medium">Web Development Trainee</span></span>
  <form>
    {[
      ['Name with Initials', 'text'],
      ['Full Name', 'text'],
      ['Gender', 'select'],
      ['Date of Birth', 'date'],
      ['Email', 'email'],
      ['Contact Number', 'text'],
      ['Field', 'select']
    ].map(([label, type], idx) => (
      <div className="flex items-center mb-4" key={idx}>
        <label className="w-48">{label} :</label>
        {type === 'select' ? (
          <select className="border rounded-md px-4 py-2 w-full">
            <option>Select...</option>
          </select>
        ) : (
          <input type={type} className="border rounded-md px-4 py-2 w-full" />
        )}
      </div>
    ))}

    {/* CV Upload */}
    <div className="mb-6">
      <label className="block mb-2 font-medium">Upload your CV here</label>
      <div className="border-dashed border-2 border-gray-300 rounded-md p-6 text-center">
        <p className="mb-2">Drag & Drop files here</p>
        <span className="text-sm text-gray-500">or</span>
        <div className="mt-2">
          <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded hover:bg-blue-50">
            Browse Files
          </button>
        </div>
      </div>
    </div>

    <div className="text-center">
      <button className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-900">
        Submit
      </button>
    </div>
  </form>
</div>

        </>
     )
}