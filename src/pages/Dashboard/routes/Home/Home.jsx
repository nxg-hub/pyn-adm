import React from "react";
import SearchBar from "../../../../Buttons/Search"; // Correct import path
import { RxChevronRight } from "react-icons/rx";
import Modals from "../../../../modal/Sucess"; // Import Modals component

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      
      {/* Breadcrumbs */}
      <div style={{ display: "inline-flex", gap: "0.5rem", alignItems: "center" }}>
        <span>Home</span>
        <RxChevronRight style={{ verticalAlign: "middle" }} />
        <span>About</span>
        <RxChevronRight />
        <span>user</span>
        <RxChevronRight />
        <span>cart</span>
      </div>

      {/* Search Bar */}
      <SearchBar placeholder="Search here..." />

      {/* About Section */}
      <About />

      {/* Modals Section */}
      <Modals /> {/* Render the Modals component here */}
    </div>
  );
};

export default Home;
