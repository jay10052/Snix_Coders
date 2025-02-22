let search = document.querySelector('.search-box');
document.querySelector("#search-icon").onclick = ()=>{
    search.classList.toggle("active");
}

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", function () {
    if (navbar.style.clipPath === "circle(144% at 0% 0%)") {
        navbar.style.clipPath = "circle(0% at 0% 0%)"; // Hide menu
    } else {
        navbar.style.clipPath = "circle(144% at 0% 0%)"; // Show menu
    }
});

//header
let header = document.querySelector('header');
window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow',window.scrollY>0);
});


function showCar(imageSrc) {
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("carModal").style.display = "flex";
}

function closeCar() {
    document.getElementById("carModal").style.display = "none";
}

function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

document.getElementById('globalSearchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
  
    const globalMap = {
      // Cars
      'porsche 911 carrera 4': { url: 'cars.html', anchor: 'porsche-911' },
      'tesla model-1': { url: 'cars.html', anchor: 'tesla-model1' },
      'bugatti chiron': { url: 'cars.html', anchor: 'bugatti-chiron' },
      'ferrari sp90': { url: 'cars.html', anchor: 'ferrari-sp90' },
      'koenigsegg cc850': { url: 'cars.html', anchor: 'koenigsegg-cc850' },
      'mclaren 7508': { url: 'cars.html', anchor: 'mclaren-7508' },
  
      // Parts
      'auto spare parts': { url: 'parts.html', anchor: 'parts-section' }
    };
  
    const matchedItem = globalMap[searchTerm];
    
    if (matchedItem) {
      window.location.href = ${matchedItem.url}#${matchedItem.anchor};
    } else {
      alert('Item not found! Examples: "Porsche 911 Carrera 4", "Auto Spare Parts"');
    }
  });
