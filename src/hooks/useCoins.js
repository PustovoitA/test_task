import { useQuery } from "@tanstack/react-query";

const getCoins = async () => {
    const respons = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&page=1");

    if(!respons.ok){
        throw new Error(`Reques failed: ${respons.status}`)
    }

    return respons.json();
}

export const useCoins = () => {
    return useQuery({
        queryKey: ["coins"],
        queryFn: getCoins,
    });
}