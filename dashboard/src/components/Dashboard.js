import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AppsIcon from '@mui/icons-material/Apps';

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      toast.error("Unauthorized. Redirecting to login...");
      navigate("/signup");
    }
  }, [token, navigate]);

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>

      <div className="sidebar">
        <ul>
          <li>
            <HomeIcon />
            <span>Home</span>
          </li>
          <li>
            <TrendingUpIcon />
            <span>Orders</span>
          </li>
          <li>
            <AccountBalanceIcon />
            <span>Holdings</span>
          </li>
          <li>
            <InsertChartIcon />
            <span>Positions</span>
          </li>
          <li>
            <AccountBalanceWalletIcon />
            <span>Funds</span>
          </li>
          <li>
            <AppsIcon />
            <span>Apps</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
