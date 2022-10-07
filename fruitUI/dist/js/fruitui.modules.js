/**
 *  just call the function and it will active the toggle */
var Navbar = function () {
    var _a;
    var navbar = document.querySelector(".navbar");
    (_a = document.querySelector(".toggle")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.toggle("active");
    });
};

var Rippel = function () {
    var buttons = document.querySelectorAll(".btn-ripple");
    buttons.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            var x = e.clientX - e.target.offsetLeft;
            var y = e.clientY - e.target.offsetTop;
            var ripples = document.createElement("span");
            ripples.classList.add("ripple-container");
            ripples.style.left = x + "px";
            ripples.style.top = y + "px";
            btn.appendChild(ripples);
            setTimeout(function () {
                ripples.remove();
            }, 1000);
        });
    });
};

var Slider = function () {
    var slides = document.querySelector(".slider .slides");
    var allSlides = document.querySelectorAll(".slider .slide");
    var slidesLength = allSlides.length;
    var slideWidth = allSlides[0].offsetWidth;
    var index = 0;
    var posX1;
    var posX2;
    var initialPosition;
    var finalPosition;
    var canISlide = true;
    var prev = document.querySelector(".slider .prev");
    var next = document.querySelector(".slider .next");
    var nextSvg = "<svg width=\"70\" height=\"70\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"12 16 16 12 12 8\"></polyline><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line></svg>";
    var prevSvg = "<svg width=\"70\" height=\"70\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"12 8 8 12 12 16\"></polyline><line x1=\"16\" y1=\"12\" x2=\"8\" y2=\"12\"></line></svg>";
    next.innerHTML = nextSvg;
    prev.innerHTML = prevSvg;
    var firstSlide = allSlides[0];
    var lastSlide = allSlides[allSlides.length - 1];
    var cloneFirstSlide = firstSlide.cloneNode(true);
    var cloneLastSlide = lastSlide.cloneNode(true);
    slides.appendChild(cloneFirstSlide);
    slides.insertBefore(cloneLastSlide, firstSlide);
    next.addEventListener("click", function () { return switchSlide("next"); });
    prev.addEventListener("click", function () { return switchSlide("prev"); });
    slides.addEventListener("transitionend", checkIndex);
    slides.addEventListener("mousedown", dragStart);
    slides.addEventListener("touchstart", dragStart);
    slides.addEventListener("touchmove", dragMove);
    slides.addEventListener("touchend", dragEnd);
    function dragStart(e) {
        e.preventDefault();
        initialPosition = slides.offsetLeft;
        if (e.type == "touchstart") {
            posX1 = e.touches[0].clientX;
        }
        else {
            posX1 = e.clientX;
            document.onmouseup = dragEnd;
            document.onmousemove = dragMove;
        }
    }
    function dragMove(e) {
        if (e.type == "touchmove") {
            posX2 = posX1 - e.touches[0].clientX;
            posX1 = e.touches[0].clientX;
        }
        else {
            posX2 = posX1 - e.clientX;
            posX1 = e.clientX;
        }
        slides.style.left = "".concat(slides.offsetLeft - posX2, "px");
    }
    function dragEnd() {
        /*
        three possibilities:
        1. next slide
        2. prev slide
        3. stay still
        */
        finalPosition = slides.offsetLeft;
        if (finalPosition - initialPosition < -196) {
            switchSlide("next", "dragging");
        }
        else if (finalPosition - initialPosition > 196) {
            switchSlide("prev", "dragging");
        }
        else {
            slides.style.left = "".concat(initialPosition, "px");
        }
        document.onmouseup = null;
        document.onmousemove = null;
    }
    function switchSlide(arg, arg2) {
        slides.classList.add("transition");
        if (canISlide) {
            if (!arg2) {
                initialPosition = slides.offsetLeft;
            }
            if (arg == "next") {
                slides.style.left = "".concat(initialPosition - slideWidth, "px");
                index++;
            }
            else {
                slides.style.left = "".concat(initialPosition + slideWidth, "px");
                index--;
            }
        }
        canISlide = false;
    }
    function checkIndex() {
        slides.classList.remove("transition");
        if (index == -1) {
            slides.style.left = "-".concat(slidesLength * slideWidth, "px");
            index = slidesLength - 1;
        }
        if (index == slidesLength) {
            slides.style.left = "-".concat(1 * slideWidth, "px");
            index = 0;
        }
        canISlide = true;
    }
};

function Alert() {
    var alert = document.querySelectorAll(".alert");
    alert.forEach(function (everyAlert) {
        var x = "<svg width=\"24\" height=\"24\" class=\"close-alert\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line></svg>";
        var alertContent = everyAlert.innerHTML;
        var alertSuccessIcon = document.querySelectorAll(".alert .icon-success");
        var alertSecondaryIcon = document.querySelectorAll(".alert .icon-secondary");
        var alertInfoIcon = document.querySelectorAll(".alert .icon-info");
        var alertErrorIcon = document.querySelectorAll(".alert .icon-error");
        var succsessSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-check-circle\"><path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"></path><polyline points=\"22 4 12 14.01 9 11.01\"></polyline></svg>";
        var secondarySvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-alert-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line></svg>";
        var infoSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-alert-triangle\"><path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line></svg>";
        var errorSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-minus-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line></svg>";
        alertSuccessIcon.forEach(function (el) {
            el.innerHTML = succsessSvg;
        });
        alertSecondaryIcon.forEach(function (el) {
            el.innerHTML = secondarySvg;
        });
        alertInfoIcon.forEach(function (el) {
            el.innerHTML = infoSvg;
        });
        alertErrorIcon.forEach(function (el) {
            el.innerHTML = errorSvg;
        });
        everyAlert.innerHTML = alertContent + x;
        var closeAlert = document.querySelectorAll(".alert .close-alert");
        closeAlert.forEach(function (everyCloseAlert) {
            everyCloseAlert.addEventListener("click", function () {
                var _a;
                (_a = everyCloseAlert.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("gost");
                setTimeout(function () { var _a; return (_a = everyCloseAlert.parentElement) === null || _a === void 0 ? void 0 : _a.remove(); }, 300);
            });
        });
    });
}

export { Alert, Navbar, Rippel, Slider };
//# sourceMappingURL=fruitui.modules.js.map
