
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulList = document.querySelector('.gallery');

function createLi(galleryItems) {
    for (let i = 0; i < galleryItems.length; i++ ) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const ahr = document.createElement('a')
        img.src = galleryItems[i].preview;
        img.alt = galleryItems[i].description;
        img.dataset.source = galleryItems[i].original;
        ahr.href = galleryItems[i].original;
        img.classList.add('gallery__image');
        ahr.classList.add('gallery__link');
        li.classList.add('gallery__item');
        li.appendChild(ahr);
        ahr.appendChild(img); 
        ulList.appendChild(li);

    }
}
createLi(galleryItems)

ulList.addEventListener("click", handleClick);

function handleClick(event) {
    event.preventDefault()
    if (event.target === event.currentTarget) {
        return;
    }
    
    const currentItem = event.target.closest(".gallery__item");
    const currentPhoto = galleryItems.find(item => item.original === currentItem.querySelector(".gallery__link").href);

    if (!currentPhoto) {
        return;
    }

    const instance = basicLightbox.create(`<img class="gallery__image" src="${currentPhoto.original}" alt="${currentPhoto.description}">`);
    instance.show();
    
}
