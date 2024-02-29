// Function to handle setting the header
function setHeader() {
  const headerInput = document.querySelector('.header-input');
  const headerText = headerInput.value;
  // Code to save the header text to the database or perform other actions
  localStorage.setItem("backoffice_headerText", headerText);
  
}

function setCarouselName() {
  const carouselNameInput = document.querySelector('.carousel-name-input');
  const carouselName = carouselNameInput.value;
  // Code to save the carousel name to the database or perform other actions
  localStorage.setItem("backoffice_carouselName", carouselName);
}

function getLocalStorageValues(){
  const el_headerText = document.getElementById("field_headerText");
  el_headerText.value = localStorage.getItem("backoffice_headerText");
}
getLocalStorageValues();

function getLocalStorageValuesCarousel(){
  const el_carouselName = document.getElementById("field_carouselName");
  el_carouselName.innerText = localStorage.getItem("backoffice_carouselName");
}

// Function to update local storage when carousel name changes
function updateLocalStorageCarouselName() {
  const el_carouselName = document.getElementById("field_carouselName");
  el_carouselName.addEventListener('input', function() {
    localStorage.setItem("backoffice_carouselName", this.innerText);
  });
}



// Initialize functions
getLocalStorageValuesCarousel();
updateLocalStorageCarouselName();

// Function to handle the change event of the file input
function handleFileInputChange(event) {
  const fileList = event.target.files; // Get the list of selected files

  // Get a reference to the carousel images container
  const carouselImages = document.querySelectorAll('.carousel img');

  // Loop through the selected files and update the corresponding carousel image sources
  fileList.forEach((file, index) => {
    if (carouselImages[index]) {
      const reader = new FileReader(); // FileReader to read file content

      // Define onload function for the reader
      reader.onload = function(event) {
        carouselImages[index].src = event.target.result; // Update image source with the file content
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  });
}

// Get a reference to the file input element
const fileInput = document.getElementById('field_carouselImage');

// Add an event listener to the file input to listen for changes
fileInput.addEventListener('change', handleFileInputChange);



function setLocalStorageWrappedTexts(){
  const wrappedtextsInput = document.getElementById('field_wrappedTexts');
  const wrappedTexts = wrappedtextsInput.value;
  localStorage.setItem("backoffice_wrappedTexts", wrappedTexts);
}

function getLocalStorageValuesWrappedTexts(){
  const el_wrappedTexts = document.getElementById("field_wrappedTexts");
  el_wrappedTexts.value = localStorage.getItem("backoffice_wrappedTexts");
}

function updateLocalStorageWrappedTexts(){
  const el_wrappedTexts = document.getElementById("field_wrappedTexts");
  el_wrappedTexts.addEventListener('input', function() {
    localStorage.setItem("backoffice_wrappedTexts", this.value);
  });
}

getLocalStorageValuesWrappedTexts();
updateLocalStorageWrappedTexts();

function setLocalStorageFirstParagraph() {
  const firstParagraphInput = document.getElementById('backoffice_first_paragraph');
  const firstParagraph = firstParagraphInput.value;
  localStorage.setItem("backoffice_firstParagraph", firstParagraph);
}

function updateLocalStorageFirstParagraph() {
  const el_firstParagraph = document.getElementById("backoffice_first_paragraph");
  
  el_firstParagraph.addEventListener('input', function () {
    localStorage.setItem("backoffice_firstParagraph", this.value);
    
    // Update the main paragraph with the new value
    const main_firstParagraph = document.getElementById("main_first_paragraph");
    main_firstParagraph.textContent = this.value;
  });
}

updateLocalStorageFirstParagraph();

function setLocalStorageSecondParagraph() {
  const secondParagraphInput = document.getElementById('backoffice_second_paragraph');
  const secondParagraph = secondParagraphInput.value;
  localStorage.setItem("backoffice_secondParagraph", secondParagraph);
}

function updateLocalStorageSecondParagraph() {
  const el_secondParagraph = document.getElementById("backoffice_second_paragraph");
  
  el_secondParagraph.addEventListener('input', function () {
    localStorage.setItem("backoffice_secondParagraph", this.value);
    
    // Update the main paragraph with the new value
    const main_secondParagraph = document.getElementById("main_second_paragraph");
    main_secondParagraph.textContent = this.value;
  });
}

updateLocalStorageSecondParagraph();

function setCarouselImages() {
  const fileInput = document.getElementById('field_carouselImage');
  const uploadedImages = fileInput.files;

  const reader = new FileReader();
  reader.onload = function(event) {
    localStorage.setItem("carouselImage", event.target.result);
  };

  // Assuming only one file is selected for simplicity
  if (uploadedImages.length > 0) {
    reader.readAsDataURL(uploadedImages[0]);
  }
}

document.getElementById('submitImages').addEventListener('click', function() {
  setCarouselImages();
});

function setLeftImage() {
  const fileInput = document.getElementById('main_first_image');
  const uploadedImage = fileInput.files[0];

  const reader = new FileReader();
  reader.onload = function(event) {
    localStorage.setItem("leftImage", event.target.result);
  };

  if (uploadedImage) {
    reader.readAsDataURL(uploadedImage);
  }
}

document.getElementById('submitImages2').addEventListener('click', function() {
  setLeftImage();
});

function setRightImage() {
  const fileInput = document.querySelector('.right-image .file-input');
  const uploadedImage = fileInput.files[0];

  const reader = new FileReader();
  reader.onload = function(event) {
    localStorage.setItem("rightImage", event.target.result);
  };

  reader.readAsDataURL(uploadedImage);
}

document.getElementById('submitImages3').addEventListener('click', function() {
  setRightImage();
});

// Add event listeners
document.querySelector('.header-setting button').addEventListener('click', setHeader);
document.querySelector('.carousel-setting button').addEventListener('click', setCarouselName);
document.querySelector('.carousel-setting .file-input').addEventListener('change', uploadCarouselImages);
document.querySelectorAll('.wrapped-texts-section .file-input').forEach(input => {
  input.addEventListener('change', uploadWrappedTextsImages);
});
document.querySelectorAll('.wrapped-texts-section button[type="submit"]').forEach(button => {
  button.addEventListener('click', submitWrappedTexts);
});