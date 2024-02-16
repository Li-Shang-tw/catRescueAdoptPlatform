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
function getUserAPI(id) {
  return fetch(`${base}users/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      // handle error
      console.log(error);
    });
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
function getOtherUsersAPI(role) {
  const url = new URL(`${base}users`);
  url.searchParams.append("role", role);
  return fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      return error;
    });
}

function getRescuingCatsAPI() {
  return fetch(`${base}resuingCats?state=1`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      // handle error
      console.log(error);
    });
}
function getAdoptingCatsAPI() {
  const url = new URL(`${base}resuingCats`);
  url.searchParams.append("state", "3");

  return fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
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

function postCatAPI(data) {
  return fetch(base + "resuingCats", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => res.json());
}
function getCatAPI(id) {
  return fetch(`${base}resuingCats/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      // handle error
      console.log(error);
    });
}
function putCatAPI(id, data) {
  return fetch(`${base}resuingCats/${id}`, {
    method: "PUT", // or PATCH
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })

    .catch((error) => {
      // handle error
      console.log(error);
    });
}
function getCatsOfCurrentUserAPI(rescuerId, state) {
  const url = new URL(`${base}resuingCats`);
  url.searchParams.append("state", state);
  url.searchParams.append("rescuerId", rescuerId);
  return fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })

    .catch((error) => {
      // handle error

      return error;
    });
}
function getCatsOfOtherUserAPI(rescuerId) {
  const url = new URL(`${base}resuingCats`);
  url.searchParams.append("rescuerId", rescuerId);
  return fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })

    .catch((error) => {
      // handle error

      return error;
    });
}
export {
  postUserAPI,
  getUsersAPI,
  putUserAPI,
  getUserAPI,
  getRescuingCatsAPI,
  getAdoptingCatsAPI,
  postCatAPI,
  getCatAPI,
  putCatAPI,
  getCatsOfCurrentUserAPI,
  getOtherUsersAPI,
  getCatsOfOtherUserAPI,
};
