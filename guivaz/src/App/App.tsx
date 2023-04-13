import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyRoutes from "../routes/index";
import { UserProvider } from "../context/UserContext";

function App() {
  return (
    <UserProvider>
      <ToastContainer
        theme="light"
        style={{ width: "36rem", fontSize: "1.6rem" }}
      />
      <>
        <MyRoutes />
      </>
    </UserProvider>
  );
}

export default App;
