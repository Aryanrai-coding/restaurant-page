export function homePageLoad() {
    const contentDiv = document.querySelector('#content');
    const home = document.createElement('div');
    home.setAttribute('id', 'home');
    home.setAttribute('class', 'home');

    home.innerHTML = `
    <div class="home-content">
    <h1 class="home-head">Best Pizza Place in Town!</h1>
<p class="home-para">This is the only destination for the mouth watering pizza you have been craving.</p>
</div>
    `;
    // const head = document.createElement('h1');
    // head.textContent = 'Best Pizza Place in Town!';

    // const img = document.createElement('img');
    // img.src = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    // const text = document.createElement('p');
    // text.textContent = 'This is the only destination for the mouth watering pizza you have been craving.';

    contentDiv.appendChild(home);
}

