
// Mobile Menu

document.getElementById("hamburguer-icon").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "0";
}

document.getElementById("sliding-header-menu-close-button").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
}


// About us Tab

var aboutUs = {
  "Introvert": "I myself an introvert and it helps focusing on my field. So I personally think that approximately 85% people who are successful in this field are introverts.So I like doing things on my own.May be sitting at a PC through the all day long or playing giutar.I prefer to listen rather than talk.  ",
  "Reading": "I am too fond of reading books.You can learn nearly everything from them.I usually read alot of books about Programming,World,Science and other famous books.I also write some Tech Things at<a href=\"https://www.facebook.com/SolutionProvider24\">WebDevelopmentWithKK</a> facebook page",
  "Goals": "<ul><li>To Become Professional FullStack Developer in near Future</li><li>To make an Album before 30 years old</li><li>To travel around the World</li><li>To have a lovely dog.</li><li>To live with peace of mind.</li></ul>"
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
    'text': 'Hi, I am ThuReinTun!👋, a 23-year old technical enthusiast who does web development. Passionate to create beautiful design  and make cool products.'
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
function myFunction() {			
  swal("", "Your Email has been sent!", "success");
    }
/*checking email is null or not*/

$('#submit_form').click(function(){
  var subject = $('#subject').val();
  var extra_fullName = $('#extra_fullName').val();
  var extra_email = $('#extra_email').val();
  var text = $('#text').val();
  if (subject == '' || subject == '' || extra_email == '' || text == '') {
    swal("", "Please enter missing fields!", "error");

  }
  else{
    swal("","Your email has been sent!","success");
  }
});

//update this with your js_form selector


   