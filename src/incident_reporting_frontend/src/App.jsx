import React from "react";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import IncidentForm from "./components/IncidentForm";

function App() {
  return (
    <Layout>
      <div className="space-y-8">
        <Dashboard />
        <IncidentForm />
      </div>
    </Layout>
  );
}

export default App;
