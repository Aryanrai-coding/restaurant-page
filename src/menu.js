export function loadMenupage() {
    const contentDiv = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menu.setAttribute('class', 'menu-content');

    menu.innerHTML = `
    <h1>Menu</h1>

<div class="menu-card">
    <div class="item">
        <img src="../images/chickenpizza.png" alt="">
        <p class="item-name">Chicken Pizza</p>
    </div>
    <div class="item">
        <img src="../images/pepperonipizza.png" alt="">
        <p class="item-name">Pepporoni Pizza</p>
    </div>
    <div class="item">
        <img src="../images/mushroompizza.png" alt="">
        <p class="item-name">Mushroom Pizza</p>
    </div>
    <div class="item">
        <img src="../images/margheritapizza.png" alt="">
        <p class="item-name">Margherita Pizza</p>
    </div>
    <div class="item">
        <img src="../images/garlicbreadpizza.png" alt="">
        <p class="item-name">Garlic Bread Pizza</p>
    </div>
</div>
    `;

    contentDiv.appendChild(menu);
}