// * Page Functionality //

const navOne   = document.querySelector('#nav-compromise'),
      navTwo   = document.querySelector('#nav-aws'),
      navThree = document.querySelector('#nav-network'),
      navBox   = document.querySelector('#nav');

const sectionOne   = document.querySelector('#compromise'),
      sectionTwo   = document.querySelector('#aws'),
      sectionThree = document.querySelector('#network-security'),
      landing      = document.querySelector('#landing'),
      sections     = [sectionOne, sectionTwo, sectionThree, landing];

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
        } else if (entry.target === sectionTwo) {
            navTwo.classList.add("nav__page-links--active");
            navOne.classList.remove("nav__page-links--active");
            navThree.classList.remove("nav__page-links--active");
          
        } else if (entry.target === sectionThree) {
            navThree.classList.add("nav__page-links--active");
            navTwo.classList.remove("nav__page-links--active");
            navOne.classList.remove("nav__page-links--active");
        } else if (entry.target === landing) {
            // navOne.classList.remove("nav__page-links--active");
            // navTwo.classList.remove("nav__page-links--active");
            // navThree.classList.remove("nav__page-links--active");
            navBox.style.opacity = "0";
        }    
    })
}, options);

sections.forEach(section => {
    observer.observe(section);
});


