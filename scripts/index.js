let arrayObjects = [
  {
    heading: "Overskrift 1",
    content: "Brødtekst 1",
  },
  {
    heading: "Overskrift 2",
    content: "Brødtekst 2",
  },
  {
    heading: "Overskrift 3",
    content: "Brødtekst 3",
  },
  {
    heading: "Overskrift 4",
    content: "Brødtekst 4",
  },
];

let container = document.querySelector(".container");

arrayObjects.forEach((obj) => {
  let html = `
    <div class="accordion">
        <p class="headning">${obj.heading}</p>
        <div class="panel">
            <p class="content">${obj.content}</p>
        </div>
    </div>
    `;

  container.innerHTML += html;
});

const acc = document.querySelectorAll(".accordion");
acc.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active"); //currentTarget er den yderste div af det der rammes, hvor target er selve elementet der rammes
  });
});
