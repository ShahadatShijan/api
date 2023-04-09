

sessionStorage.setItem("user1", "Shahadat");
sessionStorage.setItem("user2", "Shijan");
const userName = sessionStorage.getItem("user");
console.log(userName);

// sessionStorage.removeItem("user");

// sessionStorage.clear();

const user = { id: "101", name: "anisul" };
sessionStorage.setItem("user", JSON.stringify(user));

const userInfo = JSON.parse(sessionStorage.getItem("user"));
console.log(userInfo);