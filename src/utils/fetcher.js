export default async function fetcher() {
    const URL = "https://japan-map.herokuapp.com/api";
    const options = {
        method: "GET",
    };
    const res = await fetch(URL, options);
    const json_res = await res.json();
    return Object.freeze(json_res);
}
