// Темен бутон и форма (ако вече са ти сложени)
document.getElementById('toggle-theme').addEventListener('click', function () {
  document.body.classList.toggle('dark');
  this.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Благодарим! Съобщението беше изпратено.");
  this.reset();
});

// 📸 Двойно щракване върху снимка
document.querySelectorAll('.gallery img').forEach(function(img) {
  img.addEventListener('dblclick', function() {
    window.open(img.src, '_blank');
  });
});


