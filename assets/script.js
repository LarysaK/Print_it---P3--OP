class Slideshow {
	constructor() {
	this.Dots = document.querySelector('.dots');
	this.Arrow = document.querySelectorAll('.arrow');
	this.BannerImg = document.querySelector('.banner-img');
	this.ImgBasePath = './assets/images/slideshow/';
	this.BannerTxt = document.querySelector('#banner').querySelector('p');
	this.Left = 'arrow_left';
	this.Right = 'arrow_right';
	this.CurrentPosition = 0;
	this.SlidesList = [
		{
		image: 'slide1.jpg',
		tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
		},
		{
		image: 'slide2.jpg',
		tagLine: 'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
		},
		{
		image: 'slide3.jpg',
		tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
		},
		{
		image: 'slide4.png',
		tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
		},
	];
	}

	init() {
		this.addArrowEventListeners();
		this.addDotEventListeners();
	}
	
	addArrowEventListeners() {
		this.Arrow.forEach((arrow) => {
		arrow.addEventListener('click', (e) => {
			const direction = e.currentTarget.classList.contains(this.Left) ? -1 : 1;
			this.moveSlide(direction);
		});
		});
	}
	
	addDotEventListeners() {
		this.Dots.children.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			this.setCurrentDot(index);
			this.updateContent(index);
		});
		});
	}
	
	moveSlide(direction) {
		this.CurrentPosition = (this.CurrentPosition + direction + this.SlidesList.length) % this.SlidesList.length;
		this.setCurrentDot(this.CurrentPosition);
		this.updateContent(this.CurrentPosition);
	}
	
	setCurrentDot(index) {
		this.Dots.querySelector('.dot_selected').classList.remove('dot_selected');
		this.Dots.children[index].classList.add('dot_selected');
	}
	
	updateContent(index) {
		this.BannerImg.src = this.ImgBasePath + this.SlidesList[index].image;
		this.BannerTxt.innerHTML = this.SlidesList[index].tagLine;
	}
}

const slides = new Slideshow();
slides.init();
