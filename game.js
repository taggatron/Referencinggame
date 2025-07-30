const sourcesBySubject = {
  science: [
    {
      source: 'Smith, J. (2020). The Science of Learning. Oxford University Press.',
      correct: 'Smith, J. (2020). The Science of Learning. Oxford University Press.',
      options: [
        'Smith, J. (2020). The Science of Learning. Oxford University Press.',
        'J. Smith. The Science of Learning. Oxford: Oxford University Press, 2020.',
        'Smith J 2020 The Science of Learning Oxford University Press'
      ]
    },
    {
      source: 'Nguyen, T. (2022). Quantum Mechanics Explained. Cambridge: Cambridge University Press.',
      correct: 'Nguyen, T. (2022). Quantum Mechanics Explained. Cambridge: Cambridge University Press.',
      options: [
        'Nguyen, T. (2022). Quantum Mechanics Explained. Cambridge: Cambridge University Press.',
        'T. Nguyen. Quantum Mechanics Explained. Cambridge University Press, 2022.',
        'Nguyen T 2022 Quantum Mechanics Explained Cambridge Cambridge University Press'
      ]
    },
    {
      source: 'Lee, A. (2019). Genetics Today. New York: Routledge.',
      correct: 'Lee, A. (2019). Genetics Today. New York: Routledge.',
      options: [
        'Lee, A. (2019). Genetics Today. New York: Routledge.',
        'A. Lee. Genetics Today. Routledge, 2019.',
        'Lee A 2019 Genetics Today New York Routledge'
      ]
    }
  ],
  history: [
    {
      source: 'Brown, L. (2018). History of Art. Cambridge: Cambridge University Press.',
      correct: 'Brown, L. (2018). History of Art. Cambridge: Cambridge University Press.',
      options: [
        'Brown, L. (2018). History of Art. Cambridge: Cambridge University Press.',
        'L. Brown, History of Art, Cambridge University Press, 2018.',
        'Brown L 2018 History of Art Cambridge Cambridge University Press'
      ]
    },
    {
      source: 'Evans, M. (2017). The Roman Empire. London: Penguin.',
      correct: 'Evans, M. (2017). The Roman Empire. London: Penguin.',
      options: [
        'Evans, M. (2017). The Roman Empire. London: Penguin.',
        'M. Evans. The Roman Empire. Penguin, 2017.',
        'Evans M 2017 The Roman Empire London Penguin'
      ]
    },
    {
      source: 'Taylor, S. (2021). Medieval Europe. Oxford: Oxford University Press.',
      correct: 'Taylor, S. (2021). Medieval Europe. Oxford: Oxford University Press.',
      options: [
        'Taylor, S. (2021). Medieval Europe. Oxford: Oxford University Press.',
        'S. Taylor. Medieval Europe. Oxford University Press, 2021.',
        'Taylor S 2021 Medieval Europe Oxford Oxford University Press'
      ]
    }
  ],
  literature: [
    {
      source: 'Johnson, M. (2015). Modern Poetry. New York: Routledge.',
      correct: 'Johnson, M. (2015). Modern Poetry. New York: Routledge.',
      options: [
        'Johnson, M. (2015). Modern Poetry. New York: Routledge.',
        'M. Johnson. Modern Poetry. Routledge, 2015.',
        'Johnson M 2015 Modern Poetry New York Routledge'
      ]
    },
    {
      source: 'Clark, E. (2016). Shakespearean Drama. London: Penguin.',
      correct: 'Clark, E. (2016). Shakespearean Drama. London: Penguin.',
      options: [
        'Clark, E. (2016). Shakespearean Drama. London: Penguin.',
        'E. Clark. Shakespearean Drama. Penguin, 2016.',
        'Clark E 2016 Shakespearean Drama London Penguin'
      ]
    },
    {
      source: 'Miller, R. (2020). The Novel in the 21st Century. Cambridge: Cambridge University Press.',
      correct: 'Miller, R. (2020). The Novel in the 21st Century. Cambridge: Cambridge University Press.',
      options: [
        'Miller, R. (2020). The Novel in the 21st Century. Cambridge: Cambridge University Press.',
        'R. Miller. The Novel in the 21st Century. Cambridge University Press, 2020.',
        'Miller R 2020 The Novel in the 21st Century Cambridge Cambridge University Press'
      ]
    }
  ],
  psychology: [
    {
      source: 'Adams, P. (2018). Cognitive Psychology. New York: Routledge.',
      correct: 'Adams, P. (2018). Cognitive Psychology. New York: Routledge.',
      options: [
        'Adams, P. (2018). Cognitive Psychology. New York: Routledge.',
        'P. Adams. Cognitive Psychology. Routledge, 2018.',
        'Adams P 2018 Cognitive Psychology New York Routledge'
      ]
    },
    {
      source: 'Baker, S. (2021). Social Development. Oxford: Oxford University Press.',
      correct: 'Baker, S. (2021). Social Development. Oxford: Oxford University Press.',
      options: [
        'Baker, S. (2021). Social Development. Oxford: Oxford University Press.',
        'S. Baker. Social Development. Oxford University Press, 2021.',
        'Baker S 2021 Social Development Oxford Oxford University Press'
      ]
    },
    {
      source: 'Davis, L. (2019). Theories of Personality. London: Penguin.',
      correct: 'Davis, L. (2019). Theories of Personality. London: Penguin.',
      options: [
        'Davis, L. (2019). Theories of Personality. London: Penguin.',
        'L. Davis. Theories of Personality. Penguin, 2019.',
        'Davis L 2019 Theories of Personality London Penguin'
      ]
    }
  ],
  business: [
    {
      source: 'Green, T. (2017). Business Ethics. New York: Routledge.',
      correct: 'Green, T. (2017). Business Ethics. New York: Routledge.',
      options: [
        'Green, T. (2017). Business Ethics. New York: Routledge.',
        'T. Green. Business Ethics. Routledge, 2017.',
        'Green T 2017 Business Ethics New York Routledge'
      ]
    },
    {
      source: 'Hall, J. (2020). Marketing Principles. Oxford: Oxford University Press.',
      correct: 'Hall, J. (2020). Marketing Principles. Oxford: Oxford University Press.',
      options: [
        'Hall, J. (2020). Marketing Principles. Oxford: Oxford University Press.',
        'J. Hall. Marketing Principles. Oxford University Press, 2020.',
        'Hall J 2020 Marketing Principles Oxford Oxford University Press'
      ]
    },
    {
      source: 'King, S. (2018). Financial Management. Cambridge: Cambridge University Press.',
      correct: 'King, S. (2018). Financial Management. Cambridge: Cambridge University Press.',
      options: [
        'King, S. (2018). Financial Management. Cambridge: Cambridge University Press.',
        'S. King. Financial Management. Cambridge University Press, 2018.',
        'King S 2018 Financial Management Cambridge Cambridge University Press'
      ]
    }
  ]
};

