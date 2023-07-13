// ========== Header Scrolled ==========
const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  window.scrollY > 20 ? nav.classList.add("header-scrolled") : nav.classList.remove("header-scrolled");
});

// ========== Navbar hidden ==========
const navLinks = document.querySelectorAll(".nav-link");
const navCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach((element) => {
  element.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});

// ========== Clients Carousel ==========
$(document).ready(() => {
  $(".client-slider-section").owlCarousel({
    items: 4,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });
});

// ========== Projects Counter ==========
$(document).ready(() => {
  $('[data-toggle="counter"]').counterUp({
    delay: 15,
    time: 2000,
  });
});

// ========== TypeWritter Effect ==========
// new Typewriter("#typewriter", {
//   loop: true,
//   strings: ["Connected", "Online"],
//   autoStart: true,
// })
//   .pauseFor(5000)
//   .typeString()
//   .start();

// ========== Elements Loops Function Initialize ==========
const loopsElements = (data, container, template) => {
  let value = ``;

  data.forEach(({ ...item }, index) => {
    value += template(item, index);
  });

  container.innerHTML = value;
};

// ========== Elements Loops Features ==========
const featuresData = [
  {
    title: "Consultancy",
    description: "We provides the Websites Consultancy with expert consultant on our company to make sure our clients make a right decision.",
    bg: "#fff6d6",
    img: "./images/consultancy.png",
  },
  {
    title: "Tech Solutions",
    description: "We provides Tech Solutions for our clients to solves their problem about technologies as well.",
    bg: "#ebdcf9",
    img: "./images/solutions.png",
  },
  {
    title: "User Dashboard",
    description: "We Also provides User Dashboard to our clients who wanna have an User Dashboard to managed their company.",
    bg: "#ddf5fc",
    img: "./images/simple.png",
  },
  {
    title: "Deadline Notifications",
    description: "Besides User Dashboard, we also provides Deadline Notifications for our clients to managed their task.",
    bg: "#dcf6e8",
    img: "./images/deadline.png",
  },
  {
    title: "Data Retrieval",
    description: "We make sure that our clients data is stored with safely in our company servers with daily check of servers security.",
    bg: "#f8e4e1",
    img: "./images/data.png",
  },
  {
    title: "Flexible System",
    description: "We also provides you the most flexible systems that make you can access your webites anytime and anywhere.",
    bg: "#fbffd4",
    img: "./images/flexible.png",
  },
];

const featuresTemplate = ({ title, description, bg, img }) => `
    <div class="col-lg-4 col-sm-6 mb-5">
        <div class="features-card" style="background-color: ${bg};">
            <img src="${img}" alt="Features Image" class="features-card-img">
            <h3 class="features-card-title">${title}</h3>
            <p class="features-card-description">${description}</p>
        </div>
    </div>
`;

const featuresContainer = document.querySelector(".features-container");

loopsElements(featuresData, featuresContainer, featuresTemplate);

// ========== Elements Loops Pricing ==========
const pricingData = [
  {
    description: "Personal",
    img: "./images/personal.png",
    rate: "$1.99",
    period: "Monthly",
    list: ["5x Revision Of The Result", "Weekly Maintenance", "Custom Domain With Medium Security", "5GB Of Upload & Download", "Database Statistics", "Exportable Data"],
  },
  {
    description: "Growth",
    img: "./images/growth.png",
    rate: "$14.99",
    period: "Monthly",
    list: ["10x Revision Of The Result", "Weekly Maintenance", "Custom Domain With High Security", "10GB Of Upload & Download", "Database Statistics", "Exportable Data"],
  },
  {
    description: "Professional",
    img: "./images/professional.png",
    rate: "$49.99",
    period: "Monthly",
    list: ["15x Revision Of The Result", "Weekly Maintenance", "Custom Domain With Priority Security", "20GB Of Upload & Download", "Database Statistics", "Exportable Data"],
  },
];

const pricingTemplate = ({ description, img, rate, period, list }, index) => `
    <div class="${index === 1 ? "position-relative" : ""} col-sm-6 col-lg-4">
      ${index === 1 ? '<p class="pricing-ribbons"><span>Popular</span></p>' : ""}
      <div class="${index === 1 ? "popular-card" : ""} pricing-card">
        <p class="pricing-description">${description}</p>
        <img src="${img}" alt="Pricing Images" class="img-fluid">
        <p class="pricing-rate">${rate}</p>
        <p class="pricing-period">${period}</p>
        <div class="pricing-plan">
          <ul>
            ${list
              .map((item, listIndex) => {
                if ((listIndex === list.length - 1 || listIndex === list.length - 2) && index === 0) {
                  return `<li class="text-decoration-line-through" style="color: #a0a0a0;">${item}</li>`;
                } else if (listIndex === list.length - 1 && index === 1) {
                  return `<li class="text-decoration-line-through" style="color: #a0a0a0;">${item}</li>`;
                } else {
                  return `<li>${item}</li>`;
                }
              })
              .join(" ")}
            </ul>
        </div>
        <a href="#contact" class="${index !== 1 ? "m-0" : ""}  learn-more-btn">Get Started</a>
      </div>
    </div>
`;

const pricingContainer = document.querySelector(".pricing-container");

loopsElements(pricingData, pricingContainer, pricingTemplate);

// ========== Elements Loops FAQs ==========
const FAQsData = [
  {
    title: "1. How does the free trial work?",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nostrum impedit magnam magni, iste qui atque harum neque optio sed?",
    headingID: "headingOne",
    collapseID: "collapseOne",
  },
  {
    title: "2. What happens when my trial ends?",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nostrum impedit magnam magni, iste qui atque harum neque optio sed?",
    headingID: "headingTwo",
    collapseID: "collapseTwo",
  },
  {
    title: "3. How do I make payments?",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nostrum impedit magnam magni, iste qui atque harum neque optio sed?",
    headingID: "headingThree",
    collapseID: "collapseTheree",
  },
  {
    title: "4. Can I upgrade my plan any time?",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nostrum impedit magnam magni, iste qui atque harum neque optio sed?",
    headingID: "headingFour",
    collapseID: "collapseFour",
  },
  {
    title: "5. How do I get in touch with our support system?",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nostrum impedit magnam magni, iste qui atque harum neque optio sed?",
    headingID: "headingFive",
    collapseID: "collapseFive",
  },
];

const FAQsTemplate = ({ title, description, headingID, collapseID }) => `
    <div class="accordion-item">
      <h2 class="accordion-header" id="${headingID}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseID}" aria-expanded="false" aria-controls="${collapseID}">
          ${title}
        </button>
      </h2>
      <div id="${collapseID}" class="accordion-collapse collapse" aria-labelledby="${headingID}" data-bs-parent="#accordionExample">
        <div class="accordion-body">${description}</div>
      </div>
    </div> 
`;

const FAQsContainer = document.getElementById("accordionExample");

loopsElements(FAQsData, FAQsContainer, FAQsTemplate);
