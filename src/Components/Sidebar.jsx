export default function Sidebar() {
  return (
    <div className="bg-black w-1/4 rounded-tr-md  flex flex-col pt-20 gap-6 pl-6 ">
      <h1 className="text-xl text-stone-300">YOUR PROJECTS</h1>
      <button className="text-[#9f9c97] max-w-32 min-h-10 border-none bg-[#3A3530] rounded-md hover:text-[#a0907b]">
        + Add Project
      </button>
      <ol className="text-white mt-4">
        <li className="w-4/5 active:bg-[#1E1917] active:text-[#DDDAD9] text-[#7E7D7B]">
          Porject Titles
        </li>
      </ol>
    </div>
  );
}
