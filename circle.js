// 2D Rendering Experiment - Drawing Circles
// This is my first experiment with 2D canvas rendering

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw a simple circle
    function drawCircle(x, y, radius, color) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
    }
    
    // Draw multiple circles with different colors and sizes
    drawCircle(200, 150, 50, '#FF6B6B');
    drawCircle(400, 300, 80, '#4ECDC4');
    drawCircle(600, 200, 60, '#45B7D1');
    drawCircle(300, 400, 70, '#FFA07A');
    drawCircle(500, 450, 40, '#98D8C8');
    
    // Add some animation - a moving circle
    let x = 100;
    let y = 100;
    let dx = 2;
    let dy = 2;
    const radius = 30;
    
    function animate() {
        // Clear only the animated circle area (more efficient)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Redraw static circles
        drawCircle(200, 150, 50, '#FF6B6B');
        drawCircle(400, 300, 80, '#4ECDC4');
        drawCircle(600, 200, 60, '#45B7D1');
        drawCircle(300, 400, 70, '#FFA07A');
        drawCircle(500, 450, 40, '#98D8C8');
        
        // Draw animated circle
        drawCircle(x, y, radius, '#FFD93D');
        
        // Update position
        x += dx;
        y += dy;
        
        // Bounce off walls
        if (x + radius > canvas.width || x - radius < 0) {
            dx = -dx;
        }
        if (y + radius > canvas.height || y - radius < 0) {
            dy = -dy;
        }
        
        requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
});
