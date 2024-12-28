
const menuHtml = `<div class="menu-tips">
<a href="Portfolio.html"><p class = "js-home-div">Home</p></a>
<a href="skill.html"><p class = "js-skill-div">Skills</p></a>
<a href="pro.html"><p class = "js-pro-div">Portfolio: Project</p></a>
<a href="contact.html"><p class = "js-contact-div">Contact</p></a>
<a href="about.html"><p class = "js-about-div">About</p></a>
</div>`;

const menus = (document.querySelector('.js-menu-tips'));

let menu = false;

document.querySelector('.js-menu-img').addEventListener('click', ()=>{
if (!menu){
  menus.innerHTML = menuHtml;
  menu = true;
}else if(menu === true){
  menus.innerHTML = '';
  menu = false;
}
}) 