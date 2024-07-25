let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}
window.onload = fadeOut();

//popup


// function showPopup() {
//   document.getElementById('popupOverlay').style.display = 'flex';
// }

// function hidePopup() {
//   document.getElementById('popupOverlay').style.display = 'none';
// }



// for rating

document.getElementById('writeReviewBtn').addEventListener('click', function() {
  document.getElementById('reviewForm').classList.remove('flex');
});

var stars = document.getElementsByClassName('star1');
for (var i = 0; i < stars.length; i++) {
  stars[i].addEventListener('click', function() {
    var rating = this.getAttribute('data-rating');
    for (var j = 0; j < stars.length; j++) {
      if (j < rating) {
        stars[j].classList.add('selected');
      } else {
        stars[j].classList.remove('selected');
      }
    }
  });
}

document.getElementById('submitReviewBtn').addEventListener('click', function() {
  var rating = document.getElementsByClassName('selected').length;
  var reviewText = document.getElementById('reviewText').value;
  
  // Perform any necessary processing or submission of the review here
  
  console.log('Rating:', rating);
  console.log('Review Text:', reviewText);
  
  // Reset the form
  document.getElementById('reviewForm').classList.add('flex');
  document.getElementById('reviewText').value = '';
  for (var i = 0; i < stars.length; i++) {
    stars[i].classList.remove('selected');
  }
});