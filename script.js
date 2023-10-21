var rate = 0;
var selectedButton = null;

var rateButtons = document.querySelectorAll('.rate-buttons button');

rateButtons.forEach(function(button, index) {
  button.addEventListener('click', function () {
    if (selectedButton) {
      selectedButton.classList.remove('selected');
      selectedButton.style.backgroundColor = ''; 
    }

    rate = index + 1;
    updateButtonStyles(button);
  });
});

function updateButtonStyles(clickedButton) {
  selectedButton = clickedButton;
  selectedButton.classList.add('selected');
  selectedButton.style.color = "white"
  selectedButton.style.backgroundColor = 'hsl(25, 97%, 53%)';
}

document.getElementById('submit-button').onclick = function () {
  document.querySelector('.rectangle-selected').style.display = 'flex';
  document.querySelector('.rectangle-initial').style.display = 'none';
  document.querySelector('.rate-msg').innerHTML = 'You selected ' + rate + ' out of 5';
};