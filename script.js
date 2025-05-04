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
    bio: "FALA MEU BROTHER, TUDO BEM? SOU O LUCAS E ESTOU AQUI NA BARBEARIA DELTA PARA ELEVARSUA AUTOESTIMA E CONFIANÇA DEIXANDO SEU VISUAL SEMPRE IMPECÁVEL. VENHA CONHECER MEU TRABALHO E DESCOBRIR O MELHOR CORTE E BARBA QUE COMBINA COM O SEU MOMENTO DE VIDA."
  },
  pedro: {
    img: "assets/pedro_barber.jpg",
    name: "Pedro Vieira",
    role: "Cabeleireiro e Barbeiro",
    bio: "Pedro se destaca pelo atendimento personalizado e atenção aos detalhes."
  },
  asafe: {
    img: "assets/Asafe_barber.jpg",
    name: "Asafe Ortiz",
    role: "Cabeleireiro e Barbeiro",
    bio: "FALA PESSOAL! VIM DIRETAMENTE DO MATO GROSSO PARA OFERECER O MELHOR ATENDIMENTO PARA VOCÊS! ESTOU NA ÍNDIGO DESDE QUE A BARBEARIA INAUGUROU, E JUNTO COM TODOS VENHO APRENDENDO DIA A DIA! COMIGO VOCÊ TEM UM ATENDIMENTO DE EXCELÊNCIA. E COMO SEMPRE DIGO: 'FIQUE NOVO DE NOVO!' SERÁ UM PRAZER ATENDER E CONHECER VOCÊ!"
  },
  vaniele: {
    img: "assets/moça_manicure.jpg",
    name: "Vaniele Marinho",
    role: "Manicure e Pedicure",
    bio: "Vaniele proporciona bem-estar e cuidado com unhas impecáveis e atendimento humanizado."
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