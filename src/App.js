// eslint-disable-next-line no-unused-vars
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewAnalysis from "../src/Pages/ViewAnalysis";
import AddReview from "../src/Pages/AddReview";
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Products from "../src/Pages/Products";
import Employees from "../src/Pages/Employees";
import GenerateQR from "./Components/GenerateQR/GenerateQR";
import CustomerInterfacePage from "./Pages/CustomerInterfacePage";
import AddEmployees from "./Pages/AddEmployeePage";
import AddProducts from "./Pages/AddProductPage";
import SignupPage from "./Pages/LoginSignupPage";
import CustomerReview from "./Pages/CustomerReview";
import { useState } from "react";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };
  return (
    <div>
      <BrowserRouter>
        {isSignedIn && <Navigation />}
        {isSignedIn && <Header />}
        <Routes>
          {isSignedIn ? (
            <>
              <Route path="/" element={<ViewAnalysis />} />
              <Route path="/generate-qr" element={<GenerateQR />} />
              <Route path="/view-analysis" element={<ViewAnalysis />} />
              <Route path="/add-reviews" element={<AddReview />} />
              <Route path="/products" element={<Products />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/addemployee" element={<AddEmployees />} />
              <Route path="/addproduct" element={<AddProducts />} />
              <Route
                path="/review/:employee/:foodItems"
                element={<CustomerReview />}
              />
            </>
          ) : (
            <>
              <Route
                path="/"
                element={
                  <>
                    <CustomerInterfacePage />
                    <SignupPage onSignIn={setIsSignedIn} />
                  </>
                }
              />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
