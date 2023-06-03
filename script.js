document.addEventListener("DOMContentLoaded", function() {
  var memeForm = document.getElementById("meme-form");
  var listGallery = document.querySelector(".meme-gallery-container .gallery"); // Updated selector
  memeForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var memeli = document.createElement("li");
    memeli.classList.add("meme-gallery-item");
    var topText = document.getElementById("Upper-Text");
    var URLInput = document.getElementById("link-to-pic").value;
    var src = URLInput;
    var img = document.createElement("img");
    img.src = src;
    img.width = 500;
    var topTextDiv = document.createElement("div");
    topTextDiv.classList.add("text", "top");
    topTextDiv.innerText = topText.value;

    var bottomTextDiv = document.createElement("div");
    bottomTextDiv.classList.add("text", "bottom");
    bottomTextDiv.innerText = document.getElementById("Bottom-Text").value;
    var removeDiv = document.createElement("div");
    removeDiv.classList.add("Red-Cross");
    removeDiv.innerText = "X";
    removeDiv.style.color = "red";
    listGallery.appendChild(memeli);
    memeli.appendChild(img);
    memeli.appendChild(topTextDiv);
    memeli.appendChild(bottomTextDiv);
    memeli.appendChild(removeDiv);
    memeForm.reset();
  });

  function remove(event) {
    if (event.target.classList.contains("Red-Cross")) {
      event.target.parentNode.remove();
    }
  }
  listGallery.addEventListener("click", remove, false);
});
