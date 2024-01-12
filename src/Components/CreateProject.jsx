import { useRef, useImperativeHandle, forwardRef, useState } from "react";

let projectIndex = -1;

export default function CreateProject({ onCancel, onSave }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const savedTitle = title.current.value;
    const savedDescription = description.current.value;
    const savedDueDate = dueDate.current.value;
    projectIndex += 1;

    onSave({
      title: savedTitle,
      description: savedDescription,
      dueDate: savedDueDate,
      projectIndex: projectIndex,
    });
  }
  return (
    <div className="w-3/4">
      <div className="container mx-auto w-4/5 flex flex-col gap-6 h-full mt-20">
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="hover:bg-neutral-200 rounded-md min-h-10 max-w-32 px-4"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-black text-stone-300 rounded-md min-h-10 max-w-32 px-6 hover:bg-neutral-800"
          >
            Save
          </button>
        </div>
        <div className="flex flex-col gap-3 uppercase">
          <div className="flex flex-col gap-1">
            <label htmlFor="title" className="text-[#46403a] font-bold">
              Title
            </label>
            <input
              name="title"
              type="text"
              className="text-stone-600 bg-stone-300 rounded-sm"
              ref={title}
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="description" className="text-[#46403a] font-bold">
              Description
            </label>
            <textarea
              name="description"
              className="text-stone-600 bg-stone-300 rounded-sm "
              ref={description}
            ></textarea>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="dueDate" className="text-[#46403a] font-bold">
              Due Date
            </label>
            <input
              type="date"
              rows="4"
              cols="50"
              className="text-stone-600 bg-stone-300 rounded-sm"
              ref={dueDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
