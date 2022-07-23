const fourcards = document.querySelector(".fourcards");
const popcard = document.querySelector(".deskpopcard");

const projects = [
  {
    id: 1,
    Title: "Tonic",
    imglink: "./image/profilephoto.png",
    company: "CANOPY",
    developer: "Back End Dev",
    year: "2015",
    description:
      "A daily selection of privately personalized reads; no accountsor sign-ups required. ",
    tag1: "Html",
    tag2: "Css",
    tag3: "Javascript",
    sourceLink: "",
    demoLink: "",
  },
  {
    id: 2,
    Title: "Multi-Post Stories",
    imglink: "./image/availability.png",
    company: "FACEBOOK",
    developer: "Full Stack Dev",
    year: "2015",
    description:
      "Experimental content creation feature that allows users to addto an existing story over the course of a day without spamming their friends.",
    tag1: "Html",
    tag2: "Css",
    tag3: "Javascript",
    sourceLink: "",
    demoLink: "",
  },
  {
    id: 3,
    Title: "Facebook 306",
    imglink: "./image/exercise.png",
    company: "FACEBOOK",
    developer: "Back End Dev",
    year: "2015",
    description:
      " Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    tag1: "Html",
    tag2: "Css",
    tag3: "Javascript",
    sourceLink: "",
    demoLink: "",
  },
  {
    id: 4,
    Title: "Uber Navigation",
    imglink: "./image/art.png",
    company: "UBER",
    developer: "Lead Developer",
    year: "2018",
    description:
      " A smart assistant to make driving more safe efficient, and fun by unlocking your most expensive computer: your car.",
    tag1: "Html",
    tag2: "Css",
    tag3: "Javascript",
    sourceLink: "",
    demoLink: "",
  },
];

const maps = () => {
  fourcards.innerHTML = "";
  projects.map((project) => {
    fourcards.innerHTML += ` <section class="section2" id="Portfolio">
      <div class="card5">
        <img src="${project.imglink}" alt="" />
        <div class="allcard">
          <h4 class="tonic">${project.Title}</h4>
          <ul class="list">
            <li class="canopy">${project.company}</li>
            <li class="liststyle">${project.developer}</li>
            <li class="liststyle">${project.year}</li>
          </ul>
          <p class="description">${project.description}</p>
          <div class="tags" id="tags">
          <p class="tag1">${project.tag1}</p>
          <p class="tag2">${project.tag2}</p>
          <p class="tag3">${project.tag3}</p>
          </div>
          <button id="modal_popup" class='popup_btn' data-work${project.id}>See Project</button>
        </div>
      </div>
    </section>
      `;
    return fourcards;
  });
  const popbtn = document.querySelectorAll(".popup_btn");
  popbtn.forEach((btn) => {
    // popcard.innerHTML = ''
    btn.addEventListener("click", () => {
      projects.map((project) => {
        popcard.innerHTML = `
          <div  class="deskpopup">
          <header class="deskpop">
            <h4>${project.Title}</h4>
            <p  class='cancel' id="x">&times;</p>
          </header>
          <ul class="ullist">
            <li class="stylenone">CANOPY</li>
            <li class="displaystyle">Back End Dev</li>
            <li class="displaystyle">2015</li>
          </ul>
          <img
            src="./image/desktoppop.jpg"
            alt="Pop up image"
            id="desktoppopimg"
          />
          <div class="flexx" id="flexx">
            <p  id="deskpopgraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
              temporibus nemo ex quae repellendus praesentium, quisquam
              voluptatibus iure consequatur ut fugiat nulla consectetur dolorum
              nam sapiente sit voluptatum cum magni eaa.
            </p>
            <div class="desktagbutton">
              <div class="desktags" id="desktags2">
                <p>Html</p>
                <p>css</p>
                <p>Javascript</p>
              </div>
              <div class="desktags" id="desktags3">
                <p>github</p>
                <p>ruby</p>
                <p>Bootstrap</p>
              </div>
              <div class="deskbothbtn" id="deskbothbtn">
                <button class="deskSee" id="buttonicon">
                  <p>See live</p>
                 <a href="#"> <img src="./image/Icon.png" alt="" id="iconimage" /></a>
                </button>
                <button class="deskSee">
                  <p>See Source</p>
                  <a href="https://github.com/Blossom-Aniedi"><img src="./image/Vector.png" alt="git image" id="iconimage" /></a>
                </button>
              </div>
            </div>
          </div>
        </div>
          
          `;
        return popcard;
      });

      const cancel = document.querySelector(".cancel");
      const deskpopup = document.querySelector(".deskpopup");
      function Hide() {
        deskpopup.style.display = "none";
      }
      cancel.addEventListener("click", Hide);
    });
  });
};

maps();
