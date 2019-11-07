// * Page Functionality //

const navOne   = document.querySelector('#nav-compromise'),
      navTwo   = document.querySelector('#nav-aws'),
      navThree = document.querySelector('#nav-network'),
      navBox   = document.querySelector('#nav');

const bpSmaller = window.matchMedia("(max-width: 600px")
      htmlWin   = document.getElementById("html");

const sectionOne   = document.querySelector('#compromise'),
      sectionTwo   = document.querySelector('#aws'),
      sectionThree = document.querySelector('#network-security'),
      landing      = document.querySelector('#landing'),
      bottom      = document.querySelector('#footer-bottom'),
      mobileIcons  = document.querySelector(".mobile-icon-box"),
      sections     = [sectionOne, sectionTwo, sectionThree, landing, bottom];

const options = {
    root: null,
    threshold: .9,
};

const observer = new IntersectionObserver( (entries) => {

    entries.forEach(entry => {
        if (entry.target === sectionOne) {
            navOne.classList.add("nav__page-links--active");
            navTwo.classList.remove("nav__page-links--active");
            navThree.classList.remove("nav__page-links--active");
            navBox.style.opacity = "1";
            htmlWin.style.scrollSnapType = "y mandatory";
            
            if (bpSmaller.matches) {
                mobileIcons.style.opacity = "1";
            }
        } else if (entry.target === sectionTwo) {
            navTwo.classList.add("nav__page-links--active");
            navOne.classList.remove("nav__page-links--active");
            navThree.classList.remove("nav__page-links--active");
            htmlWin.style.scrollSnapType = "y mandatory";

            if (bpSmaller.matches) {
              mobileIcons.style.opacity = "1";
            }
        } else if (entry.target === sectionThree) {
            navThree.classList.add("nav__page-links--active");
            navTwo.classList.remove("nav__page-links--active");
            navOne.classList.remove("nav__page-links--active");
            htmlWin.style.scrollSnapType = "y mandatory";

            if (bpSmaller.matches) {
              mobileIcons.style.opacity = "1";
            }
        } else if (entry.target === landing) {
            // navOne.classList.remove("nav__page-links--active");
            // navTwo.classList.remove("nav__page-links--active");
            // navThree.classList.remove("nav__page-links--active");
            navBox.style.opacity = "0";
            mobileIcons.style.opacity = "0";
            htmlWin.style.scrollSnapType = "y mandatory";

        } else if (entry.target === bottom) {
            htmlWin.style.scrollSnapType = "none";
        }   
    })
}, options);

sections.forEach(section => {
    observer.observe(section);
});




// const navStyle = getComputedStyle(navBox);

// if (navStyle.opacity === "0") {
//     console.log('IT KNOWS');
//     mobileIcons.style.opacity = "0";
// } else if (navStyle.opacity === "1") {
//     console.log('IT ALSO KNOWS');
//     mobileIcons.style.opacity = "1";
// }

// if (naxBox.style.opacity === "0") {
//     console.log('IT KNOWS');
//     mobileIcons.style.opacity = "0";
// } else if (naxBox.style.opacity === "1") {
//     console.log("IT ALSO KNOWS");
//     mobileIcons.style.opacity = "1";
// }

