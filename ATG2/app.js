gsap.registerPlugin(ScrollTrigger);

gsap.to(".scroller-1", {
    scrollTrigger: {
        markers: false,
        trigger: ".scroller-1",
        start: "top 50.05%",
        end: "top -50%",
        scrub: true,
        onEnter: function () {
            page1enter();

        },
        onLeave: function () {
            page1enter();
        },
        onEnterBack: function () {
            page1enter();

        },
        onLeaveBack: function () {
            page1enter();

        },
    }
})


function fill2() {
    var var1 = document.querySelector('.dotsfill2');
    var1.style.fill = 'rgb(0, 146, 255)';
    var var2 = document.querySelector('.aman2');
    var2.style.display = 'flex';
}

function unfill2() {
    var var1 = document.querySelector('.dotsfill2');
    var1.style.fill = '#FFFFFF';
    var var2 = document.querySelector('.aman2');
    var2.style.display = 'none';
}

function fill3() {
    var var1 = document.querySelector('.dotsfill3');
    var1.style.fill = 'rgb(0, 146, 255)';
    var var2 = document.querySelector('.aman3');
    var2.style.display = 'flex';
}

function unfill3() {
    var var1 = document.querySelector('.dotsfill3');
    var1.style.fill = '#FFFFFF';
    var var2 = document.querySelector('.aman3');
    var2.style.display = 'none';
}

function fill4() {
    var var1 = document.querySelector('.dotsfill4');
    var1.style.fill = 'rgb(0, 146, 255)';
    var var2 = document.querySelector('.aman4');
    var2.style.display = 'flex';
}

function unfill4() {
    var var1 = document.querySelector('.dotsfill4');
    var1.style.fill = '#FFFFFF';
    var var2 = document.querySelector('.aman4');
    var2.style.display = 'none';
}

function fill5() {
    var var1 = document.querySelector('.dotsfill5');
    var1.style.fill = 'rgb(0, 146, 255)';
    var var2 = document.querySelector('.aman5');
    var2.style.display = 'flex';
}

function unfill5() {
    var var1 = document.querySelector('.dotsfill5');
    var1.style.fill = '#FFFFFF';
    var var2 = document.querySelector('.aman5');
    var2.style.display = 'none';
}

function fill6() {
    var var1 = document.querySelector('.dotsfill6');
    var1.style.fill = 'rgb(0, 146, 255)';
    var var2 = document.querySelector('.aman6');
    var2.style.display = 'flex';
}

function unfill6() {
    var var1 = document.querySelector('.dotsfill6');
    var1.style.fill = '#FFFFFF';
    var var2 = document.querySelector('.aman6');
    var2.style.display = 'none';
}

function fill7() {
    var var1 = document.querySelector('.dotsfill7');
    var1.style.fill = 'rgb(0, 146, 255)';
    var var2 = document.querySelector('.aman7');
    var2.style.display = 'flex';
}

function unfill7() {
    var var1 = document.querySelector('.dotsfill7');
    var1.style.fill = '#FFFFFF';
    var var2 = document.querySelector('.aman7');
    var2.style.display = 'none';
}

gsap.to(".scroller-2", {
    scrollTrigger: {
        markers: false,
        trigger: ".scroller-2",
        start: "top 50.05%",
        end: "top -50%",
        scrub: true,
        onEnter: function () {
            fill2();
        },
        onLeave: function () {
            fill2();
        },
        onEnterBack: function () {
            fill2();
        },
        onLeaveBack: function () {
            unfill2()
        }
    }
})

gsap.to(".scroller-3", {
    x: 700,
    scrollTrigger: {
        markers: false,
        trigger: ".scroller-3",
        start: "top 50.05%",
        end: "top -50%",
        scrub: true,
        onEnter: function () {
            page3enter();
            fill3();
        },
        onLeave: function () {
            page3enter();
            fill3();
        },
        onEnterBack: function () {
            page3enter();
            fill3();
        },
        onLeaveBack: function () {
            page3enter();
            unfill3();
        }
    }
})

