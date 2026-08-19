const loader =
    document.getElementById("loader");

window.addEventListener(
    "load",
    () => {

        document.body.classList.remove(
            "loading"
        );

        setTimeout(
            () => {

                loader.classList.add(
                    "hidden"
                );

            },
            700
        );

    }
);

const navbar =
    document.getElementById("navbar");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 40) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");

menuButton.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "open"
        );

        const spans =
            menuButton.querySelectorAll(
                "span"
            );

        if (
            navLinks.classList.contains(
                "open"
            )
        ) {

            spans[0].style.transform =
                "rotate(45deg) translate(5px,5px)";

            spans[1].style.opacity =
                "0";

            spans[2].style.transform =
                "rotate(-45deg) translate(5px,-5px)";

        } else {

            spans[0].style.transform =
                "";

            spans[1].style.opacity =
                "1";

            spans[2].style.transform =
                "";

        }

    }
);

document
    .querySelectorAll(".nav-link")
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "open"
                    );

                    const spans =
                        menuButton.querySelectorAll(
                            "span"
                        );

                    spans.forEach(
                        span => {

                            span.style.transform =
                                "";

                            span.style.opacity =
                                "1";

                        }
                    );

                }
            );

        }
    );

const typingElement =
    document.getElementById(
        "typingText"
    );

const typingWords = [

    "Programmer.",
    "Web Developer.",
    "Problem Solver.",
    "Tech Enthusiast.",
    "Chess Player."

];

let currentWord = 0;

let currentCharacter = 0;

let isDeleting = false;

function typeEffect() {

    const word =
        typingWords[currentWord];


    if (!isDeleting) {

        typingElement.textContent =
            word.substring(
                0,
                currentCharacter + 1
            );

        currentCharacter++;


        if (
            currentCharacter ===
            word.length
        ) {

            isDeleting = true;

            setTimeout(
                typeEffect,
                1400
            );

            return;

        }

    } else {

        typingElement.textContent =
            word.substring(
                0,
                currentCharacter - 1
            );

        currentCharacter--;


        if (
            currentCharacter === 0
        ) {

            isDeleting = false;

            currentWord =
                (
                    currentWord + 1
                ) %
                typingWords.length;

        }

    }


    setTimeout(
        typeEffect,
        isDeleting
            ? 45
            : 85
    );

}

typeEffect();

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "active"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";

        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop;

                if (
                    window.scrollY >=
                    sectionTop - 250
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navigationLinks.forEach(
            link => {

                link.classList.remove(
                    "active"
                );

                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);

const counters =
    document.querySelectorAll(
        ".counter"
    );

let countersStarted = false;


function animateCounters() {

    if (countersStarted)
        return;

    countersStarted = true;


    counters.forEach(
        counter => {

            const target =
                Number(
                    counter.dataset.target
                );

            let current = 0;

            const increment =
                Math.max(
                    target / 60,
                    .5
                );


            function updateCounter() {

                current += increment;

                if (
                    current >= target
                ) {

                    counter.textContent =
                        target;

                    return;

                }

                counter.textContent =
                    Math.floor(
                        current
                    );

                requestAnimationFrame(
                    updateCounter
                );

            }

            updateCounter();

        }
    );

}


const statsSection =
    document.querySelector(
        ".stats-grid"
    );


const statsObserver =
    new IntersectionObserver(
        entries => {

            if (
                entries[0].isIntersecting
            ) {

                animateCounters();

                statsObserver.disconnect();

            }

        },
        {
            threshold: .4
        }
    );


if (statsSection) {

    statsObserver.observe(
        statsSection
    );

}

const backToTop =
    document.getElementById(
        "backToTop"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 600
        ) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);

const cursorDot =
    document.getElementById(
        "cursorDot"
    );

const cursorOutline =
    document.getElementById(
        "cursorOutline"
    );


let mouseX = 0;

let mouseY = 0;

let outlineX = 0;

let outlineY = 0;


document.addEventListener(
    "mousemove",
    event => {

        mouseX =
            event.clientX;

        mouseY =
            event.clientY;


        cursorDot.style.left =
            mouseX + "px";

        cursorDot.style.top =
            mouseY + "px";

    }
);


function animateCursor() {

    outlineX +=
        (
            mouseX -
            outlineX
        ) * .15;

    outlineY +=
        (
            mouseY -
            outlineY
        ) * .15;


    cursorOutline.style.left =
        outlineX + "px";

    cursorOutline.style.top =
        outlineY + "px";


    requestAnimationFrame(
        animateCursor
    );

}

animateCursor();

const interactiveElements =
    document.querySelectorAll(
        "a, button, .gallery-item, .stat-card"
    );


interactiveElements.forEach(
    element => {

        element.addEventListener(
            "mouseenter",
            () => {

                cursorOutline.classList.add(
                    "cursor-hover"
                );

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                cursorOutline.classList.remove(
                    "cursor-hover"
                );

            }
        );

    }
);

const canvas =
    document.getElementById(
        "particles"
    );

const ctx =
    canvas.getContext(
        "2d"
    );


let particles = [];

const particleCount =
    window.innerWidth < 700
        ? 35
        : 70;


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);


