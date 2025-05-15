import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Expertise from "@/pages/Expertise";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Careers from "@/pages/Careers";
import CareerDetails from "@/pages/CareerDetails"; 
import Awards from "@/pages/About/Awards";
import Leadership from "@/pages/About/Leadership";
import Properties from "@/pages/Property/Properties";
import ViewProperties from "@/pages/Property/View-Properties";
import { Events } from "@/pages/Events";
import Pressroom from "@/pages/Pressroom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:title" element={<CareerDetails />} />
        <Route path="/about/awards" element={<Awards />} />
        <Route path="/about/leadership" element={<Leadership />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/view-properties/:id" element={<ViewProperties />} />
        <Route path="/events" element={<Events />} />
        <Route path="/pressroom" element={<Pressroom />} /> 
      </Routes>
    </Router>
  );
}

export default App;
