let name: string;
name = "testFile";

let loginUser = (username: string, password: string): boolean => {
	if (username === "admin" && password === "admin") {
		return true;
	}
	return false;
};

type User = {
	username: string;
	password: string;
};

let createUser = (user: User): boolean => {
	if (user.username && user.password) {
		return true;
	}
	return false;
};

const arr: string[] = [];
arr.push("hello");

const allUsers: User[] = [];
allUsers.push({username: "Jide", password: "123"})

console.log(createUser({ username: "admin", password: "admin" }));
export {};
