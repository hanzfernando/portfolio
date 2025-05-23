import MainLayout from "./layouts/MainLayout.jsx"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from "react-router-dom"

// Page imports
import AboutPage from "./pages/AboutPage.jsx"
import ProjectsPage from "./pages/ProjectsPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Navigate to="/about" replace />} />
                <Route path="/about" element={ <AboutPage />} />
                <Route path="/projects" element={ <ProjectsPage />} />
                <Route path="/contact" element={ <ContactPage />} />
            </Route>
        )
    )
    return (
        <RouterProvider router={router} />
    )
}

export default App