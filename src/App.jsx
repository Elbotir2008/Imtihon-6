import { createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/RequireAuth";
import Profile from "./pages/Profile/Profile";
import Saidbar from "./components/Saidbar/Saidbar";
import Products from "./pages/Products/Products";
import AddCart from "./pages/Addproduct/AddCart";
import Details from "./pages/Details/Details";
import Edit from "./pages/Edit/Edit";

export const UserContext = createContext();
export const ChanelContext = createContext();

function App() {
  return (
    <div>
      <Router>
        <UserContext.Provider value={"john"}>
          <AuthProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="/profile"
                element={
                  <RequireAuth>
                    <Profile />
                  </RequireAuth>
                }
              />
              <Route path="/products" element={<Products />} />
              <Route path="/AddCart" element={<AddCart />} />
              <Route path="/Details/:id" element={<Details />}></Route>
              <Route path="/edit/:id" element={<Edit />}></Route>
            </Routes>

            <Saidbar />
          </AuthProvider>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
