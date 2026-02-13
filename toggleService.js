function toggleService(id) {
  const detail = document.getElementById(id);
  const btn = event.target;
  
  detail.classList.toggle('active');
  
  if (detail.classList.contains('active')) {
    btn.innerText = "Show Less";
  } else {
    btn.innerText = "Discover More";
  }
}