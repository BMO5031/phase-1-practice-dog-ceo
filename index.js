// index.js

document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const imageContainer = document.getElementById("image-container");
  
    fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => {
        const images = data.message;
        images.forEach((imageUrl) => {
          const imageElement = document.createElement("img");
          imageElement.src = imageUrl;
          imageContainer.appendChild(imageElement);
        });
      })
      .catch((error) => {
        console.log("Error fetching images:", error);
      });
  });

// index.js

document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const imageContainer = document.getElementById("image-container");
  
    fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => {
        const images = data.message;
        images.forEach((imageUrl) => {
          const imageElement = document.createElement("img");
          imageElement.src = imageUrl;
          imageContainer.appendChild(imageElement);
        });
      })
      .catch((error) => {
        console.log("Error fetching images:", error);
      });
  
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedList = document.getElementById("breed-list");
  
    fetch(breedUrl)
      .then((response) => response.json())
      .then((data) => {
        const breeds = data.message;
        for (const breed in breeds) {
          const breedItem = document.createElement("li");
          breedItem.textContent = breed;
          breedList.appendChild(breedItem);
        }
      })
      .catch((error) => {
        console.log("Error fetching breeds:", error);
      });
  });

// index.js

document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const imageContainer = document.getElementById("image-container");
  
    fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => {
        const images = data.message;
        images.forEach((imageUrl) => {
          const imageElement = document.createElement("img");
          imageElement.src = imageUrl;
          imageContainer.appendChild(imageElement);
        });
      })
      .catch((error) => {
        console.log("Error fetching images:", error);
      });
  
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedList = document.getElementById("breed-list");
  
    fetch(breedUrl)
      .then((response) => response.json())
      .then((data) => {
        const breeds = data.message;
        for (const breed in breeds) {
          const breedItem = document.createElement("li");
          breedItem.textContent = breed;
          breedItem.addEventListener("click", () => {
            breedItem.style.color = "red";
          });
          breedList.appendChild(breedItem);
        }
      })
      .catch((error) => {
        console.log("Error fetching breeds:", error);
      });
  });

// index.js

document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const imageContainer = document.getElementById("image-container");
  
    fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => {
        const images = data.message;
        images.forEach((imageUrl) => {
          const imageElement = document.createElement("img");
          imageElement.src = imageUrl;
          imageContainer.appendChild(imageElement);
        });
      })
      .catch((error) => {
        console.log("Error fetching images:", error);
      });
  
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedList = document.getElementById("breed-list");
    const breedFilter = document.getElementById("breed-filter");
  
    fetch(breedUrl)
      .then((response) => response.json())
      .then((data) => {
        const breeds = data.message;
        for (const breed in breeds) {
          const breedItem = document.createElement("li");
          breedItem.textContent = breed;
          breedItem.addEventListener("click", () => {
            breedItem.style.color = "red";
          });
          breedList.appendChild(breedItem);
        }
      })
      .catch((error) => {
        console.log("Error fetching breeds:", error);
      });
  
    breedFilter.addEventListener("change", () => {
      const selectedLetter = breedFilter.value;
      const breedItems = breedList.getElementsByTagName("li");
  
      for (let i = 0; i < breedItems.length; i++) {
        const breedItem = breedItems[i];
        const breedName = breedItem.textContent;
  
        if (breedName.startsWith(selectedLetter)) {
          breedItem.style.display = "list-item";
        } else {
          breedItem.style.display = "none";
        }
      }
    });
  });