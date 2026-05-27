import { FormOutlined, HomeOutlined, TableOutlined } from "@ant-design/icons";
import Home from "./pages/Home.jsx";
import Coins from "./pages/Coins.jsx";
import CoinsPaged from "./pages/CoinsPaged.jsx";
import Wizard from "./pages/Wizard.jsx";

export const routes = [
    { path: "/", label: "Home", icon: <HomeOutlined />, element: <Home /> },
    { path: "/coins", label: "Coins", icon: <TableOutlined />, element: <Coins /> },
    {path: "/coins-paged", label: "Coins-paged", icon: <TableOutlined />, element: <CoinsPaged />},
    {path: "/wizard", label: "Form", icon: <FormOutlined />, element: <Wizard/>}
];
