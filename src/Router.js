import { Routes, Route } from "react-router-dom";

import Home from "./Components/Pages/Home";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Budget from "./Components/Pages/Budget/Budget";
import DistributionForm from "./Components/Pages/DistributionForm/DistributionForm/DistributionForm";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="dashboard/budget" element={<Budget />} />
      <Route path="dashboard/distribution" element={<DistributionForm />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

export default Router;
