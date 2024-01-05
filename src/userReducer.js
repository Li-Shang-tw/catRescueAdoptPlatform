const base = "https://659761a4668d248edf22cead.mockapi.io/catHelper/";

export default async function UserReducer(users, action) {
  switch (action.type) {
    case "getUsers": {
      fetch(base + "users", {
        method: "GET",
        headers: { "content-type": "application/json" },
      }).then((res) => {
        console.log(res);
        if (res.ok) {
          console.log(res.json());
          return res.json();
        }
        // h andle error
      });
    }
  }
}
