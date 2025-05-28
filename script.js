
    const startBtn = document.getElementById('start-btn');
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    const sections = document.querySelectorAll('main > section');
    const links = document.querySelectorAll('.menu a');

    startBtn.addEventListener('click', () => {
      welcomeScreen.classList.add('hidden');
      mainContent.classList.remove('hidden');
      showSection('teoria');
      links.forEach(link => link.classList.remove('active'));
      links[0].classList.add('active');
      sections[0].focus();
    });

    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const id = link.getAttribute('href').substring(1);
        showSection(id);
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        document.getElementById(id).focus();
      });
    });

    function showSection(id) {
      sections.forEach(sec => {
        if (sec.id === id) {
          sec.classList.add('active');
        } else {
          sec.classList.remove('active');
        }
      });
    }

    // Función para verificar quiz según respuesta correcta
    const quizAnswers = {
      teoria: "b"
      teoria:"c",
      tipos: "b",
      partes: "b",
      organelos: "a",
      funciones: "b",
      reproduccion: "b",
      transporte: "b",
      diferenciacion: "b",
      cultivo: "c",
      comparacion: "a"
    };

    document.querySelectorAll(".quiz button.check-quiz").forEach(button => {
      button.addEventListener("click", () => {
        const quizDiv = button.closest(".quiz");
        const topic = quizDiv.getAttribute("data-topic");
        const form = quizDiv.querySelector("form");
        const selected = form.querySelector("input[name='q1']:checked")?.value;

        const resultP = quizDiv.querySelector(".quiz-result");
        if (!selected) {
          resultP.textContent = "Por favor selecciona una opción antes de verificar.";
          resultP.style.color = "red";
          resultP.style.background = "rgba(255,0,0,0.1)";
          resultP.style.padding = "10px 15px";
          resultP.style.borderRadius = "6px";
          return;
        }

        if (selected === quizAnswers[topic]) {
          resultP.textContent = "¡Correcto! 👍";
          resultP.style.color = "green";
          resultP.style.background = "rgba(0,255,0,0.1)";
          resultP.style.padding = "10px 15px";
          resultP.style.borderRadius = "6px";
        } else {
          resultP.textContent = "Incorrecto. Intenta de nuevo.";
          resultP.style.color = "red";
          resultP.style.background = "rgba(255,0,0,0.1)";
          resultP.style.padding = "10px 15px";
          resultP.style.borderRadius = "6px";
        }
      });
    });
    document.getElementById('check-answers').addEventListener('click', function() {
            const answers = {
                q1: 'b', q2: 'c', q3: 'c', q4: 'b', q5: 'b',
                q6: 'b', q7: 'b', q8: 'b', q9: 'b', q10: 'b'
            };
            
            const feedbacks = {
                q1: 'Correcto! Robert Hooke fue quien en 1665 utilizó por primera vez el término "célula" al observar corcho.',
                q2: 'Correcto! Que "todas las células tienen núcleo" no es un postulado de la teoría celular (las procariotas no tienen núcleo definido).',
                q3: 'Correcto! Rudolf Virchow completó la teoría en 1855 con el principio "Toda célula proviene de otra célula".',
                q4: 'Correcto! El ADN como portador de información hereditaria es un postulado moderno de la teoría celular.',
                q5: 'Correcto! Theodor Schwann extendió en 1839 los descubrimientos de Schleiden (plantas) a los animales.',
                q6: 'Correcto! Hooke observó las paredes celulares de células muertas en el corcho, no las células completas.',
                q7: 'Correcto! La astrología no se ha beneficiado de la teoría celular, a diferencia de medicina, genética y biotecnología.',
                q8: 'Correcto! El microscopio fue esencial para observar células y desarrollar la teoría.',
                q9: 'Correcto! La similitud en composición química es un postulado moderno sobre estructura celular.',
                q10: 'Correcto! Virchow refutó la generación espontánea con su principio sobre el origen celular.'
            };
            
            let score = 0;
            let allAnswered = true;
            
            // Verificar cada pregunta
            for (let i = 1; i <= 10; i++) {
                const questionName = 'q' + i;
                const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
                const feedbackEl = document.getElementById(`feedback-${questionName}`);
                
                if (!selectedOption) {
                    allAnswered = false;
                    feedbackEl.textContent = 'Por favor selecciona una respuesta.';
                    feedbackEl.style.display = 'block';
                    feedbackEl.className = 'feedback incorrect';
                    continue;
                }
                
                if (selectedOption.value === answers[questionName]) {
                    score++;
                    feedbackEl.textContent = feedbacks[questionName];
                    feedbackEl.className = 'feedback correct';
                } else {
                    feedbackEl.textContent = 'Incorrecto. ' + feedbacks[questionName];
                    feedbackEl.className = 'feedback incorrect';
                }
                feedbackEl.style.display = 'block';
            }
            
            if (!allAnswered) {
                document.getElementById('quiz-result').textContent = 'Por favor responde todas las preguntas.';
                document.getElementById('quiz-result').className = 'result incorrect';
                document.getElementById('quiz-result').style.display = 'block';
                return;
            }
            
            // Mostrar resultados
            const resultEl = document.getElementById('quiz-result');
            const percentage = (score / 10) * 100;
            
            if (percentage >= 70) {
                resultEl.textContent = `¡Excelente! Obtuviste ${score}/10 (${percentage}%) respuestas correctas.`;
                resultEl.className = 'result correct';
            } else if (percentage >= 40) {
                resultEl.textContent = `Buen intento. Obtuviste ${score}/10 (${percentage}%) respuestas correctas. Sigue estudiando!`;
                resultEl.className = 'result';
            } else {
                resultEl.textContent = `Obtuviste ${score}/10 (${percentage}%) respuestas correctas. Te recomiendo repasar la teoría celular.`;
                resultEl.className = 'result incorrect';
            }
            
            resultEl.style.display = 'block';
            
            // Desplazarse al resultado
            resultEl.scrollIntoView({ behavior: 'smooth' });
        });
