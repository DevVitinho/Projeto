// Mapeamento de detalhes dos exercícios
const exerciseData = {
    "Supino Reto": {
      description: "Exercício clássico para o desenvolvimento do peitoral maior.",
      steps: [
        "Deite-se no banco com os pés firmes no chão.",
        "Segure a barra com as mãos afastadas um pouco mais do que a largura dos ombros.",
        "Desça a barra até a linha do peito e empurre de volta para cima."
      ]
    },
    "Crucifixo": {
      description: "Isolamento para o peitoral, realizado com halteres.",
      steps: [
        "Deite-se em um banco plano segurando halteres.",
        "Abra os braços em um movimento semicircular até sentir alongamento no peito.",
        "Volte à posição inicial."
      ]
    },
    "Flexões": {
      description: "Exercício corporal para peitoral, tríceps e deltoides.",
      steps: [
        "Apoie as mãos no chão na largura dos ombros.",
        "Desça o corpo mantendo a coluna reta até o peito quase tocar o chão.",
        "Empurre o corpo de volta para a posição inicial."
      ]
    },
    // Adicione mais exercícios conforme necessário
  };
  
  // Função para exibir detalhes de um exercício
  function showExerciseDetails(exerciseName) {
    localStorage.setItem("selectedExercise", exerciseName);
    window.location.href = "detalhes.html";
  }
  
  // Carrega os detalhes do exercício na página de detalhes
  document.addEventListener("DOMContentLoaded", () => {
    const exerciseTitle = document.getElementById("exercise-title");
    const exerciseDetails = document.getElementById("exercise-details");
  
    const selectedExercise = localStorage.getItem("selectedExercise");
  
    if (selectedExercise && exerciseData[selectedExercise]) {
      const exercise = exerciseData[selectedExercise];
      exerciseTitle.textContent = selectedExercise;
  
      let detailsHTML = `<p>${exercise.description}</p><h3>Passos:</h3><ol>`;
      exercise.steps.forEach(step => {
        detailsHTML += `<li>${step}</li>`;
      });
      detailsHTML += "</ol>";
  
      exerciseDetails.innerHTML = detailsHTML;
    } else {
      exerciseTitle.textContent = "Exercício não encontrado";
      exerciseDetails.innerHTML = "<p>Volte à página principal para selecionar um exercício válido.</p>";
    }
  });
  