export const fetchCatFact = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    if (!response.ok) {
        throw new Error("Failed to fetch cat fact");
    }
    const data = await response.json();
    return data.fact;
}