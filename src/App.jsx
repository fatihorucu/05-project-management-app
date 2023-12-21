import NoProjectSelected from "./Components/NoProjectSelected";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <div className=" mx-auto flex rounded h-lvh pt-10">
        <Sidebar />
        <NoProjectSelected />
      </div>
    </>
  );
}

export default App;
