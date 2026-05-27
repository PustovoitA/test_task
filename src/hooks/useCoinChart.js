import { useQuery } from "@tanstack/react-query";


const getCoinChart = async (coinId) => {
    const respons = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`);

    if(!respons.ok){
        throw new Error(`Reques failed: ${respons.status}`)
    }

    return respons.json();
}

export const useCoinChart = (coinId) => {
    return useQuery({
        queryKey: ["coinChart", coinId],
        queryFn:() => getCoinChart(coinId),
        refetchInterval: 15000,
        placeholderData: (previousData) => previousData,
    });
}