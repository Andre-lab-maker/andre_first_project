// Get necessary elements
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const dots = document.querySelectorAll(".dot");
const carousel = document.querySelector(".carousel");
const carouselCards = document.querySelectorAll(".carousel__card");

let activeIndex = 0;

// Function to toggle active class
/*function toggleActive(index) {
  carouselCards.forEach((card, i) => {
    if (i === index) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });

  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Function to show next slide
function showNext() {
  activeIndex = (activeIndex + 1) % carouselCards.length;
  moveCarousel();
}

// Function to show previous slide
function showPrev() {
  activeIndex = (activeIndex - 1 + carouselCards.length) % carouselCards.length;
  moveCarousel();
}

// Function to show slide by dot click
function showSlide(index) {
  activeIndex = index;
  moveCarousel();
}

// Function to move the carousel
function moveCarousel() {
  const cardWidth = carouselCards[0].offsetWidth; // Adjusted for padding
  carousel.style.transform = `translateX(-${activeIndex * cardWidth}px)`;
  toggleActive(activeIndex);
}

// Event listeners
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});
*/
function getLocalStorageValues(){
  const headerInput = document.getElementById("field_headerText");
  headerInput.textContent = localStorage.getItem("backoffice_headerText");
}

getLocalStorageValues();


function getLocalStorageValuesCarousel(){
  const el_carouselName = document.getElementById("field_carouselName");
  el_carouselName.innerText = localStorage.getItem("backoffice_carouselName");
}

// Function to update local storage when input changes
// Function to update local storage when input changes
function updateLocalStorageCarouselName() {
  const el_carouselName = document.getElementById("field_carouselName");
  el_carouselName.addEventListener('input', function() {
    localStorage.setItem("backoffice_carouselName", this.innerText);
  });
}


getLocalStorageValuesCarousel();
updateLocalStorageCarouselName();


function getLocalStorageValuesWrappedTexts(){
  const el_wrappedTexts = document.getElementById("field_wrappedTexts");
  el_wrappedTexts.innerText = localStorage.getItem("backoffice_wrappedTexts");
}

function updateLocalStorageWrappedTexts(){
  const el_wrappedTexts = document.getElementById("field_wrappedTexts");
  el_wrappedTexts.addEventListener('input', function() {
    localStorage.setItem("backoffice_wrappedTexts", this.innerText);
  });
}

getLocalStorageValuesWrappedTexts();
updateLocalStorageWrappedTexts();

function getLocalStorageValuesFirstParagraph() {
  const el_firstParagraph = document.getElementById("main_first_paragraph");
  el_firstParagraph.textContent = localStorage.getItem("backoffice_firstParagraph");
}

getLocalStorageValuesFirstParagraph();

function getLocalStorageValuesSecondParagraph() {
  const el_secondParagraph = document.getElementById("main_second_paragraph");
  el_secondParagraph.textContent = localStorage.getItem("backoffice_secondParagraph");
}

getLocalStorageValuesSecondParagraph();
/*
function updateCarouselImages() { 
  const carouselImages = document.querySelectorAll('.carousel__card img');
  
  for (let i = 1; i <= carouselImages.length; i++) {
    const storedImage = localStorage.getItem(`carouselImage${i}`);
    if (storedImage) {
      carouselImages[i - 1].src = storedImage;
    }
  }
}

window.addEventListener('load', updateCarouselImages);
*/
function updateCarouselImages() { 
  const thumbnailsArray = JSON.parse(localStorage.getItem('thumbnailsArray')) || [];
  const mainCarousel = document.querySelector('.carousel-wrapper');

  if (thumbnailsArray.length < 3) {
    mainCarousel.style.display = 'none';
  } else {
    mainCarousel.style.display = 'block';

    const carouselImages = document.querySelectorAll('.carousel__card img');
    for (let i = 0; i < 3; i++) {
      if (thumbnailsArray[i]) {
        carouselImages[i].src = thumbnailsArray[i];
      }
    }
  }
}

window.addEventListener('load', updateCarouselImages);

