import "./App.css";
import Layout from "./components//Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Welcome from "./pages/welcome/Welcome";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContextProvider } from "./context/ToastContext";
import Rovers from "./pages/rovers/Rovers";

function App() {
  return (
    <Router>
      <ToastContextProvider>
        <AuthContextProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Rovers />} />
              {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}
            </Routes>
          </Layout>
        </AuthContextProvider>
      </ToastContextProvider>
    </Router>
  );
}

export default App;



















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
