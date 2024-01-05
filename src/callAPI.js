const base = "https://659761a4668d248edf22cead.mockapi.io/catHelper/";

export function postUserAPI(data) {
  return fetch(base + "users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => res.json());
}
