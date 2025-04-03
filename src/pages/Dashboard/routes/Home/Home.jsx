import React from "react";
import {RxChevronRight} from "react-icons/rx";
import SearchBar from "../../../../Buttons/Search.jsx";
import Modals from "../../../../modal/Sucess.jsx";

const Home = () => {
  return (
    <div>

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
      {/*<About />*/}

      {/* Modals Section */}
      <Modals /> {/* Render the Modals component here */}
    </div>
  );
};

export default Home;
