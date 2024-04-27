import LogIn from "./components/Accounts/LogIn";
import Header from "./components/Header/Header";
import ContactUs from "./components/ContactForm/ContactUs";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />}>
            
          </Route>
          
          
          <Route exact path="/LogIn" element={<LogIn/>}></Route>
          <Route exact path="/contactus" element={<ContactUs/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
