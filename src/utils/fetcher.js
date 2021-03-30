export default async function fetcher() {
    const URL = "https://japan-map.herokuapp.com/api";
    const options = {
        method: "GET",
    };
    const res = await fetch(URL, options);
    return await res.json();
}
