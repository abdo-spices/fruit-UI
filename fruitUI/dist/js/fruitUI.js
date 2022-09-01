'use strict';

/**
 *  just call the function and it well active the toggle*/
const Navbar = () => {
    const navbar = document.querySelector(".navbar");
    document.querySelector(".toggle").addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
};

const Button = () => {
    console.log("\n \n \n \n \n 99999999999999999990000000000000000");
};

var fruitUI = { Navbar, Button };

module.exports = fruitUI;
//# sourceMappingURL=fruitUI.js.map
