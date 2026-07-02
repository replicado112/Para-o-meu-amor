const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");

// iniciar site
startBtn.addEventListener("click", () => {
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    mainContent.classList.remove("hidden");
  }, 1000);
});

// 💖 CORAÇÕES CAINDO
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = (Math.random() * 20 + 10) + "px";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// fluxo contínuo de corações
setInterval(createHeart, 300);

// 🎬 GALERIA MODAL
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");
const downloadBtn = document.getElementById("downloadBtn");

let currentMedia = null;

// abrir mídia
document.querySelectorAll(".media-item").forEach(item => {
  item.addEventListener("click", () => {

    const img = item.querySelector("img");
    const video = item.querySelector("video");

    modalContent.innerHTML = "";

    if (img) {
      const clone = img.cloneNode();
      modalContent.appendChild(clone);
      currentMedia = img.src;
    }

    if (video) {
      const clone = video.cloneNode(true);
      clone.controls = true;
      modalContent.appendChild(clone);
      currentMedia = video.src;
    }

    modal.classList.remove("hidden");
  });
});

// fechar modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalContent.innerHTML = "";
});

// download
downloadBtn.addEventListener("click", async () => {
  if (!currentMedia) return;

  try {
    const response = await fetch(currentMedia);
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;

    // nome do arquivo
    a.download = currentMedia.split("/").pop() || "memoria.jpg";

    document.body.appendChild(a);
    a.click();

    // limpeza
    a.remove();
    window.URL.revokeObjectURL(url);

  } catch (err) {
    console.error("Erro ao baixar:", err);
    alert("Não foi possível baixar o arquivo.");
  }
});

const text = `Minha querida,

Se eu pudesse te pintar como Van Gogh pintava o mundo, você não seria apenas uma pessoa em uma tela — seria o próprio céu em movimento, cheio de cores que não existem ainda, mas que meu coração insiste em inventar quando penso em você.

Eu te veria como ele via as estrelas em A Noite Estrelada: não como pontos distantes e frios, mas como algo vivo, pulsando, girando em silêncio dentro de mim. Cada pensamento seu seria um traço de luz atravessando a escuridão dos meus dias, como se a vida, de repente, tivesse aprendido a brilhar de novo.

Se Van Gogh pintava a solidão com intensidade, eu pintaria você como o oposto disso: não uma ausência, mas uma presença que transborda. Um campo de cores quentes, onde até o vento parece ter significado, onde até o silêncio tem voz.

Você virou meu jeito de enxergar o mundo. Antes, eu via as coisas como elas eram. Agora, eu vejo como elas poderiam ser se você estivesse nelas — mais bonitas, mais vivas, mais verdadeiras.

E se um dia alguém olhar para mim e perguntar o que você significa, eu não vou saber explicar em palavras simples. Vou apenas dizer que você é a minha melhor obra sem tinta, meu quadro favorito que não cabe em moldura nenhuma.

— alguém que te ama como se cada dia fosse uma nova tela para te encontrar novamente. ❤️`;

let i = 0;
const speed = 50;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter, 2000);

const startDate = new Date("2024-11-24T00:00:00");

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const displayHours = hours % 24;
  const displayMinutes = minutes % 60;
  const displaySeconds = seconds % 60;

  const el = document.getElementById("timeTogether");

  if (el) {
    el.innerHTML = `
      ${days} dias<br>
      ${displayHours} horas<br>
      ${displayMinutes} minutos<br>
      ${displaySeconds} segundos ❤️
    `;
  }
}

setInterval(updateCounter, 1000);
updateCounter();

setInterval(updateCounter, 1000);
updateCounter();

const music = document.getElementById("bgMusic");

window.addEventListener("click", () => {
  music.volume = 0.5;
  music.play();
}, { once: true });

// ✨ PARTÍCULAS ROMÂNTICAS
function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.top = window.innerHeight + "px";

  const size = Math.random() * 4 + 2;
  particle.style.width = size + "px";
  particle.style.height = size + "px";

  particle.style.animationDuration = (Math.random() * 5 + 3) + "s";

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 8000);
}

setInterval(createParticle, 200);

// 🎬 SCROLL REVEAL CINEMATOGRÁFICO
function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// 🎬 ativar cena final quando chegar no fim da página
function checkFinalScene() {
  const final = document.getElementById("final");
  const triggerPoint = document.body.scrollHeight - window.innerHeight - 100;

  if (window.scrollY > triggerPoint) {
    final.classList.add("active");
  }
}

window.addEventListener("scroll", checkFinalScene);

// 🔁 reiniciar experiência (VERSÃO SEGURA)
window.addEventListener("DOMContentLoaded", () => {
  const restartBtn = document.getElementById("restartBtn");

  if (!restartBtn) return;

  restartBtn.addEventListener("click", () => {
    
    // 🎬 inicia fade-out cinematográfico
    document.body.classList.add("fade-out");

    // 💖 explosão de corações
    for (let i = 0; i < 25; i++) {
      createBurstHeart();
    }

    // ⏳ espera animação terminar e reinicia
    setTimeout(() => {
      window.scrollTo({ top: 0 });
      location.reload();
    }, 1200);
  });
});

// 💖 função de explosão de corações
function createBurstHeart() {
  const heart = document.createElement("div");

  heart.classList.add("burst-heart");
  heart.innerHTML = "❤️";

  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  heart.style.fontSize = `${Math.random() * 20 + 12}px`;

  document.body.appendChild(heart);

  const animation = heart.animate(
    [
      { transform: "translate(0,0) scale(1)", opacity: 1 },
      {
        transform: `translate(${(Math.random() - 0.5) * 300}px,
                               ${(Math.random() - 0.5) * 300}px)
                               scale(2)`,
        opacity: 0
      }
    ],
    {
      duration: 900,
      easing: "ease-out",
      fill: "forwards"
    }
  );

  animation.onfinish = () => {
    heart.remove();
  };
}

