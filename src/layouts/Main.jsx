// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";

// assets
import wave from "../assets/wave.svg";

// components
import Nav from "../components/Nav";
import Footer from "../components/Footer";

//  helper functions
import { fetchData, migrateData } from "../helpers";

// loader
export function mainLoader() {
  migrateData(); // Run migration check
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
      <Footer />
    </div>
  );
};
export default Main;