window.onload = function() {
  // Limpar o localStorage
  localStorage.clear();

  // Exibir o conteúdo original
  const originalHTML = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carousel with Centered Image</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    
      
  </head>
  
  <body>
  
    <h1 id="field_headerText">This is the Header</h1>
  
    <div class="top-content">
      <h2 id="field_carouselName" style="margin-bottom: -25px;">Name of the Carousel</h2>
  
      <div class="carousel-wrapper" style="margin-bottom: 350px;">
        <div class="carousel-container">
          <div class="carousel">
            <div class="carousel__card active">
              <div>
                <img class="carouselImage1" src="gatinho_fofo.jpg" alt="gato" style="width: 300px; height: 200px;">
              </div>
            </div>
            <div class="carousel__card">
              <div>
                <img class="carouselImage2" src="gatinho_fofo.jpg" alt="gato" style="width: 300px; height: 200px;">
              </div>
            </div>
            <div class="carousel__card">
              <div>
                <img class="carouselImage3" src="gatinho_fofo.jpg" alt="gato" style="width: 300px; height: 200px;">
              </div>
            </div>
          </div>
          <div class="carousel__dots">
            <ul id="dotList">
              <li class="dot active"></li>
              <li class="dot"></li>
              <li class="dot"></li>
            </ul>
          </div>
          <div id="prev" class="carousel__button--prev"></div>
          <div id="next" class="carousel__button--next"></div>
        </div>
      </div>
  
  
  
      <div class="wrapped_texts">
        <h2 id="field_wrappedTexts" class="third_title">Wrapped Texts</h2>
        <div class="wrapped_left">
          <img id="main_first_image" class="first_image" src="gatinho_fofo.jpg" alt="gatinho_fofo" style="width: 400px; height: 250px;">
          <p id="main_first_paragraph" class="first_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minima dolores asperiores
            dolore, perferendis
            consequatur,
            deleniti assumenda quod explicabo vitae minus delectus ipsum dolorem distinctio. Quia placeat explicabo
            atque
            nisi,
            est cupiditate rerum accusantium molestiae quae accusamus harum nesciunt pariatur sunt maiores vitae saepe
            adipisci
            reiciendis, quas deserunt maxime molestias? Iure nostrum unde reprehenderit tenetur cum totam porro.
            Veritatis,
            porro. Provident magni tempore cum et sint dolore officiis odio nam delectus, alias maiores quod culpa
            repellat
            ipsa
            tempora sit vero nobis eius fugiat aliquam? Ratione eveniet asperiores illo vel iste quas molestiae a
            optio
            reprehenderit, ad aliquid facilis laboriosam. Aperiam facilis eum sit tempore eius deleniti labore error
            deserunt
            corporis cupiditate nisi debitis provident impedit minus placeat, explicabo rem consequatur. Assumenda saepe
            numquam
            dolores, nam accusantium in perspiciatis, itaque et dolor magni eius, quaerat quibusdam alias quis corrupti
            quam?
            Possimus consequatur dicta est fugiat veniam molestias!
          </p>
        </div>
        <div class="wrapped_right">
          <img id="main_second_image" class="second_image" src="gatinho_fofo.jpg" alt="gatinho_fofo" style="width: 400px; height: 200px;">
          <p id="main_second_paragraph" class="second_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolores asperiores
            dolore, perferendis
            consequatur,
            deleniti assumenda quod explicabo vitae minus delectus ipsum dolorem distinctio. Quia placeat explicabo
            atque
            nisi,
            est cupiditate rerum accusantium molestiae quae accusamus harum nesciunt pariatur sunt maiores vitae saepe
            adipisci
            reiciendis, quas deserunt maxime molestias? Iure nostrum unde reprehenderit tenetur cum totam porro.
            Veritatis,
            porro. Provident magni tempore cum et sint dolore officiis odio nam delectus, alias maiores quod culpa
            repellat
            ipsa
            tempora sit vero nobis eius fugiat aliquam? Ratione eveniet asperiores illo vel iste quas molestiae a
            optio
            reprehenderit, ad aliquid facilis laboriosam. Aperiam facilis eum sit tempore eius deleniti labore error
            deserunt
            corporis cupiditate nisi debitis provident impedit minus placeat, explicabo rem consequatur. Assumenda saepe
            numquam
            dolores, nam accusantium in perspiciatis, itaque et dolor magni eius, quaerat quibusdam alias quis corrupti
            quam?
            Possimus consequatur dicta est fugiat veniam molestias!</p>
        </div>
      </div>
  
      <script src="main.js">
      </script>
  </body>
  
  </html>;`

  document.body.innerHTML = originalHTML;

  // Restaurar as funções de evento
  const deleteButton = document.querySelector('.delete-btn');
  const submitButton = document.getElementById('submitImages');
  deleteButton.addEventListener('click', handleDelete);
  submitButton.addEventListener('click', setCarouselImages);

}





















function updateLeftImage() {
  const leftImage = document.querySelector('.first_image');
  const storedImage = localStorage.getItem("leftImage");
  
  if (storedImage) {
    leftImage.src = storedImage;
  }
}

// Initial update
updateLeftImage();

function updateRightImage() {
  const mainImage = document.querySelector('.second_image');
  const storedImage = localStorage.getItem("rightImage");

  if (storedImage) {
    mainImage.src = storedImage;
  }
}

// Call the function to update the main image
updateRightImage();