let current = 0;
let fallingInterval;
let score = 0;
let subject = 'science';
let sources = sourcesBySubject[subject];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startGame() {
  current = 0;
  score = 0;
  document.getElementById('game-over').style.display = 'none';
  updateScore();
  sources = sourcesBySubject[subject];
  nextQuestion();
}

function updateScore() {
  document.getElementById('score').textContent = `Score: ${score}`;
}

function blankOutReference(ref) {
  // Randomly blank out one or two parts (author, year, title, publisher, city)
  // Use regex to find parts
  let parts = ref.match(/^(.*?), (\d{4})\. (.*?)\. (.*?): (.*?)\.$/);
  if (!parts) return ref;
  // parts: [full, author, year, title, city, publisher]
  let indices = [1,2,3,4,5];
  shuffle(indices);
  let blanks = indices.slice(0, Math.random() > 0.5 ? 2 : 1);
  let display = [parts[1], parts[2], parts[3], parts[4], parts[5]];
  blanks.forEach(i => {
    display[i-1] = '______';
  });
  return `${display[0]}, ${display[1]}. ${display[2]}. ${display[3]}: ${display[4]}.`;
}

function nextQuestion() {
  if (current >= sources.length) {
    current = 0;
  }
  const q = sources[current];
  const options = [...q.options];
  shuffle(options);
  const falling = document.getElementById('falling-source');
  falling.style.top = '0px';
  falling.textContent = blankOutReference(q.source);
  options.forEach((opt, i) => {
    const btn = document.getElementById('option' + (i + 1));
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
  });
  animateFalling();
}

function animateFalling() {
  const falling = document.getElementById('falling-source');
  let pos = 0;
  clearInterval(fallingInterval);
  // Make the falling much slower and dynamic based on container height
  const container = document.getElementById('game-container');
  const maxPos = container.offsetHeight - 100; // 100px buffer for options/buttons
  fallingInterval = setInterval(() => {
    if (pos >= maxPos) {
      gameOver();
      clearInterval(fallingInterval);
    } else {
      pos += 1.2; // much slower fall
      falling.style.top = pos + 'px';
    }
  }, 16); // ~60fps
}

function checkAnswer(selected) {
  clearInterval(fallingInterval);
  if (selected === sources[current].correct) {
    score++;
    updateScore();
    current++;
    nextQuestion();
  } else {
    gameOver();
  }
}

function gameOver() {
  document.getElementById('game-over').style.display = 'block';
}

document.getElementById('subject-select').addEventListener('change', function(e) {
  subject = e.target.value;
  sources = sourcesBySubject[subject];
  startGame();
});

window.onload = () => {
  if (!document.getElementById('score')) {
    const scoreDiv = document.createElement('div');
    scoreDiv.id = 'score';
    document.getElementById('game-container').appendChild(scoreDiv);
  }
  startGame();
};
