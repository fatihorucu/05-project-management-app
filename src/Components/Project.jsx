function Project() {
  return (
    <div className="w-3/4">
      <div className="container mx-auto flex flex-col gap-4 w-4/5 mt-16">
        <div className="flex flex-col text-lg">
          <div className="flex justify-between">
            <h1 className="text-4xl text-slate-800">Heading</h1>
            <button className="hover:text-stone-600">Delete</button>
          </div>
          <p className=" text-stone-500">Date</p>
          <p className="pt-5 text-stone-800">Description</p>
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl text-stone-700">Tasks</h1>
          <div className="flex gap-2">
            <input
              type="text"
              name="addTask"
              className="bg-stone-200 rounded-md min-w-28 w-56 min-h-8"
            />
            <button className="text-md hover:text-stone-600 text-stone-800">
              Add Task
            </button>
          </div>
          <ol className="px-4 py-8 bg-stone-100 rounded-md flex flex-col gap-4">
            <li className="flex justify-between">
              Practice,Practice,Practice{" "}
              <button className="hover:text-red-500">Clear</button>
            </li>
            <li className="flex justify-between">
              Practice,Practice,Practice{" "}
              <button className="hover:text-red-500">Clear</button>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Project;
