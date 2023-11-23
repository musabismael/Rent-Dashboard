import React from "react";
import ReactDOMClient from "react-dom/client";
import { DashboardHome } from "./screens/DashboardHome";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<DashboardHome />);
