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
       
        li.appendChild(img); 
        li.append(ahr);
        ulList.appendChild(li);  
    }
}
createLi(galleryItems)
const liCheck = document.querySelector('.gallery__item');
console.log(liCheck)