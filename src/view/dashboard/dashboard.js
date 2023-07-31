import OverviewView from "./overviewView"
import CertificateView from "./certificateView"
import DepartmentView from "./departmentView"
import { Suspense } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { useEffect } from "react"
const Dashboard = () => {

    const navigate = useNavigate()
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

    useEffect(() => {
        navigate(`/${dashBoardTab[0].to}`);
    }, []);

    return (
        <Suspense fallback={<></>}>
            <div>Dashboard</div>
            <div style={{
                marginTop: '100px',
            }}>
                <Link to="dashboard/overView">OverView</Link>
                <Link to="dashboard/department">Department</Link>
                <Link to="dashboard/certificate">Certificate</Link>
            </div>
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
        </Suspense>

    )
}

export default Dashboard


