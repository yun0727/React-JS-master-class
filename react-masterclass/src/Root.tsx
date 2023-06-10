import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
  return (
    <div>
      <Header />
      <Outlet context={{darkmode: true}}/>
    </div>
  );
}

export default Root;
