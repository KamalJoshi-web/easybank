import React from "react";
import { Navbar, Banner, Services, Blog, Footer } from "./components/index";

const App = () => {
  return (
    <main className=" overflow-hidden relative">
      <Navbar />
      <Banner />
      <Services />
      <Blog />
      <Footer />
    </main>
  );
};

export default App;
