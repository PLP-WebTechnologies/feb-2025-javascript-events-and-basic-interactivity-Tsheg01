// Button click changes text and color
document.getElementById('changeTextBtn').addEventListener('click', () => {
    const header = document.getElementById('header');
    header.textContent = 'You clicked the button!';
    header.style.color = 'green';
  });
  
  // Keypress detection
  document.addEventListener('keydown', (e) => {
    document.getElementById('keypressDisplay').textContent = `Key pressed: ${e.key}`;
  });
  
  // Double-click or long press secret action
  let pressTimer;
  const secret = document.getElementById('secretAction');
  
  secret.addEventListener('dblclick', () => {
    alert('🎉 Double-click secret unlocked!');
  });
  
  secret.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
      alert('⏳ Long press secret activated!');
    }, 1000);
  });
  secret.addEventListener('mouseup', () => clearTimeout(pressTimer));
  
  // Image gallery
  let currentImage = 1;
  document.getElementById('nextImageBtn').addEventListener('click', () => {
    currentImage = (currentImage % 3) + 1;
    document.getElementById('galleryImage').src = `https://via.placeholder.com/300x200?text=Image+${currentImage}`;
  });
  
  // Tabs
  function openTab(evt, tabId) {
    const contents = document.querySelectorAll('.tabContent');
    contents.forEach((tab) => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
  }
  
  // Real-time password validation
  document.getElementById('password').addEventListener('input', function () {
    const feedback = document.getElementById('feedback');
    if (this.value.length < 8) {
      feedback.textContent = 'Password must be at least 8 characters.';
    } else {
      feedback.textContent = '';
    }
  });
  
  // Form validation
  document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Invalid email format.');
      return;
    }
    if (password.length < 8) {
      alert('Password must be at least 8 characters.');
      return;
    }
  
    alert('Form submitted successfully!');
  });
  