gsap.to(".scroller-4", {
    x: 700,
    scrollTrigger: {
        markers: false,
        trigger: ".scroller-4",
        start: "top 50.05%",
        end: "top -50%",
        scrub: true,
        onEnter: function () {
            page4enter();
            fill4();
        },
        onLeave: function () {
            page4enter();
            fill4();
        },
        onEnterBack: function () {
            page4enter();
            fill4();
        },
        onLeaveBack: function () {
            page4enter();
            unfill4();
        }
    }
})

gsap.to(".scroller-5", {
    x: 700,
    scrollTrigger: {
        markers: false,
        trigger: ".scroller-5",
        start: "top 50.05%",
        end: "top -50%",
        scrub: true,
        onEnter: function () {
            page5enter();
            fill5();
        },
        onLeave: function () {
            page5enter();
            fill5();
        },
        onEnterBack: function () {
            page5enter();
            fill5();
        },
        onLeaveBack: function () {
            page5enter();
            unfill5();
        }
    }
})

gsap.to(".scroller-6", {
    x: 700,
    scrollTrigger: {
        markers: false,
        trigger: ".scroller-6",
        start: "top 50.05%",
        end: "top -50%",
        scrub: true,
        onEnter: function () {
            page6enter();
            fill6();
        },
        onLeave: function () {
            page6enter();
            fill6();
        },
        onEnterBack: function () {
            page6enter();
            fill6();
        },
        onLeaveBack: function () {
            page6enter();
            unfill6();
        }
    }
})

gsap.to(".scroller-7", {
    x: 700,
    scrollTrigger: {
        markers: false,
        trigger: ".scroller-7",
        start: "top 50.05%",
        end: "top -1%",
        scrub: true,
        onEnter: function () {
            page7enter();
            fill7();
        },
        onLeave: function () {
            page7enter();
            fill7();
        },
        onEnterBack: function () {
            page7enter();
            fill7();
        },
        onLeaveBack: function () {
            page7enter();
            unfill7();
        }
    }
})

function page1enter() {
    var var1 = document.querySelector('.page1');
    var computedStyle = window.getComputedStyle(var1);

    if (computedStyle.display === 'none') {
        var1.style.display = 'flex';
    } else {
        var1.style.display = 'none';
    }
}

function page2enter() {
    var var1 = document.querySelector('.page2');
    var computedStyle = window.getComputedStyle(var1);

    if (computedStyle.display === 'none') {
        var1.style.display = 'flex';
    } else {
        var1.style.display = 'none';
    }
}

function page3enter() {
    var var1 = document.querySelector('.page3');
    var computedStyle = window.getComputedStyle(var1);

    if (computedStyle.display === 'none') {
        var1.style.display = 'flex';
    } else {
        var1.style.display = 'none';
    }
}

function page4enter() {
    var var1 = document.querySelector('.page4');
    var computedStyle = window.getComputedStyle(var1);

    if (computedStyle.display === 'none') {
        var1.style.display = 'flex';
    } else {
        var1.style.display = 'none';
    }
}

function page5enter() {
    var var1 = document.querySelector('.page5');
    var computedStyle = window.getComputedStyle(var1);

    if (computedStyle.display === 'none') {
        var1.style.display = 'flex';
    } else {
        var1.style.display = 'none';
    }
}

function page6enter() {
    var var1 = document.querySelector('.page6');
    var computedStyle = window.getComputedStyle(var1);

    if (computedStyle.display === 'none') {
        var1.style.display = 'flex';
    } else {
        var1.style.display = 'none';
    }
}

function page7enter() {
    var var1 = document.querySelector('.page7');
    var computedStyle = window.getComputedStyle(var1);

    if (computedStyle.display === 'none') {
        var1.style.display = 'flex';
    } else {
        var1.style.display = 'none';
    }
}

/*Mobile View Port*/


function filldot1() {
    var var1 = document.querySelector('.dot1');
    var var2 = document.querySelector('.dot2');
    var var3 = document.querySelector('.dot3');
    var var4 = document.querySelector('.dot4');
    var var5 = document.querySelector('.dot5');
    var var6 = document.querySelector('.dot6');
    var var7 = document.querySelector('.dot7');
    var1.style.opacity = "1";
    var2.style.opacity = "0.4";
    var3.style.opacity = "0.4";
    var4.style.opacity = "0.4";
    var5.style.opacity = "0.4";
    var6.style.opacity = "0.4";
    var7.style.opacity = "0.4";
}

