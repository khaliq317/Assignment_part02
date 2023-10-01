let users = ["admin", "eric", "khaliq", "ali"];
for (let i = 0; i < users.length; i++) {
    if (users[i] === "admin") {
        console.log("Hello admin! Would you like to see status report?");
    }
    else {
        console.log(`Hello ${users[i]}, thank you for logging again`);
    }
}
;
export {};
