const output = {
    hello: (req, res) => {
        res.send(res.render("home/index"));
    },
    login: (req, res) => {
        res.send(res.render("home/login"));
    }
};

const users = {
    id: ["shin", "jeong", "min"],
    psword: ["1234", "1234", "1234"]
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword
        console.log(id, psword);

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);

            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            };
        }
        else{
            return res.json({
                success: false,
                msg: "login failed"
            });
        }
        
    }

}



module.exports = {
    output, process, users
};