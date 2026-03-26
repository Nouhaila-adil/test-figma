document.getElementById('close-btn').addEventListener('click', function () {
  document.getElementById('overlay').style.display = 'none';
});

document.getElementById('overlay').addEventListener('click', function (e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
});


document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.getElementById('overlay').style.display = 'none';
  }
});
