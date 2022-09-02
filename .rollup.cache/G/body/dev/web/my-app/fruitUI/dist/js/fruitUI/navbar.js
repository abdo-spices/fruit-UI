/**
 *  just call the function and it will active the toggle*/
const Navbar = () => {
    const navbar = document.querySelector(".navbar");
    document.querySelector(".toggle").addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
};
export default Navbar;
//# sourceMappingURL=navbar.js.map