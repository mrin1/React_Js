
let storage = () => {
    let input = document.getElementById("inp").value;
    console.log(input);
    let userDeteils = {
        name: input,
        age: 24,
        location: "kolkata",
    };
    // localStorage.setItem("username" , input)
    localStorage.setItem("userDeteils", JSON.stringify(userDeteils));
    let out = (document.getElementById("output").innerText = JSON.parse(
        localStorage.getItem("userDeteils")
    ).name);
    console.log(out);
};

let del = () => {
    localStorage.removeItem("userDeteils");
    // window.href.reload()
    window.location.reload();
};


