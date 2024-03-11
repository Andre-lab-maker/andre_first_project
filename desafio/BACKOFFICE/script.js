// Função para lidar com a submissão do cabeçalho

function handleSubmitHeader() {
  const headerInput = document.getElementById("field_headerText").value;
  localStorage.setItem("backoffice_headerText", headerInput);
  
  // Atualizar o cabeçalho na página principal
  const mainHeaderText = document.getElementById("field_headerText");
  mainHeaderText.textContent = headerInput;
}

// Adicionar evento ao botão de envio
const submitHeaderButton = document.getElementById("submitHeader");
submitHeaderButton.addEventListener("click", handleSubmitHeader);



function getLocalStorageValues(){
  const headerInput = document.getElementById("field_headerText");
  headerInput.value = localStorage.getItem("backoffice_headerText");
}

getLocalStorageValues();



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
// JavaScript Backoffice

// Função para enviar as imagens do carrossel para o front-end

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

setLocalStorageWrappedTexts();
getLocalStorageValuesWrappedTexts();
updateLocalStorageWrappedTexts();

function setLocalStorageFirstParagraph() {
  const firstParagraphInput = document.getElementById('backoffice_first_paragraph');
  const firstParagraph = firstParagraphInput.value;
  localStorage.setItem("backoffice_firstParagraph", firstParagraph);
}
setLocalStorageFirstParagraph();
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
setLocalStorageSecondParagraph();
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
/*
function setCarouselImages(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    const thumbnail = document.createElement('img');
    thumbnail.src = e.target.result;
    thumbnail.style.width = '35px';
    thumbnail.style.height = '35px';
    const thumbnailsContainer = document.getElementById('thumbnails-container');
    thumbnailsContainer.appendChild(thumbnail);

    // Atualizar a contagem de thumbnails
    const thumbnailsCount = localStorage.getItem('thumbnailsCount') || 0;
    localStorage.setItem('thumbnailsCount', parseInt(thumbnailsCount) + 1);

    // Armazenar a imagem em locais específicos no localStorage
    const storedImageCount = parseInt(localStorage.getItem('storedImageCount')) || 0;
    localStorage.setItem(`carouselImage${storedImageCount + 1}`, e.target.result);
    localStorage.setItem('storedImageCount', storedImageCount + 1);

    // Se já armazenamos 3 imagens, resetamos o contador para 1
    if (storedImageCount + 1 === 3) {
      localStorage.setItem('storedImageCount', 0);
    }
  }
  reader.readAsDataURL(file);
}

function handleDelete() {
  const thumbnailsContainer = document.getElementById('thumbnails-container');
  thumbnailsContainer.innerHTML = ''; // Limpar contêiner de miniaturas
  
  // Remover imagens do localStorage
  for (let i = 1; i <= 3; i++) {
    localStorage.removeItem(`carouselImage${i}`);
  }
  
  // Resetar a contagem de thumbnails
  localStorage.setItem('thumbnailsCount', 0);

  // Resetar a contagem de imagens armazenadas
  localStorage.setItem('storedImageCount', 0);

  // Exibir o carrossel novamente
  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.style.display = 'block';
}

// Adicionar evento ao botão de exclusão
const deleteButton = document.querySelector('.delete-btn');
deleteButton.addEventListener('click', handleDelete);

*/
// Função para exibir imagem em tamanho completo
function showModal(imageSrc) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  modal.style.display = 'block';
  modalImg.src = imageSrc;

  // Adicionar evento de clique ao botão de fechar
  const closeButton = modal.querySelector('.close');
  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });
}

// Adicionar evento de clique a cada thumbnail
const thumbnailsContainer = document.getElementById('thumbnails-container');
thumbnailsContainer.addEventListener('click', function(event) {
  if (event.target.tagName === 'IMG') {
    const imageSrc = event.target.src;
    showModal(imageSrc);
  }
});

