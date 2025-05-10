import MainLayout from "./layouts/MainLayout.jsx"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from "react-router-dom"

// Page imports
import AboutPage from "./pages/AboutPage.jsx"
import ProjectsPage from "./pages/ProjectsPage.jsx"

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<AboutPage />} />
                <Route path="/about" element={ <AboutPage />} />
                <Route path="/projects" element={ <ProjectsPage />} />
            </Route>
        )
    )
    return (
        <RouterProvider router={router} />
    )
}

export default App