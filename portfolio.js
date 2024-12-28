
const menuHtml = `<div class="menu-tips">
<p class = "js-home-div">Home</p>
<p class = "js-skill-div">Skills</p>
<p class = "js-pro-div">Portfolio: Project</p>
<p class = "js-contact-div">Contact</p>
<p class = "js-about-div">About</p>
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
menuPage();
}) 


const skillHtml = 
`<div class="skill-div">
  <h1>Skills</h1>
  <strong>Who Am I?</strong> <br>
  I'm a passionate creator with a unique blend of technical expertise and creative flair. My journey is fueled by a love for coding, designing , and crafting seamless web experience that not only look great but function flawlessly. <br> <br>
  <strong>What I Do: My Skill Set:</strong> <br>
  <ul>
    <li><strong>
      Gaming Enthusiast:
    </strong> Gaming is more than a hobby; it's a source of inspiration for creativity, strategy, and teamwork. It sharpens my problem-solving skilss and fuels my imagination.</li>
    <li><strong>
      Coding Wizard:
    </strong> Whetheer it's developing sleek web applications or solving complex problems, I enjoy turning ideas into reality through clean and efficient code</li>
    <li><strong>
      Website Design & Development:
    </strong> From wireframes to launch, I specialize in building and designing websites with html and css that blend stunning visuals with intuitive functionality. I focus on creating user-centric designs that leave lasting impressions.</li>
    <li><strong>
      Movie Buff:
    </strong> Watching movies fuels my creativity and helps me explore storytelling, pacing, and visual aesthetics that I bring into my projects.</li>
  </ul> <br>
  I thrive on challenges, continuously learning new skills, and bringing a touch of innovation to everything I do. These approchs presents my skills as strengths and demonstrates how they contribute to my creative and professional ability.
</div>`;

const contactHtml = 
`<div class="contacts-div">
  <h1>My Contact Info</h1>
  <div>
    You can contact me on my WhatsApp line: +234 8151546946
  </div><br>
  <div>
    On my LinkedIn: <a href="https://www.linkedin.com/in/nelson-chidiebere-35744a26a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn Profile</a>
  </div>
    <br>
  Or Contact number +2348151546946
</div>`


function menuPage () {
  document.querySelector('.js-home-div').addEventListener('click', ()=>{
    document.querySelector('.js-home-div')
      .innerHTML = '';
      menus.innerHTML = '';
      menu = false;
  })
  document.querySelector('.js-skill-div').addEventListener('click', ()=>{
    document.querySelector('body')
      .innerHTML = skillHtml;
      menus.innerHTML = '';
      menu = false;
  })
  document.querySelector('.js-pro-div').addEventListener('click', ()=>{
    document.querySelector('.js-pros-div')
      .innerHTML = '';
      menus.innerHTML = '';
      menu = false;
  })
  document.querySelector('.js-contact-div').addEventListener('click', ()=>{
    document.querySelector('body')
      .innerHTML = contactHtml;
      menus.innerHTML = '';
      menu = false;
  })
  document.querySelector('.js-about-div').addEventListener('click', ()=>{
    document.querySelector('.js-abouts-div')
      .innerHTML = '';
      menus.innerHTML = '';
      menu = false;
  })
}