(()=>{"use strict";function e(){const e=document.querySelector("#content"),n=document.createElement("div");n.setAttribute("id","home"),n.setAttribute("class","home"),n.innerHTML='\n    <div class="home-content">\n    <h1 class="home-head">Best Pizza Place in Town!</h1>\n<p class="home-para">This is the only destination for the mouth watering pizza you have been craving.</p>\n</div>\n    ',e.appendChild(n)}function n(){document.querySelector("#content").innerHTML=""}function t(){n(),e()}function i(){n(),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.setAttribute("id","menu"),n.setAttribute("class","menu-content"),n.innerHTML='\n    <h1>Menu</h1>\n\n<div class="menu-card">\n    <div class="item">\n        <img src="images/chickenpizza.png" alt="">\n        <p class="item-name">Chicken Pizza</p>\n    </div>\n    <div class="item">\n        <img src="images/pepperonipizza.png" alt="">\n        <p class="item-name">Pepporoni Pizza</p>\n    </div>\n    <div class="item">\n        <img src="images/mushroompizza.png" alt="">\n        <p class="item-name">Mushroom Pizza</p>\n    </div>\n    <div class="item">\n        <img src="images/margheritapizza.png" alt="">\n        <p class="item-name">Margherita Pizza</p>\n    </div>\n    <div class="item">\n        <img src="images/garlicbreadpizza.png" alt="">\n        <p class="item-name">Garlic Bread Pizza</p>\n    </div>\n</div>\n    ',e.appendChild(n)}()}function a(){n(),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.setAttribute("id","about"),n.setAttribute("class","about"),n.innerHTML='\n    <div class="about-content">\n\n    <h1>About Pizzaz</h1>\n\n<p class="about-text">Established in the heart of Bengaluru, Pizzaz has been serving pizza lovers since 2024. Our journey began with a simple yet ambitious goal – to redefine the pizza experience in the city. Over the years, we have stayed true to our commitment of delivering high-quality, flavorful pizzas that keep our customers coming back for more.\n</p>\n\n<h1>Contact</h1>\n\n<div class="contact">\n    <div class="phone">\n        <i class="fa-solid fa-phone"></i>\n        <p>1234 56789</p>\n    </div>\n    <div class="location">\n        <i class="fa-solid fa-location-dot"></i>\n        <p>Bangalore, India</p>\n    </div>\n    <div class="map">\n    <iframe\n        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31103.863973765983!2d77.63823414999999!3d12.972939249999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a418770391%3A0xb50f46b826501036!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708194925943!5m2!1sen!2sin"\n     style="border:0;" allowfullscreen="" loading="lazy"\n        referrerpolicy="no-referrer-when-downgrade"></iframe>\n        </div>\n</div>\n</div>\n    ',e.appendChild(n)}()}document.addEventListener("DOMContentLoaded",(()=>{e()})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("#home-btn"),n=document.querySelector("#menu-btn"),s=document.querySelector("#about-btn");e.addEventListener("click",t),n.addEventListener("click",i),s.addEventListener("click",a)}))})();