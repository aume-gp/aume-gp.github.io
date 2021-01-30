window.addEventListener('mousemove', function (e) {
    document.getElementById('x-value').textContent = e.x + ",00";
    document.getElementById('y-value').textContent = e.y + ",00";
  });