import { useQuery } from "@tanstack/react-query";

const getCoins = async () => {
    console.log("fetch started")
    const respons = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&page=1");
    const data = respons.json();
    console.log(data);
    return data
}

export const useCoins = () => {
    return useQuery({
        queryKey: ["coins"],
        queryFn: getCoins,
    });
}