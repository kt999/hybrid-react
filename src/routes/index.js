import { Routes, Route } from "react-router-dom"
import LandingPage from "../pages"

const RootRoute = () => {
    return (
        <Routes>

            {/* 기본 루트페이지 */}
            <Route path="/" exact element={<LandingPage />} />

            <Route />
        </Routes>
    )
}

export default RootRoute