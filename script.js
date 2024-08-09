function loadingAnimation() {
  var h5timer = document.querySelector("#line1-part1 h5");
  var grow = 0;

  var tl = gsap.timeline();

  tl.from(".line h1", {
    y: +150,
    stagger: 0.25,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 38);
    },
  });

  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 4,
  });

  tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    duration: 0.5,
  });

  tl.to("#loader", {
    display: "none",
  });

  tl.from("#nav", {
    opacity:0,
  })

  tl.from("#page1-main1 h1,#page1-main2 h1,#page1-main3 h2, #page1-main3 h3,#page1-main4 h1", {
    y: 120,
    stagger: 0.2,
  })
}

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      left: dets.x,
      top: dets.y,
    });
  });

  Shery.makeMagnet("#nav-part2 h4");
  Shery.makeMagnet("#nav svg");
}

loadingAnimation();
cursorAnimation();
