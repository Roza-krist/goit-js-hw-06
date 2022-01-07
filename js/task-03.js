const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");
const galleryMarkup = images.map(({ url, alt }) => {
  return `<li class="gallery-item">
  <img src = "${url}",alt = "${alt}",width = "100", height = "100"/>
  </li>`;
});
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
// const makeGalleryItem = (items) => {
//   return items.map((item) => {
//     const galleryItem = document.createElement("li");
//     const galleryItemImg = document.createElement("img");
//     galleryItem.append(galleryItemImg);
//     galleryItemImg.src = item.url;
//     galleryItemImg.alt = item.alt;
//     galleryItemImg.width = 100;
//     galleryItemImg.height = 100;
//     return galleryItem;
//   });
// };
// const galleryEl = makeGalleryItem(images);
// const galleryWithImages = galleryList.append(...galleryEl);
// galleryList.insertAdjacentHTML("beforeend", galleryEl);
