import './App.css';
import Content from './components/content/Content';
import LoginPage from './components/content/login/LoginPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/layout/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Content>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Content>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
