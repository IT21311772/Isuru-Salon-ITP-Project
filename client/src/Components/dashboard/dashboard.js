import "./dashboard.css";
import Button from "react-bootstrap/Button";
import { useLocation, useNavigate } from "react-router-dom"; //use to create dynamic application
import MainLayout from "../../layouts/MainLayout";

function dashboard() {

  const navigate = useNavigate();
  const location = useLocation()


  return (
    <div className="dashboard">
      <MainLayout>
      <h1>Hello 
        {location.state.id}  
        !!</h1>
      <br />
      </MainLayout>
      
      <div className="container mt-5 d-flex justify-content-center">
      <button className="btn-func" onClick={() => navigate("/posts")}>
        Package Management
      </button>

      <button className="btn-func" onClick={() => navigate("/posts")}>
      Service Management
      </button>

      <button className="btn-func" onClick={() => navigate("/posts")}>
      Schedule Management
      </button>

      <button className="btn-func" onClick={() => navigate("/posts")}>
      Finance Management
      </button>

      </div>

      <br />

      <div className="container mt-5 d-flex justify-content-center">
      <button className="btn-func" onClick={() => navigate("/posts")}>
      Appointment Management
      </button>

      <button className="btn-func" onClick={() => navigate("/posts")}>
      Inventory Management
      </button>

      <button className="btn-func" onClick={() => navigate("/posts")}>
      Supplier Management
      </button>

      <button className="btn-func" onClick={() => navigate("/posts")}>
      Employee Management
      </button>
      
      </div>
    </div>
  );
}

export default dashboard;
