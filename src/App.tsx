import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routers/Router"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}
