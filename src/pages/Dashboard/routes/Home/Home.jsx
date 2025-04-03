import React from "react";

const Home = () => {
  return (
    <div>
      {/*<h1>Home</h1>*/}

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
  // return <div>Home</div>;
};

export default Home;
