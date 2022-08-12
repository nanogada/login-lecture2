const id = document.querySelector("#id"),
    psword = document.querySelector("#pwd"),
    loginbtn = document.querySelector("#login_button");
console.log(id);
loginbtn.addEventListener("click", () => {
    const req={
        id: id.value,
        psword: psword.value,
    };
    console.log(req);
});
