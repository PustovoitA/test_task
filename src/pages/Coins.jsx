import { useEffect } from "react";
import { useCoins } from "../hooks/useCoins"
import { Spin } from "antd";
import CoinsTable from "../components/CoinsTable";


function Coins(){
    const {data, isLoading, error} = useCoins();

    return(<div>
        {isLoading
        ? <Spin />
        : error
        ? <div> Data is not found </div>
        : <CoinsTable data={data} isLoading={isLoading}/>
        }
    </div>)
}

export default Coins