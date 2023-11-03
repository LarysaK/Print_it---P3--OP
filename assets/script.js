// Le code est organisé en classe 'Slideshow' pour une meilleure encapsulation et une meilleure lisibilité.
class Slideshow {
	// La méthode constructeur de la classe définit l'état initial et les propriétés du diaporama, telles que les références aux éléments DOM, aux chemins d'image et aux données de diapositive.
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

	//La méthode init est responsable de la configuration des écouteurs d'événements pour les flèches et les points. Il est appelé à la fin du script pour initialiser le diaporama.
	init() {
		this.addArrowEventListeners();
		this.addDotEventListeners();
	}
	// La méthode addArrowEventListeners configure des écouteurs d'événements pour les éléments fléchés (flèches gauche et droite).
	addArrowEventListeners() {
		this.Arrow.forEach((arrow) => {
		arrow.addEventListener('click', (e) => {
			const direction = e.currentTarget.classList.contains(this.Left) ? -1 : 1;
			this.moveSlide(direction);
		});
		});
	}
	// La méthode addDotEventListeners configure des écouteurs d'événements pour les éléments point.
	addDotEventListeners() {
		this.Dots.children.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			this.setCurrentDot(index);
			this.updateContent(index);
		});
		});
	}
	// Cette méthode est appelée lorsqu'on clique sur une flèche. Il prend un argument de direction, qui est soit -1 (pour la gauche) ou 1 (pour la droite).
	moveSlide(direction) {
		this.CurrentPosition = (this.CurrentPosition + direction + this.SlidesList.length) % this.SlidesList.length;
		this.setCurrentDot(this.CurrentPosition);
		this.updateContent(this.CurrentPosition);

		// Ajouter une alerte pour avertir l'utilisateur lorsque la diapositive change (TEST) !!
		// alert(`Slide changed to ${this.CurrentPosition + 1}`);
	}
	// Cette méthode se charge de mettre à jour le point qui correspond à la diapositive actuellement affichée. Il supprime la classe 'dot_selected' du point actuellement sélectionné et l'ajoute au point nouvellement sélectionné.
	setCurrentDot(index) {
		this.Dots.querySelector('.dot_selected').classList.remove('dot_selected');
		this.Dots.children[index].classList.add('dot_selected');
	}
	// Cette méthode met à jour l'image affichée et le contenu du texte dans la bannière en fonction de l'index fourni. Il définit l'attribut src de l'élément BannerImg sur la source d'image appropriée et met à jour le innerHTML de l'élément BannerTxt avec le texte associé à la diapositive.
	updateContent(index) {
		this.BannerImg.src = this.ImgBasePath + this.SlidesList[index].image;
		this.BannerTxt.innerHTML = this.SlidesList[index].tagLine;
	}
}
// 
const slides = new Slideshow();
slides.init();
