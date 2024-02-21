export function loadAboutPage() {
    const contentDiv = document.querySelector('#content');
    const about = document.createElement('div');
    about.setAttribute('id', 'about');
    about.setAttribute('class', 'about');

    about.innerHTML = `
    <div class="about-content">

    <h1>About Pizzaz</h1>

<p class="about-text">Established in the heart of Bengaluru, Pizzaz has been serving pizza lovers since 2024. Our journey began with a simple yet ambitious goal – to redefine the pizza experience in the city. Over the years, we have stayed true to our commitment of delivering high-quality, flavorful pizzas that keep our customers coming back for more.
</p>

<h1>Contact</h1>

<div class="contact">
    <div class="phone">
        <i class="fa-solid fa-phone"></i>
        <p>1234 56789</p>
    </div>
    <div class="location">
        <i class="fa-solid fa-location-dot"></i>
        <p>Bangalore, India</p>
    </div>
    <div class="map">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31103.863973765983!2d77.63823414999999!3d12.972939249999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a418770391%3A0xb50f46b826501036!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708194925943!5m2!1sen!2sin"
     style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
</div>
</div>
    `;

    contentDiv.appendChild(about);
}