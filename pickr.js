
// Default color black
var rgbaColor = "rgb(0,0,0)";


// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});


pickr.on("change", (color, instance) => {
    rgbaColor = color.toRGBA().toString();
    console.log(rgbaColor);
});


window.addEventListener("load", () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    // Resizing
    canvas.height = window.innerHeight - 90;
    canvas.width = window.innerWidth - 34;

    // Variables
    let painting = false;

    function startPosition(e) {
        painting = true;
        // Enable user to draw a dot
        draw(e);
    }

    function endPosition() {
        painting = false;
        // Avoid auto connection when starting a new line
        ctx.beginPath();
    }

    function draw(e) {
        if(!painting) {
            return;
        }
        ctx.lineWidth = 5;
        ctx.strokeStyle = rgbaColor;
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    // EvenListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", draw);
});


// Resize feature for later version
window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}); 
