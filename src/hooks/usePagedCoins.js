import { useQuery } from "@tanstack/react-query"


const getPagetCoins = async (page) => {
    const respons = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20&page=${page}`);

    if(!respons.ok){
        throw new Error(`Reques failed: ${respons.status}`)
    }

    return respons.json()
}

export const usePagedCoins = (page) => {
    return useQuery({
        queryKey: ["pagedCoins", page],
        queryFn: () => getPagetCoins(page),
        placeholderData: (previousData) => previousData,
    })
}