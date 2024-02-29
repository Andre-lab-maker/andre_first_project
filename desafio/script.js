// Get necessary elements
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const dots = document.querySelectorAll(".dot");
const carousel = document.querySelector(".carousel");
const carouselCards = document.querySelectorAll(".carousel__card");

let activeIndex = 0;

function getLocalStorageValues(){
      const el_headerText=document.getElementById("field_headerText");
      el_headerText.innerText = localStorage.getItem("backoffice_headerText");
      
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

// Function to handle the change event of the file input
function handleFileInputChange(event) {
  const fileList = event.target.files; // Get the list of selected files

  // Convert the FileList object to an array of file names
  const fileNames = Array.from(fileList).map(file => file.name);

  // Store the array of file names in localStorage
  localStorage.setItem("selected_files", JSON.stringify(fileNames));
}

// Get a reference to the file input element
const fileInput = document.getElementById('field_carouselImage');

// Add an event listener to the file input to listen for changes
fileInput.addEventListener('change', handleFileInputChange);

// Additional functions and code in the main JavaScript file
// Add your existing functions and code here...


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

function updateCarouselImage() {
  const carouselImages = document.querySelectorAll('.carousel__card img');
  const storedImage = localStorage.getItem("carouselImage");
  
  if (storedImage) {
    carouselImages.forEach(function(img) {
      img.src = storedImage;
    });
  }
}

// Initial update
updateCarouselImage();

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

// Function to toggle active class
function toggleActive(index) {
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