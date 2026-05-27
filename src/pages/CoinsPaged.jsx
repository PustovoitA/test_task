import { Spin } from "antd";
import { usePagedCoins } from "../hooks/usePagedCoins";
import CoinsTable from "../components/CoinsTable";
import { useState } from "react";

function CoinsPaged () {
    const [page, setPage] = useState(1);

    const {data, isLoading, isError, isSuccess} = usePagedCoins(page);
    
    if(isLoading){
        return <Spin size="large" />
    }

    if(isError){
        return <div> Data is not found </div>
    }

    if(isSuccess){
        return <CoinsTable data={data} isLoading={isLoading} pagination onPageChange={setPage} currentPage={page}/>
    }
}

export default CoinsPaged