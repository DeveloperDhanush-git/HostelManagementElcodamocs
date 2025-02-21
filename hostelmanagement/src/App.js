import React from "react";
import Navbar from "./dynamiccomponent/NavBar";
import HostelList from "./dynamiccomponent/HostelList";

const App = () => {
  return (
    <div className="bg-white-100 min-h-screen" style={{ fontFamily: 'Montserrat' }}>
      <Navbar />
      <HostelList />
    </div>
  );
};

export default App;
