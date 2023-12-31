import Header from "./view/header/header"
import SideBar from "./view/sidebar/sideBar"
import Employee from "./view/employees/employee";
import Dashboard from "./view/dashboard/dashboard";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense } from "react";
import Position from "./view/position/position";

// import Login from "./view/login/login";
import "./App.css"
function App() {

  const { isOpenSidebar } = useSelector((state) => state.sidebar)

  const routing = [
    {
      path: "*",
      component: <Dashboard />
    },
    {
      path : "employees",
      component : <Employee />
    },
    {
      path : "position",
      component: <Position />
    }
  ]
  return (
    <div className="app">
      <SideBar />
      <div className={`layout ${isOpenSidebar ? "" : "layout-hide-side-bar"}`}>
        <Header />
          <Routes>
            {routing.map((element, index) => (
              <Route
                path={`/${element.path}`}
                element={
                  <Suspense fallback={<></>}>{element.component}</Suspense>
                }
                key={String(index)}
              />
            ))}
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