function setCarouselImages(event) {
  const file = event.target.files[0];
  
  // Verificar o tamanho do arquivo
  if (file.size > 300 * 1024) { // Convertendo para bytes
    alert("O tamanho do arquivo excede 300 kilobites. Por favor, escolha um arquivo menor.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const thumbnail = document.createElement('img');
    thumbnail.src = e.target.result;
    thumbnail.style.width = '35px';
    thumbnail.style.height = '35px';
    const thumbnailsContainer = document.getElementById('thumbnails-container');
    thumbnailsContainer.appendChild(thumbnail);

    // Adicionar o URL da imagem ao array no localStorage
    const thumbnailsArray = JSON.parse(localStorage.getItem('thumbnailsArray')) || [];
    thumbnailsArray.push(e.target.result);
    localStorage.setItem('thumbnailsArray', JSON.stringify(thumbnailsArray));

    // Atualizar as imagens no carrossel
    updateCarouselImages();
  }
  reader.readAsDataURL(file);
}

function handleDelete() {
  const thumbnailsContainer = document.getElementById('thumbnails-container');
  const thumbnails = thumbnailsContainer.querySelectorAll('img');

  // Verificar se há miniaturas para excluir
  if (thumbnails.length === 0) {
    return;
  }

  // Remover a última miniatura do contêiner
  const lastThumbnail = thumbnails[thumbnails.length - 1];
  thumbnailsContainer.removeChild(lastThumbnail);

  // Remover o último URL do array no localStorage
  const thumbnailsArray = JSON.parse(localStorage.getItem('thumbnailsArray')) || [];
  thumbnailsArray.pop();
  localStorage.setItem('thumbnailsArray', JSON.stringify(thumbnailsArray));

  // Atualizar as imagens no carrossel
  setCarouselImages();
}

// Adicionar evento ao botão de exclusão
const deleteButton = document.querySelector('.delete-btn');
deleteButton.addEventListener('click', handleDelete);

// Adicionar evento de clique ao botão de envio
const submitButton = document.getElementById('submitImages');
submitButton.addEventListener('click', setCarouselImages);

function setLeftImage() {
  const fileInput = document.getElementById('main_first_image');
  const uploadedImage = fileInput.files[0];

  const reader = new FileReader();
  reader.onload = function(event) {
    // Armazenar imagem no localStorage
    localStorage.setItem("leftImage", event.target.result);

    // Exibir a imagem no thumbnail
    const thumbnail = document.getElementById('leftThumbnail');
    thumbnail.style.backgroundImage = `url('${event.target.result}')`;
  };

  if (uploadedImage) {
    reader.readAsDataURL(uploadedImage);
  }
} 

document.getElementById('submitImages2').addEventListener('click', function() {
  setLeftImage();
});

function setRightImage() {
  const fileInput = document.getElementById('main_second_image');
  const uploadedImage = fileInput.files[0];

  const reader = new FileReader();
  reader.onload = function(event) {
    // Armazenar imagem no localStorage
    localStorage.setItem("rightImage", event.target.result);

    // Exibir a imagem no thumbnail
    const thumbnail = document.getElementById('rightThumbnail');
    thumbnail.style.backgroundImage = `url('${event.target.result}')`;
  };

  if (uploadedImage) {
    reader.readAsDataURL(uploadedImage);
  }
}

document.getElementById('submitImages3').addEventListener('click', function() {
  setRightImage();
});
// Add event listeners

document.querySelector('.header-setting button').addEventListener('click', handleSubmitHeader);
document.querySelector('.carousel-setting button').addEventListener('click', setCarouselName);
const fileInput1 = document.getElementById('field_carouselImage');
fileInput1.addEventListener('change', setCarouselImages);
document.querySelectorAll('.wrapped-texts-section .file-input').forEach(input => {
  input.addEventListener('change', setLocalStorageWrappedTexts);
});
document.querySelectorAll('.wrapped-texts-section .file-input').forEach(input => {
  input.addEventListener('change', setLocalStorageWrappedTexts);
});


