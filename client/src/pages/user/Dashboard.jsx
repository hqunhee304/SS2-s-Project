import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="useradashboard container-fluid dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
