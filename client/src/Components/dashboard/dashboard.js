import "./dashboard.css";
import { useNavigate } from "react-router-dom"; //use to create dynamic application
import MainLayout from "../../layouts/MainLayout";

function DashBoard() {

  const navigate = useNavigate();
  // const location = useLocation()


  return (
    <div className="App">
     
      <MainLayout>
        <center><h1 style={{fontFamily:"mulish,sans-serif"}}>DashBoard</h1></center><br />
      </MainLayout>

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
          <button className="btn-func" onClick={() => navigate("/posts")}>Appointment Management</button>
          <button className="btn-func" onClick={() => navigate("/posts")}> Inventory Management</button>
        </div>
        <div className="container">
          <button className="btn-func" onClick={() => navigate("/posts")}>Supplier Management</button>
          <button className="btn-func" onClick={() => navigate("/emp")}>Employee Management</button>
        </div>
        </center>
      </div>
    </div>
  );
}

export default DashBoard;
