import { forwardRef, useState, useRef } from "react";

const Sidebar = forwardRef(function Sidebar(
  { onAddClick, projects, onSelect, currentIndex },
  ref
) {
  return (
    <div className="bg-black w-1/4 rounded-tr-md  flex flex-col pt-20 gap-6 pl-6 ">
      <h1 className="text-xl text-stone-300">YOUR PROJECTS</h1>
      <button
        onClick={onAddClick}
        className="text-[#9f9c97] max-w-32 min-h-10 border-none bg-[#3A3530] rounded-md hover:text-[#a0907b]"
      >
        + Add Project
      </button>
      <ol className=" mt-4">
        {projects.map((project, projectIndex) => {
          let listStyle = "w-4/5 text-lg ";
          if (project.projectIndex === currentIndex) {
            listStyle += "bg-[rgb(30,25,23)] text-[#DDDAD9]";
          } else {
            listStyle += "text-[#7E7D7B]";
          }

          return (
            <li className={listStyle} key={projectIndex}>
              <button
                onClick={() =>
                  onSelect(
                    project.projectIndex === currentIndex
                      ? null
                      : project.projectIndex
                  )
                }
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
});

export default Sidebar;