/* CREATE PARTICLES */

function createParticles() {

    particles = [];


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        particles.push({

            x:
                Math.random() *
                canvas.width,

            y:
                Math.random() *
                canvas.height,

            size:
                Math.random() *
                1.5 + .4,

            speedX:
                (
                    Math.random() - .5
                ) * .25,

            speedY:
                (
                    Math.random() - .5
                ) * .25,

            opacity:
                Math.random() *
                .5 + .1

        });

    }

}


createParticles();

function drawParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(
        particle => {

            particle.x +=
                particle.speedX;

            particle.y +=
                particle.speedY;


            if (
                particle.x < 0 ||
                particle.x > canvas.width
            ) {

                particle.speedX *= -1;

            }


            if (
                particle.y < 0 ||
                particle.y > canvas.height
            ) {

                particle.speedY *= -1;

            }


            ctx.beginPath();

            ctx.arc(
                particle.x,
                particle.y,
                particle.size,
                0,
                Math.PI * 2
            );


            ctx.fillStyle =
                `rgba(
                    0,
                    217,
                    255,
                    ${particle.opacity}
                )`;


            ctx.fill();

        }
    );


    requestAnimationFrame(
        drawParticles
    );

}

drawParticles();

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );


document.addEventListener(
    "mousemove",
    event => {

        if (
            window.innerWidth < 900
        )
            return;


        const x =
            (
                event.clientX /
                window.innerWidth
                - .5
            );

        const y =
            (
                event.clientY /
                window.innerHeight
                - .5
            );


        if (heroVisual) {

            heroVisual.style.transform =
                `
                translate(
                    ${x * 8}px,
                    ${y * 8}px
                )
                `;

        }

    }
);

const yearElement =
    document.getElementById(
        "currentYear"
    );


if (yearElement) {

    yearElement.textContent =
        new Date()
            .getFullYear();

}

document
    .querySelectorAll(
        ".gallery-item img"
    )
    .forEach(
        image => {

            image.addEventListener(
                "error",
                () => {

                    image.style.display =
                        "none";

                    const fallback =
                        image.nextElementSibling;

                    if (fallback) {

                        fallback.style.display =
                            "flex";

                    }

                }
            );

        }
    );

document
    .querySelectorAll(
        "img"
    )
    .forEach(
        image => {

            image.addEventListener(
                "dragstart",
                event => {

                    event.preventDefault();

                }
            );

        }
    );

console.log(
`
╔════════════════════════════════════╗
║       KRISUDA PERSONAL WEBSITE     ║
╠════════════════════════════════════╣
║ I Gede Bagus Ananta Krisuda        ║
║ NIM : 2615051044                   ║
║ Group : 04 - Char                  ║
║ S1 Pendidikan Teknik Informatika   ║
║                                    ║
║ Keep learning. Keep creating. 🚀   ║
╚════════════════════════════════════╝
`
);