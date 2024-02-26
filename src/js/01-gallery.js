// Opisany w dokumentacji
import SimpleLightbox from "simplelightbox";
// Dodatkowy import stylów
import "simplelightbox/dist/simple-lightbox.min.css";

import {galleryItems} from "./gallery-items"

const gallery = document.querySelector(".gallery")
// const galleryArray = [];
// console.log(galleryItems)

//  galleryItems.map((el) => {
//     const galleryLink = document.createElement("li")
//     const galleryItem = document.createElement("a")
//     const galleryImage = document.createElement("img")

//     galleryLink.classList.add("gallery__link")
//     galleryItem.classList.add("gallery__item")
//     galleryImage.classList.add("gallery__image")

//     galleryItem.href = el.original

//     galleryImage.src = el.preview
//     galleryImage.alt = el.description

//     galleryItem.append(galleryImage)
//     galleryLink.append(galleryItem)
//     galleryArray.push(galleryLink)
    
// })
// console.log( "test" , galleryArray)
// gallery.append(...galleryArray)

const gallerList = galleryItems.map((el) => 
    `
    <li class="gallery__link">
        <a class="gallery__item" href="${el.original}">
            <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
        </a>
    </li>
    `
).join("")

gallery.insertAdjacentHTML("beforeend", gallerList)


new SimpleLightbox('.gallery a', { captionsData: "alt" ,captionDelay: 500 });