// Cenas do jogo
const scenes = {
  hall: {
    image: "imagens/hall.png",
    navigation: [
      { x: "80%", y: "50%", target: "sala" }
    ]
  },
  sala: {
    image: "imagens/sala.png",
    navigation: [
      { x: "20%", y: "50%", target: "hall" },
      { x: "80%", y: "60%", target: "cozinha" }
    ]
  },
  cozinha: {
    image: "imagens/cozinha.png",
    navigation: [
      { x: "10%", y: "50%", target: "sala" }
    ]
  }
};

let currentScene = "hall";

// Função para carregar cena
function loadScene(sceneName) {
  const scene = scenes[sceneName];
  if (!scene) return;

  document.getElementById("scene-image").src = scene.image;

  const navContainer = document.getElementById("navigation");
  navContainer.innerHTML = "";

  scene.navigation.forEach(point => {
    const button = document.createElement("div");
    button.classList.add("nav-point");
    button.style.left = point.x;
    button.style.top = point.y;
    button.onclick = () => loadScene(point.target);
    navContainer.appendChild(button);
  });

  currentScene = sceneName;
}

// Inicializa a cena inicial
window.onload = () => {
  loadScene(currentScene);
};
