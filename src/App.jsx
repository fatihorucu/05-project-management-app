import CreateProject from "./Components/CreateProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import Sidebar from "./Components/Sidebar";
import Project from "./Components/Project";
import { useState, useRef } from "react";

function App() {
  const [isAddButtonClicked, setIsAddButtonClicked] = useState(false);
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState();

  function handleSave(project) {
    setProjects((prevValue) => {
      return [
        ...prevValue,
        {
          title: project.title,
          description: project.description,
          dueDate: project.dueDate,
          projectIndex: project.projectIndex,
        },
      ];
    });
    setIsAddButtonClicked((prevValue) => !prevValue);
  }

  function handleAddClick() {
    setIsAddButtonClicked((prevValue) => (prevValue ? prevValue : !prevValue));
    setCurrentIndex();
  }

  function handleCancel() {
    setIsAddButtonClicked((prevValue) => !prevValue);
  }

  function handleSelect(selectedIndex) {
    setCurrentIndex(selectedIndex);
    setIsAddButtonClicked(false);
  }

  return (
    <>
      <div className="mx-auto flex h-lvh pt-10">
        <Sidebar
          onAddClick={handleAddClick}
          projects={projects}
          onSelect={handleSelect}
          currentIndex={currentIndex}
        />
        {isAddButtonClicked && currentIndex == null ? (
          <CreateProject onCancel={handleCancel} onSave={handleSave} />
        ) : undefined}
        {currentIndex != null ? (
          <Project currentIndex={currentIndex} projectList={projects} />
        ) : undefined}
        {!isAddButtonClicked && currentIndex == null ? (
          <NoProjectSelected onCreateProject={handleAddClick} />
        ) : undefined}
      </div>
    </>
  );
}

export default App;
