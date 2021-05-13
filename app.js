const hamburgerButton = document.getElementById('hamburger');
let state = true;
let tl = gsap.timeline({defaults: {duration: 1, ease: Back.easeOut.config(2)}})

// animation created here
tl.paused(true);
tl.to('.nav-links', {clipPath: 'circle(100%)'})
tl.to('.nav-li', {opacity: 1, y: '30px', stagger: 0.1}, "-=1")

const navigationBar = () => {
    state = !state;
    if (!state) {
        tl.play();
    } else {
        tl.reverse(.7);
    }
    hamburgerButton.classList.toggle('active');
};

hamburgerButton.addEventListener('click', navigationBar);