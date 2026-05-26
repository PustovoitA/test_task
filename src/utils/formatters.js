export const formatPrice = (value) =>
    value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    });

export const formatPercent = (value) =>
    `${value.toFixed(2)}%`;

export const formatCompactNumber = (value) =>
    Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 2,
    }).format(value);