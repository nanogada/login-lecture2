const id = document.querySelector("#id"),
    psword = document.querySelector("#pwd"),
    loginbtn = document.querySelector("#login_button");

loginbtn.addEventListener("click", () => {
    const req = {
        id: id.value,
        psword: psword.value,
    };
    fetch("/login", {
        method: "POST",
        headers: {
            "Context-Type": "application/json",
        },
        body: JSON.stringify(req),
    }).then((res) => res.json()).then((res) => console.log(res));


});
