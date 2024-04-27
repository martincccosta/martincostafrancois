import img1 from '../assets/galleries/1.JPEG';
import img2 from '../assets/galleries/2.JPEG';
import img3 from '../assets/galleries/3.JPEG';
import img4 from '../assets/galleries/4.JPEG';
import img5 from '../assets/galleries/5.JPEG';
import img6 from '../assets/galleries/6.JPEG';

let imageNew = [img1, img2, img3, img4, img5, img6];

function getRandomImage() {
    let processRandom = Math.floor(Math.random() * 6);
    return imageNew[getRandomImage];
}

function displayRandomImage() {
    let randomImage = getRandomImage();
    document.getElementById('imageTag').src = imageNew;
}

document.getElementById('linkImage').onclick = displayRandomImage();


