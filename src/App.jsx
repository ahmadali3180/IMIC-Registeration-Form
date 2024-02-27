import react from "react";
import "./index.css";
import { Header, RegisterForm, Footer, Contact } from "./components";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <RegisterForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
