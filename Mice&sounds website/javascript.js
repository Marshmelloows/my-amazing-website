//Normally data is stored in DB, when app sends a request to DB, it return this array of data
//Link: https://www.imdb.com/chart/top/
let items =[{title: "Wireless headphones", image_url: "Images/Wireless-Headphones.jpg"}, 
    {title: "mouse pad", image_url: "Images/Sony INZONE Mat-D Gaming Mousepad.jpg"}, 
    {title: "mice", image_url: "Images/Wired-Mouse.jpg"}, 
    {title: "headphones", image_url: "Images/Beats Studio Pro Wireless.jpg"},
    {title: "Keybord", image_url: "Images/Akko Kuromi 5108B Plus 100% V3 Piano Pro Hot-Swappable Wireless Mechanical Keyboard.jpg"},
    {title: "mice", image_url: "Images/Corsair Katar PRO Wireless Gaming Mouse.jpg"},
    {title: "mouse pad", image_url: "Images/Akko x Hatsune Miku Limited Edition Mousepad.jpg"},
    {title: "mice", image_url: "Images/Mice.jpg"},
    {title: "Keybords", image_url: "Images/Gaming Keyboard Mouse.jpg"},
    {title: "mouse pad", image_url: "Images/Gorilla Gaming Extended Mouse Pad - Neon Red.jpg"},
    {title: "headphones", image_url: "Images/Headphone-black.jpg"}
]
  
//Slideshow: Automatic
let autoSlideIndex = 0;//Initial slide = 0
function autoSlideShow() {
//Change the slide_index
  if (autoSlideIndex < items.length - 1) {
    autoSlideIndex++;
  } else {
    autoSlideIndex = 0;
  }
  //Change the image source for the img
  document.getElementById("slide-image").src = items[autoSlideIndex].image_url;
    document.getElementById("slide-caption").innerHTML = items[autoSlideIndex].title;
  //Wait 2 seconds
  setTimeout(autoSlideShow, 2000);//Auto change slide every 2 seconds
}

autoSlideShow() // Call to run auto slideshow