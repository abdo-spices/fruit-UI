/** 
 *  just call the function and it well active the toggle*/
const Navbar = () =>  {
  const navbar :Element = document.querySelector(".navbar");
  document.querySelector(".toggle").addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
};


export default Navbar;
