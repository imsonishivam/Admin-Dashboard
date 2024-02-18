import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Loader from "./components/Loader";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const Transaction = lazy(() => import("./pages/Transaction"));

// import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/customer" element={<Customers />} />
          <Route path="/admin/transaction" element={<Transaction />} />

          {/* Charts */}

          {/* Apps */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
