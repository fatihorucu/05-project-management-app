import img from "../assets/no-projects.png";
export default function NoProjectSelected() {
  return (
    <div className="w-3/4 flex flex-col gap-8 items-center justify-center mb-32 text-md">
      <img src={img} alt="List icon" className="w-1/12 min-w-8"></img>
      <h1 className="text-[#3A3530] font-extrabold text-lg">
        No Project Selected
      </h1>
      <p>Select a project or get started with a new one</p>
      <button className="bg-stone-700 text-stone-300 min-h-10 max-w-44 p-2 rounded-md">
        Create new Project
      </button>
    </div>
  );
}
