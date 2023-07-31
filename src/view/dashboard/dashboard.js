import OverviewView from "./overviewView"
import CertificateView from "./certificateView"
import DepartmentView from "./departmentView"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
const Dashboard = () => {

    const dashBoardTab = [
        {
            id: 1,
            title: "Overview",
            to: "dashboard/overview",
            label: "Overview",
            component: <OverviewView />,
        },
        {
            id: 2,
            title: "Department",
            to: "dashboard/department",
            label: "Department",
            component: <DepartmentView />,
        },
        {
            id: 3,
            title: "Certificate",
            to: "dashboard/certificate",
            label: "Certifications",
            component: <CertificateView />,
        }
    ]

    return (
        <div>
            <div>sdfssdfd</div>
            <Routes>
                {dashBoardTab.map((element, index) => (
                    <Route
                        path={`${element.to}`}
                        element={
                            <Suspense fallback={<></>}>{element.component}</Suspense>
                        }
                        key={String(index)}
                    />
                ))}
            </Routes>
        </div>

    )
}

export default Dashboard


