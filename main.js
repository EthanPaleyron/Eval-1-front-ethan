const plats = document.getElementById('plats');

const platsAjouter = [{
  imgSrc: "img/img-01.jpg",
  title: "titre du plat 1",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum rerum vel nihil provident quasi praesentium magnam omnis velit, quaerat consequatur ipsa doloribus reprehenderit veritatis, optio blanditiis ex libero aliquid iure?"
}, {
  imgSrc: "img/img-02.jpg",
  title: "titre du plat 2",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum rerum vel nihil provident quasi praesentium magnam omnis velit, quaerat consequatur ipsa doloribus reprehenderit veritatis, optio blanditiis ex libero aliquid iure?"
}, {
  imgSrc: "img/img-03.jpg",
  title: "titre du plat 3",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum rerum vel nihil provident quasi praesentium magnam omnis velit, quaerat consequatur ipsa doloribus reprehenderit veritatis, optio blanditiis ex libero aliquid iure?"
}, {
  imgSrc: "img/img-04.jpg",
  title: "titre du plat 4",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum rerum vel nihil provident quasi praesentium magnam omnis velit, quaerat consequatur ipsa doloribus reprehenderit veritatis, optio blanditiis ex libero aliquid iure?"
}, {
  imgSrc: "img/img-05.jpg",
  title: "titre du plat 5",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum rerum vel nihil provident quasi praesentium magnam omnis velit, quaerat consequatur ipsa doloribus reprehenderit veritatis, optio blanditiis ex libero aliquid iure?"
},];

for (let plat of platsAjouter) {
  plats.innerHTML = plats.innerHTML + `<article class="card-plat">
  <img src=${plat.imgSrc} alt="image d'un plat">
  <div class="card-content">
    <h3>${plat.title}</h3>
    <p>${plat.description}</p>
  </div>
  </article>`
}