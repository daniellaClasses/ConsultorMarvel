const api = "https://gateway.marvel.com";
const publicKey = "c362a0b48487e82a9f79b23bdee091f7";
const hash = "27aefb823da92bc23178f747c004be8f"; //generado md5

const endPath = "?ts=1&apikey=" + publicKey + "&hash=" + hash;

export function getInfo(path) {
    return fetch(api + path + endPath)
    .then(result => result.json())
}