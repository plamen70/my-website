document.getElementById('toggle-theme').addEventListener('click', function () {
  document.body.classList.toggle('dark');
  this.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Благодарим! Съобщението беше изпратено.");
  this.reset();
});

