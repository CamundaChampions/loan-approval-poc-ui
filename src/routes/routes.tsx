import { Suspense } from "react"
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom"
import Dashboard from "../pages/dashboard/dashboard"
import ApplyLoan from "../pages/apply_loan/apply_loan"
import ViewLoan from "../pages/view_loan/view_loan"
import LoanHeader from "../components/loan_header/loan_header"
import { ToastContainer } from 'react-toastify';

const Layout = () => {
    return (
        <>
            <LoanHeader />
            <main className='container'>
                <Outlet />
            </main>
        </>
    )
}

const router = createHashRouter([
    {
        element: <Outlet />,
        children: [
            {
                path: '',
                element: <Layout />,
                children: [
                    {
                        path: '',
                        element: <Dashboard />
                    }, {
                        path: 'dashboard',
                        element: <Dashboard />
                    }, {
                        path: 'apply_loan',
                        element: <ApplyLoan />
                    }, {
                        path: 'view_loan',
                        element: <ViewLoan />
                    }
                ]
            }
        ]
    }
])

const Routes = () => {
    return (
        <Suspense>
            <RouterProvider router={router} />
            <ToastContainer />
        </Suspense>
    )
}

export default Routes;