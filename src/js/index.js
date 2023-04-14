import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin, DrawSVGPlugin, MotionPathPlugin);

gsap.set([".container", ".line-svg"], {
    autoAlpha: 1, // same as opacity: 1; visibility: visible; css properties
});

gsap.set([ // set() same as to() with duration: 0
    "#cc-shade-outside",
    "#cc-shade-inside",
    "#heart-fill-1",
    "#heart-fill-2",
    "#heart-fill-3",
    "#heart-fill-4",
    ".logo",
    "h1",
    "para",
], {
    autoAlpha: 0, // opacity: 0; visibility: hidden
});

const linesBase = gsap.utils.toArray("#base path");
const linesRunning = gsap.utils.toArray("#running path");
const texts = [".text-1", ".text-3", ".text-4", ".text-5"];


gsap.set([linesBase, linesRunning], {
    drawSVG: "0% 0%", // starting point
});

// fade in animation
gsap.set([".logo", "h1", ".para"], {
    y: 50,
});

gsap.to([".logo", "h1", ".para"], {
    autoAlpha: 1, y: 0, stagger: 0.1, duration: 1,
});

const draw = (el) => {
    const tl = gsap.timeline({ paused: true });
    tl.to(el, {
        drawSVG: true,
        duration: 0.5,
    })
        .to(`${el}-2`, {
            drawSVG: "50% 100%", // draw the running line from 50% to the end
            duration: 0.5,
        }, "<")
        .to(".line-circle", {
            duration: 0.5,
            motionPath: {
                path: el,
                align: el,
                alignOrigin: [0.5, 0.5],
                autoRotate: false,
            },
        }, "<")
        .set(`${el}-2`, {
            autoAlpha: 0,
        });
    return tl;
};

// coffee text
ScrollTrigger.create({
    trigger: "#base #line-1",
    scrub: true,
    start: () => "top+=10% center", // start at top of page
    end: "bottom 50%", // keep it centered (vertica) on scroll
    fastScrollEnd: true,
    animation: draw("#line-1"),
});
// coffee cup
ScrollTrigger.create({
    trigger: "#cc-shade-outside",
    scrub: true,
    start: "top-=50% 50%",
    end: "bottom center",
    fastScrollEnd: true,
    animation: gsap.to(["#cc-shade-outside", "#cc-shade-inside"], { autoAlpha: 1, stagger: 0.01, duration: 1 }),
});
ScrollTrigger.create({
    trigger: "#base #line-2",
    scrub: true,
    start: "top+=110 50%",
    end: "bottom center",
    fastScrollEnd: true,
    animation: draw("#line-2"),
});

ScrollTrigger.create({
    trigger: "#base #line-3",
    scrub: true,
    start: "top+=25% 50%",
    end: "bottom center",
    fastScrollEnd: true,
    animation: draw("#line-3"),
});

ScrollTrigger.create({
    trigger: "#base #line-4",
    scrub: true,
    start: "top+=48.5% 50%",
    end: "bottom center",
    fastScrollEnd: true,
    animation: draw("#line-4"),
});

ScrollTrigger.create({
    trigger: "#base #line-5",
    scrub: true,
    start: "top+=5% 50%",
    end: "bottom-=10% center",
    fastScrollEnd: true,
    animation: draw("#line-5"),
});

ScrollTrigger.create({
    trigger: "#heart-fill-1",
    scrub: true,
    start: "top+=68% 50%",
    end: "bottom center",
    fastScrollEnd: true,
    animation: gsap.to(["#heart-fill-1", "#heart-fill-2",
        "#heart-fill-3"], { autoAlpha: 1, stagger: 0.01, duration: 1 }),
});

ScrollTrigger.create({
    trigger: "#base #line-6",
    scrub: true,
    start: "top+=68% 50%",
    end: "bottom center",
    fastScrollEnd: true,
    animation: draw("#line-6"),
});

ScrollTrigger.create({
    trigger: "#base #line-7",
    scrub: true,
    start: "top+=12% 50%",
    end: "bottom center",
    fastScrollEnd: true,
    animation: draw("#line-7"),
});

ScrollTrigger.create({
    trigger: "#base #line-8",
    scrub: true,
    start: "top+=15% 50%",
    end: "bottom center",
    onEnter: () => gsap.to("#heart-fill-4", { autoAlpha: 1, duration: 1 }),
    fastScrollEnd: true,
    onEnterBack: () => gsap.to("#heart-fill-4", { autoAlpha: 0, duration: 2 }),
    animation: draw("#line-8"),
});

texts.forEach((pingroup) => {
    ScrollTrigger.create({
        trigger: pingroup,
        start: "center center",
        end: `+=${window.innerHeight / 2}`,
        pin: true,
    });
});

gsap.set(texts, {
    opacity: 0,
    y: 100,
});

const enterConfig = { y: 0, opacity: 1, duration: 0.4 };

texts.forEach((e) => {
    ScrollTrigger.create({
        trigger: e,
        start: "center 80%",
        end: "bottom 40%",
        onEnter: () => gsap.to(e, enterConfig),
        onEnterBack: () => gsap.to(e, enterConfig),
        onLeave: () => gsap.to(e, { y: -100, opacity: 0, duration: 0.4 }),
        onLeaveBack: () => gsap.to(e, { y: 100, opacity: 0, duration: 0.4 }),
    });
});
