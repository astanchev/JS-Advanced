function solve() {
  let sectionsList = Array.from(document.getElementsByTagName('section'));

  Array.from(document.querySelectorAll('p.answer-text')).forEach((p) => {
    p.addEventListener('click', showNext);
  });

  let counter = 0;
  const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

  function showNext() {
    let currentSection = this.parentNode.parentNode.parentNode.parentNode;

    if (rightAnswers.includes(this.textContent)) {
      counter++;
    }

    if (currentSection === sectionsList[0]) {
      currentSection.style.display = 'none';
      sectionsList[1].style.display = 'block';

    } else if (currentSection === sectionsList[1]) {
      currentSection.style.display = 'none';
      sectionsList[2].style.display = 'block';

    } else if (currentSection === sectionsList[2]) {
      currentSection.style.display = 'none';
      document.querySelector('#results').style.display = 'block';

      let h1Result = document.querySelector('#results > li > h1');

      if (counter === 3) {
        h1Result.innerHTML = 'You are recognized as top JavaScript fan!';

      } else if (counter < 3) {
        h1Result.textContent = `You have ${counter} right answers`;
      }
    }
  }
}

function solve2() {
  const sections = document.querySelectorAll('section');
  const result = document.querySelector('#results > li > h1');
  const answers = ['2', '4', '2'];
  const divs = [...document.querySelectorAll('div.answer-wrap')];
  let finalScore = 0;
  let selectedSection = 0;

  for (const div of divs) {
    div.addEventListener('click', answer);
  }

  function answer() {
    if (selectedSection < 3) {

      const answer = this.parentElement.getAttribute('data-quizindex');
      if (answer === answers[selectedSection]) {
        finalScore++;
      }
      sections[selectedSection].classList.toggle('hidden');
      sections[selectedSection].style.display = 'none';
      selectedSection++;

      if (selectedSection < 3) {
        sections[selectedSection].classList.toggle('hidden');
        sections[selectedSection].style.display = 'block';
      } else {

        document.querySelector('#results').style.display = 'block';

        if (finalScore === 3) {
          result.textContent = 'You are recognized as top JavaScript fan!';
        } else {
          result.textContent = `You have ${finalScore} right answers`;
        }
      }
    }
  }
}