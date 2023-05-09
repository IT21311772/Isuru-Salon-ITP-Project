import "./dashboard.css";
import { useNavigate } from "react-router-dom"; //use to create dynamic application
import MainLayout from "../../layouts/MainLayout";

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div className="dashboard">


    <div className="App">

      <MainLayout>
        <center><h1 style={{ fontFamily: "mulish,sans-serif" }}>DashBoard</h1></center><br />
      </MainLayout>
      <button className="btn-func" onClick={() => navigate("/services")}>
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
      <div className="dash">
        <center>
          <div className="container">
            <button className="btn-func" onClick={() => navigate("/posts")}>Package Management</button>
            <button className="btn-func" onClick={() => navigate("/posts")}>Service Management</button>
          </div>
          <div className="container">
            <button className="btn-func" onClick={() => navigate("/posts")}>Schedule Management</button>
            <button className="btn-func" onClick={() => navigate("/posts")}>Finance Management</button>
          </div>

          <div className="container">
            <button className="btn-func" onClick={() => navigate("/appointments")}>Appointment Management</button>
            <button className="btn-func" onClick={() => navigate("/posts")}> Inventory Management</button>
          </div>
          <div className="container">
            <button className="btn-func" onClick={() => navigate("/posts")}>Supplier Management</button>
            <button className="btn-func" onClick={() => navigate("/posts")}>Employee Management</button>
          </div>
          
        <div className="container">
          <button className="btn-func" onClick={() => navigate("/posts")}>Package Management</button>
          <button className="btn-func" onClick={() => navigate("/posts")}>Service Management</button>
        </div>
        <div className="container">
          <button className="btn-func" onClick={() => navigate("/posts")}>Schedule Management</button>
          <button className="btn-func" onClick={() => navigate("/fin")}>Finance Management</button>
        </div>

        <div className="container">
          <button className="btn-func" onClick={() => navigate("/posts")}>Appointment Management</button>
          <button className="btn-func" onClick={() => navigate("/products")}> Inventory Management</button>
        </div>
        <div className="container">
          <button className="btn-func" onClick={() => navigate("/sups")}>Supplier Management</button>
          <button className="btn-func" onClick={() => navigate("/posts")}>Employee Management</button>
          <button className="btn-func" onClick={() => navigate("/posts")}>Supplier Management</button>
          <button className="btn-func" onClick={() => navigate("/emp")}>Employee Management</button>
        </div>
        
        </center>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
