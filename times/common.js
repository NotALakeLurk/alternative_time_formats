window.addEventListener("message", (event) => {
    alert(event.data.color)
    // ctx.canvas.style.color = "yellow";
    // ctx.canvas.style.backgroundColor = "black";

    // style_query.removeEventListener("change", set_style);
})

const ctx = document.querySelector(".time-canvas").getContext("2d");

function set_style() {
    // get the style of the canvas and apply it to the time
    ctx.fillStyle = window.getComputedStyle(ctx.canvas).getPropertyValue("color").replace(/"/g, "");
    ctx.font = window.getComputedStyle(ctx.canvas).getPropertyValue("font").replace(/"/g, "");
}

function start(func) {
    set_style();
    // TODO: eventually set up a system for the widget user to customize the style of the canvas
    const style_query = window.matchMedia("(prefers-color-scheme: dark)");
    style_query.addEventListener("change", set_style);

    

    setInterval(() => {
        ctx.clearRect(0,0, ctx.canvas.width,ctx.canvas.height);
        ctx.fillText(func(new Date()), 0,15);
    }, 10);
}