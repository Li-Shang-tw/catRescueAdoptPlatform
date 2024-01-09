const base = "https://659761a4668d248edf22cead.mockapi.io/catHelper/";

function postUserAPI(data) {
  return fetch(base + "users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => res.json());
}
function getUsersAPI() {
  return fetch(base + "users", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => res.json());
}
function putUserAPI(id, data) {
  return fetch(`${base}users/${id}`, {
    method: "PUT", // or PATCH
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
}

export { postUserAPI, getUsersAPI, putUserAPI };
