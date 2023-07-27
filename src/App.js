import Header from "./view/header/header"
import SideBar from "./view/sidebar/sideBar"
import Employee from "./view/employees/employee";
import Dashboard from "./view/dashboard/dashboard";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

// import Login from "./view/login/login";
import "./App.css"
function App() {

  const { isOpenSidebar } = useSelector((state) => state.sidebar)

  return (
    // <BrowserRouter>
    <div className="app">
      <SideBar />
      <div className={`layout ${isOpenSidebar ? "" : "layout-hide-side-bar"}`}>
        <Header />
        <Routes>
          <Route path="/employees" element={<Employee />} />
          <Route path="/dashboard/overview" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
    // </BrowserRouter>
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
