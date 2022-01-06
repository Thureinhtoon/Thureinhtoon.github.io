
// Mobile Menu

document.getElementById("hamburguer-icon").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "0";
}

document.getElementById("sliding-header-menu-close-button").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
}


// About us Tab

var aboutUs = {
  "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

var aboutUsTabs = document.getElementsByClassName("single-tab");

for (var a = 0; a < aboutUsTabs.length; a++) {
  aboutUsTabs[a].onclick = function() {
    var clickedValue = this.innerHTML;
    document.getElementById("box-text").innerHTML = aboutUs[clickedValue];

    for (var b = 0; b < aboutUsTabs.length; b++) {
      aboutUsTabs[b].style["background-color"] = unseletectedColor;
      aboutUsTabs[b].style["font-weight"] = "normal";
    }

    this.style["background-color"] = seletectedColor;
    this.style["font-weight"] = "bold";


  }
}



// Service slider

var ourServices = [
  {
    'title': 'Web design',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Backend Developer',
    'text': 'I am trying to become a professional web developer.I have web development experience from last 2 years. I am working on HTML, CSS,BOOTSTRAP, Jquery, Javascript, VUE, PHP,LARAVEL. I have also worked on Search engine optimization, website performance.'
  },

  {
    'title': 'Freelancer',
    'text': 'Get the user requirement specifications and draw the mockups and draw the flowchart diagrams in order to understand system clearly for both team members and product owner.Design and development the whole site with other two team members.Demonstrate to users how to use the website and provide technical supports.Structure the whole database Design. Managed the corporate website platform.'
  }
  
];

var previousArrow = document.getElementById("service-previous");
var nextArrow = document.getElementById("service-next");
var serviceTitleArea = document.getElementById("service-title");
var serviceTextArea = document.getElementById("service-text");

var currentService = 0;

nextArrow.onclick = function() {
  if (currentService == (ourServices.length - 1)) {
    currentService = 0;
  } else {
    currentService += 1;
  }
  var title = ourServices[currentService].title;
  var text = ourServices[currentService].text;
  serviceTitleArea.innerHTML = title;
  serviceTextArea.innerHTML = text;
}

previousArrow.onclick = function() {
  if (currentService == 0) {
    currentService = ourServices.length - 1;
  } else {
    currentService -= 1;
  }
  
  var title = ourServices[currentService].title;
  var text = ourServices[currentService].text;
  serviceTitleArea.innerHTML = title;
  serviceTextArea.innerHTML = text;
}




// Footer

document.getElementById("current_year").innerHTML = new Date().getFullYear();




	/*let sections = document.querySelectorAll('section');
	let navLinks = document.querySelectorAll('header nav a');

	window.onScroll = () => {

		sections.forEach(sec => {

			let top = window.scrollY;
			let offset = window.offsetTop;
			let height = sec.offsetHeight;
			let id = sec.getAttribute('id');

			if (top >= offset && top < offset + height) {
				navLinks.forEach(links => {
						links.classList.remove('active');
						document.querySelector('header nav a[href *= '+ id + ']').classList.add('active');

				});
			};

		});

	};
*/


   