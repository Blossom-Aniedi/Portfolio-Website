const fourcards = document.querySelector('.fourcards');

const projects = [
  {
    Title: 'Tonic',
    imglink: './image/profilephoto.png',
    company: 'CANOPY',
    developer: 'Back End Dev',
    year: '2015',
    description:
      'A daily selection of privately personalized reads; no accountsor sign-ups required. ',
    tag1: 'Html',
    tag2: 'Css',
    tag3: 'Javascript',
    sourceLink: '',
    demoLink: '',
  },
  {
    Title: 'Multi-Post Stories',
    imglink: './image/availability.png',
    company: 'FACEBOOK',
    developer: 'Full Stack Dev',
    year: '2015',
    description:
      'Experimental content creation feature that allows users to addto an existing story over the course of a day without spamming their friends.',
    tag1: 'Html',
    tag2: 'Css',
    tag3: 'Javascript',
    sourceLink: '',
    demoLink: '',
  },
  {
    Title: 'Facebook 306',
    imglink: './image/exercise.png',
    company: 'FACEBOOK',
    developer: 'Back End Dev',
    year: '2015',
    description:
      " Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    tag1: 'Html',
    tag2: 'Css',
    tag3: 'Javascript',
    sourceLink: '',
    demoLink: '',
  },
  {
    Title: 'Uber Navigation',
    imglink: './image/art.png',
    company: 'UBER',
    developer: 'Lead Developer',
    year: '2018',
    description:
      ' A smart assistant to make driving more safe efficient, and fun by unlocking your most expensive computer: your car.',
    tag1: 'Html',
    tag2: 'Css',
    tag3: 'Javascript',
    sourceLink: '',
    demoLink: '',
  },
];

const maps = () => {
  fourcards.innerHTML = '';
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
          <button>See Project</button>
        </div>
      </div>
    </section>
      `;
    return fourcards;
  });
};

maps();
