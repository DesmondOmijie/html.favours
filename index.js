let about = document.querySelector("#about");
let aside = document.querySelector("aside");
let close = document.querySelector("#close");
let whatsButton = document.querySelectorAll("#whatsapp");

about.addEventListener("click", visible);
close.addEventListener("click", visible);

function visible(){
	aside.classList.toggle("aside-visible");
}


whatsButton.forEach(function(btn) {
	btn.addEventListener("click", function(){
		let phoneNumber = "2349075039891";
		let message = "Welcome to favour`s pastries, where every bite is a delight, from classic favourites to bespoke designs. We`re baking memories with love. What`s your story?";
      
      let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
      window.open(url, "_blank");

	})
})
