const canvas = document.getElementById("fondo");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fragmentos de código que aparecerán como figuras
const codeSnippets = [
    "const x = 10;",
    "let y = x * 2;",
    "console.log('Hola Mundo');",
    "function sumar(a, b) { return a + b; }",
    "class Persona { constructor(nombre) { this.nombre = nombre; } }",
    "if (a > b) { console.log(a); }",
    "while (true) { break; }",
];

// Clase para los fragmentos de código en movimiento
class Code {
    constructor(x, y, dx, dy, text, fontSize) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.text = text;
        this.fontSize = fontSize;
    }

    draw() {
        ctx.font = `${this.fontSize}px Consolas`;
        ctx.fillStyle = "rgba(0, 255, 0, 0.8)";
        ctx.fillText(this.text, this.x, this.y);
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;

        // Rebote en los bordes
        if (this.x + ctx.measureText(this.text).width > canvas.width || this.x < 0) {
            this.dx = -this.dx;
        }
        if (this.y > canvas.height || this.y - this.fontSize < 0) {
            this.dy = -this.dy;
        }

        this.draw();
    }
}

// Array para almacenar las figuras en movimiento
const codes = [];

// Inicializar las figuras
function init() {
    codes.length = 0;
    for (let i = 0; i < 20; i++) {
        const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        const fontSize = Math.random() * 20 + 10;
        const x = Math.random() * (canvas.width - 200);
        const y = Math.random() * (canvas.height - 100);
        const dx = (Math.random() - 0.5) * 4;
        const dy = (Math.random() - 0.5) * 4;
        codes.push(new Code(x, y, dx, dy, text, fontSize));
    }
}

// Animar las figuras
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    codes.forEach(code => code.update());
    requestAnimationFrame(animate);
}

// Ajustar el tamaño del canvas al cambiar el tamaño de la ventana
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

// Inicializar y ejecutar la animación
init();
animate();

// Certificado

document.querySelectorAll(".certificado").forEach(button => {
    button.addEventListener("click", () => {
        const link = button.getAttribute("data-link");
        if (link) {
            window.open(link, "_blank");
        } 
    });
});
