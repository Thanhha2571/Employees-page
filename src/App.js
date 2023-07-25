import Header from "./view/header/header"
import SideBar from "./view/sidebar/sideBar"
import Employee from "./view/employees/employee";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <SideBar />
        <Header />
        <Routes>
          <Route path="/employees" element={<Employee />} />
        </Routes>
      </div>
    </BrowserRouter>
    // <div className="app">
    //   <SideBar />
    //   <Header />
    //   <Routes>
    //     <Route path="/employees" element={<Employee />} />
    //   </Routes>
    // </div>
  )
}

export default App
