AOS.init();

// Funcionalidade dos BOTÕES sobre dos PROFISSIONAIS
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalRole = document.getElementById("modal-role");
const modalBio = document.getElementById("modal-bio");
const closeButton = document.querySelector(".close-button");

const professionals = {
  lucas: {
    img: "assets/lucas_barber.jpg",
    name: "Lucas Anderson",
    role: "Cabeleireiro e Barbeiro",
    bio: "Fala meu brother, tudo bem? sou o lucas e estou aqui na barbearia delta para elevarsua autoestima e confiança deixando seu visual sempre impecável. venha conhecer meu trabalho e descobrir o melhor corte e barba que combina com o seu momento de vida."
  },
  pedro: {
    img: "assets/pedro_barber.jpg",
    name: "Pedro Vieira",
    role: "Cabeleireiro e Barbeiro",
    bio: "'Mais do que um corte, uma expressão única de quem você é'. Eai tudo certo, sou Pedro Vieira barbeiro a mais de 4 anos e iniciei com uma máquina na mão, um sonho no coração… e a vontade de transformar vidas atrvés de um atendimento exclusivo voltado para cada pessoa que se senta em frente à minha bancada."
  },
  vaniele: {
    img: "assets/moça_manicure.jpg",
    name: "Vaniele Marinho",
    role: "Manicure e Pedicure",
    bio: "Sou a Vaniele, especialista em proporcionar bem-estar através do cuidado com unhas impecáveis e um atendimento totalmente humanizado. Mais do que estética, entrego carinho, atenção e uma experiência única para você se sentir ainda melhor com quem é."
  }
};

document.querySelectorAll(".professional button").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const keys = Object.keys(professionals);
    const prof = professionals[keys[index]];
    modalImg.src = prof.img;
    modalName.textContent = prof.name;
    modalRole.textContent = prof.role;
    modalBio.textContent = prof.bio;
    modal.style.display = "flex";
  });
});
 
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.style.display = "none";
    }
  });
  
window.addEventListener("click", (e) => {
if (e.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
}
});


// Funcionalidade dos CARDS de perguntas
function toggleAnswer(button) {
  const answer = button.nextElementSibling;
  answer.classList.toggle("open");
  button.classList.toggle("active");
}

// Funcionalidade dos CARDS de comentários
const wrapper = document.querySelector(".comments-info");
const btnPrev = document.querySelector(".carousel-btn.prev");
const btnNext = document.querySelector(".carousel-btn.next");

let scrollAmount = 0;
const scrollStep = 320;

btnNext.addEventListener("click", () => {
  wrapper.scrollBy({ left: scrollStep, behavior: "smooth" });
});

btnPrev.addEventListener("click", () => {
  wrapper.scrollBy({ left: -scrollStep, behavior: "smooth" });
});