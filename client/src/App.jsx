import React from "react";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import Freepage from "./components/Pages/Freepage";
import Actionpage from "./components/Pages/Actionpage";
import Adventurepage from "./components/Pages/Adventurepage";
import Racepage from "./components/Pages/Racepage";
import { Navbar } from "./components/Navbar/Navbar";
import { Homepage } from "./components/Pages/Homepage";
import { Footer } from "./components/Footer/Footer";
import FreeGame from "./components/Games/FreeGame";
import ActionGame from "./components/Games/ActionGame";
import AdventureGame from "./components/Games/AdventureGame";
import RaceGame from "./components/Games/RaceGame";
import { Privacypage } from "./components/Pages/Privacypage";
import { Disclaimerpage } from "./components/Pages/Disclaimerpage";
import { Termspage } from "./components/Pages/Termspage";
import { Contactpage } from "./components/Pages/Contactpage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Main>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/freepage" element={<Freepage />} />
        <Route path="/actionpage" element={<Actionpage />} />
        <Route path="/adventurepage" element={<Adventurepage />} />
        <Route path="/racepage" element={<Racepage />} />
        <Route path="/free/:name" element={<FreeGame />} />
        <Route path="/action/:name" element={<ActionGame />} />
        <Route path="/adventure/:name" element={<AdventureGame />} />
        <Route path="/race/:name" element={<RaceGame />} />
        <Route path="/privacypage" element={<Privacypage />} />
        <Route path="/disclaimerpage" element={<Disclaimerpage />} />
        <Route path="/termspage" element={<Termspage />} />
        <Route path="/contactpage" element={<Contactpage />} />
      </Routes>
      <Footer />
    </Main>
  );
}

export default App;
