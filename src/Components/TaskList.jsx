function TaskList({ tasks, onDelete }) {
  return (
    <ol className="px-4 py-8 bg-stone-100 rounded-md flex flex-col gap-4">
      {tasks.map((task, taskIndex) => {
        return (
          <li key={taskIndex} className="flex justify-between">
            {taskIndex + 1 + ". " + task}
            <button
              onClick={() => onDelete(taskIndex)}
              className="hover:text-red-500"
            >
              Clear
            </button>
          </li>
        );
      })}
    </ol>
  );
}

export default TaskList;