function filldot2() {
    var var1 = document.querySelector('.dot1');
    var var2 = document.querySelector('.dot2');
    var var3 = document.querySelector('.dot3');
    var var4 = document.querySelector('.dot4');
    var var5 = document.querySelector('.dot5');
    var var6 = document.querySelector('.dot6');
    var var7 = document.querySelector('.dot7');
    var1.style.opacity = "0.4";
    var2.style.opacity = "1";
    var3.style.opacity = "0.4";
    var4.style.opacity = "0.4";
    var5.style.opacity = "0.4";
    var6.style.opacity = "0.4";
    var7.style.opacity = "0.4";
}

function filldot3() {
    var var1 = document.querySelector('.dot1');
    var var2 = document.querySelector('.dot2');
    var var3 = document.querySelector('.dot3');
    var var4 = document.querySelector('.dot4');
    var var5 = document.querySelector('.dot5');
    var var6 = document.querySelector('.dot6');
    var var7 = document.querySelector('.dot7');
    var1.style.opacity = "0.4";
    var2.style.opacity = "0.4";
    var3.style.opacity = "1";
    var4.style.opacity = "0.4";
    var5.style.opacity = "0.4";
    var6.style.opacity = "0.4";
    var7.style.opacity = "0.4";
}

function filldot4() {
    var var1 = document.querySelector('.dot1');
    var var2 = document.querySelector('.dot2');
    var var3 = document.querySelector('.dot3');
    var var4 = document.querySelector('.dot4');
    var var5 = document.querySelector('.dot5');
    var var6 = document.querySelector('.dot6');
    var var7 = document.querySelector('.dot7');
    var1.style.opacity = "0.4";
    var2.style.opacity = "0.4";
    var3.style.opacity = "0.4";
    var4.style.opacity = "1";
    var5.style.opacity = "0.4";
    var6.style.opacity = "0.4";
    var7.style.opacity = "0.4";
}

function filldot5() {
    var var1 = document.querySelector('.dot1');
    var var2 = document.querySelector('.dot2');
    var var3 = document.querySelector('.dot3');
    var var4 = document.querySelector('.dot4');
    var var5 = document.querySelector('.dot5');
    var var6 = document.querySelector('.dot6');
    var var7 = document.querySelector('.dot7');
    var1.style.opacity = "0.4";
    var2.style.opacity = "0.4";
    var3.style.opacity = "0.4";
    var4.style.opacity = "0.4";
    var5.style.opacity = "1";
    var6.style.opacity = "0.4";
    var7.style.opacity = "0.4";
}

function filldot6() {
    var var1 = document.querySelector('.dot1');
    var var2 = document.querySelector('.dot2');
    var var3 = document.querySelector('.dot3');
    var var4 = document.querySelector('.dot4');
    var var5 = document.querySelector('.dot5');
    var var6 = document.querySelector('.dot6');
    var var7 = document.querySelector('.dot7');
    var1.style.opacity = "0.4";
    var2.style.opacity = "0.4";
    var3.style.opacity = "0.4";
    var4.style.opacity = "0.4";
    var5.style.opacity = "0.4";
    var6.style.opacity = "1";
    var7.style.opacity = "0.4";
}

function filldot7() {
    var var1 = document.querySelector('.dot1');
    var var2 = document.querySelector('.dot2');
    var var3 = document.querySelector('.dot3');
    var var4 = document.querySelector('.dot4');
    var var5 = document.querySelector('.dot5');
    var var6 = document.querySelector('.dot6');
    var var7 = document.querySelector('.dot7');
    var1.style.opacity = "0.4";
    var2.style.opacity = "0.4";
    var3.style.opacity = "0.4";
    var4.style.opacity = "0.4";
    var5.style.opacity = "0.4";
    var6.style.opacity = "0.4";
    var7.style.opacity = "1";
}