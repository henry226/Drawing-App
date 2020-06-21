// window.addEventListener("load", () => {
//     const canvas = document.querySelector("canvas");
//     const ctx = canvas.getContext("2d");

//     // Resizing
//     canvas.height = window.innerHeight - 90;
//     canvas.width = window.innerWidth - 34;

//     // Variables
//     let painting = false;

//     function startPosition(e) {
//         painting = true;
//         // Enable user to draw a dot
//         draw(e);
//     }

//     function endPosition() {
//         painting = false;
//         // Avoid auto connection when starting a new line
//         ctx.beginPath();
//     }

//     function draw(e) {
//         if(!painting) {
//             return;
//         }
//         ctx.lineWidth = 5;
//         //ctx.strokeStyle = "red";
//         ctx.lineCap = "round";
//         ctx.lineTo(e.clientX, e.clientY);
//         ctx.stroke();
//         ctx.beginPath();
//         ctx.moveTo(e.clientX, e.clientY);
//     }

//     // EvenListeners
//     canvas.addEventListener("mousedown", startPosition);
//     canvas.addEventListener("mouseup", endPosition);
//     canvas.addEventListener("mousemove", draw);
// });



// // Resize feature for later version
// window.addEventListener("resize", () => {
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
// }); 
