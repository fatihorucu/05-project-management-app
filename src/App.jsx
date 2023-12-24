import CreateProject from "./Components/CreateProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import Sidebar from "./Components/Sidebar";
import Project from "./Components/Project";

function App() {
  return (
    <>
      <div className="mx-auto flex h-lvh pt-10">
        <Sidebar />
        <Project />
      </div>
    </>
  );
}

export default App;
