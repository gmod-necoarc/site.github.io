document.body.addEventListener("click", (e) => {
    const sparkCount = 12; // Количество частиц
    for (let i = 0; i < sparkCount; i++) {
      const spark = document.createElement("div");
      spark.className = "spark";
      document.body.appendChild(spark);
  
      // Устанавливаем положение и направление
      const angle = (i * 360) / sparkCount;
      const dx = 50 * Math.cos((angle * Math.PI) / 180); // Смещение по X
      const dy = 50 * Math.sin((angle * Math.PI) / 180); // Смещение по Y
      spark.style.setProperty("--dx", `${dx}px`);
      spark.style.setProperty("--dy", `${dy}px`);
  
      // Устанавливаем начальные координаты частиц
      spark.style.left = `${e.pageX}px`;
      spark.style.top = `${e.pageY}px`;
  
      // Удаление частиц после завершения анимации
      spark.addEventListener("animationend", () => spark.remove());
    }
  });
window.onload = function() {
    setTimeout(() => {
        const loaderWrapper = document.getElementById('loader-wrapper');
        loaderWrapper.classList.add('hidden'); // Добавляем класс для плавного исчезновения

        // Удаляем элемент из DOM после завершения анимации
        setTimeout(() => {
            loaderWrapper.style.display = 'none'; // Устанавливаем display: none
        }, 500); // Время должно совпадать с длительностью перехода
    }, 1000); // Время до начала исчезновения
};
// Array of titles to animate
const titles = ["Neco", "Neco - ", "Neco - C", "Neco - Се", "Neco - Сер", "Neco - Серв", "Neco - Серве", "Neco - Сервер", "Neco - Серве", "Neco - Серв", "Neco - Сер", "Neco - Се", "Neco - С", "Neco - ", "Neco"];
let index = 0;

// Function to change the title
function changeTitle() {
    document.title = titles[index];
    index = (index + 1) % titles.length; // Loop through titles
}

// Change title every 2 seconds
setInterval(changeTitle, 500);





