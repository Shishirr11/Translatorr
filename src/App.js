import "./App.css";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Firstpage from "./components/Firstpage";
import Chatgpt from "./components/Chatgpt";
import Livetrans from "./components/Livetrans";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
        <Route path="/firstpage" element={<Firstpage />} />
        <Route path="/chatgpt" element={<Chatgpt />} />
        <Route path="/livetrans" element={<Livetrans />} />
      </Routes>
    </>
  );
}

export default App;
