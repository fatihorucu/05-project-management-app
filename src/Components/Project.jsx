import { useState, useRef } from "react";
import TaskList from "./TaskList";

function Project({ currentIndex, projectList }) {
  const [tasks, setTask] = useState([]);
  const task = useRef();
  const clearButton = useRef();

  const selectedProject = projectList[currentIndex];

  const formattedDate = new Date(selectedProject.dueDate).toLocaleDateString(
    "tr-TR",
    { day: "numeric", month: "short", year: "numeric" }
  );

  function handleSave() {
    setTask((prevValue) => {
      return [...prevValue, task.current.value];
    });
  }

  function handleDelete(i) {
    setTask((prevValue) => {
      return prevValue.filter((element, index) => index !== i);
    });
  }
  return (
    <div className="w-3/4">
      <div className="container mx-auto flex flex-col gap-4 w-4/5 mt-16">
        <div className="flex flex-col text-lg">
          <div className="flex justify-between">
            <h1 className="text-4xl text-slate-800">{selectedProject.title}</h1>
            <button className="hover:text-stone-600">Delete</button>
          </div>
          <p className=" text-stone-500">{formattedDate}</p>
          <p className="pt-5 text-stone-800 whitespace-pre-wrap">
            {selectedProject.description}
          </p>
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl text-stone-700">Tasks</h1>
          <div className="flex gap-2">
            <input
              type="text"
              name="addTask"
              className="bg-stone-200 rounded-md min-w-28 w-56 min-h-8"
              ref={task}
            />
            <button
              onClick={handleSave}
              className="text-md hover:text-stone-600 text-stone-800"
            >
              Add Task
            </button>
          </div>
          <TaskList tasks={tasks} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default Project;
