const sourcesBySubject = {
  science: [
    {
      source: { title: 'The Science of Learning', type: 'Book', authors: 'Smith, J.', year: '2020' },
      correct: 'Smith, J. (2020). The Science of Learning. Oxford University Press.',
      options: [
        'Smith, J. (2020). The Science of Learning. Oxford University Press.',
        'J. Smith. The Science of Learning. Oxford: Oxford University Press, 2020.',
        'Smith J 2020 The Science of Learning Oxford University Press'
      ]
    },
    {
      source: { title: 'Quantum Mechanics Explained', type: 'Book', authors: 'Nguyen, T.', year: '2022' },
      correct: 'Nguyen, T. (2022). Quantum Mechanics Explained. Cambridge: Cambridge University Press.',
      options: [
        'Nguyen, T. (2022). Quantum Mechanics Explained. Cambridge: Cambridge University Press.',
        'T. Nguyen. Quantum Mechanics Explained. Cambridge University Press, 2022.',
        'Nguyen T 2022 Quantum Mechanics Explained Cambridge Cambridge University Press'
      ]
    },
    {
      source: { title: 'Genetics Today', type: 'Book', authors: 'Lee, A.', year: '2019' },
      correct: 'Lee, A. (2019). Genetics Today. New York: Routledge.',
      options: [
        'Lee, A. (2019). Genetics Today. New York: Routledge.',
        'A. Lee. Genetics Today. Routledge, 2019.',
        'Lee A 2019 Genetics Today New York Routledge'
      ]
    },
    // Article and website examples to broaden Harvard references
    {
      source: { title: 'Advances in CRISPR technology', type: 'Journal Article', authors: 'Garcia, M. & Patel, R.', year: '2021' },
      correct: 'Garcia, M. & Patel, R. (2021). Advances in CRISPR technology. Journal of Molecular Biology, 433(15), 167012.',
      options: [
        'Garcia, M. & Patel, R. (2021). Advances in CRISPR technology. Journal of Molecular Biology, 433(15), 167012.',
        'M. Garcia and R. Patel. Advances in CRISPR technology. Journal of Molecular Biology 2021.',
        'Garcia M, Patel R (2021) Advances in CRISPR technology Journal of Molecular Biology 433(15) 167012'
      ]
    },
    {
      source: { title: 'Coronavirus disease (COVID-19) advice for the public', type: 'Webpage', authors: 'World Health Organization (WHO)', year: '2020' },
      correct: 'World Health Organization (WHO). (2020). Coronavirus disease (COVID-19) advice for the public. Available at: https://www.who.int/ (Accessed: 12 March 2021).',
      options: [
        'World Health Organization (WHO). (2020). Coronavirus disease (COVID-19) advice for the public. Available at: https://www.who.int/ (Accessed: 12 March 2021).',
        'WHO. COVID-19 advice for the public. 2020.',
        'World Health Organization. (2020) Coronavirus disease (COVID-19) advice for the public: who.int'
      ]
    },
    // GenAI examples
    {
      source: { title: 'GPT-4 Technical Report', type: 'Report', authors: 'OpenAI', year: '2023' },
      correct: 'OpenAI. (2023). GPT-4 Technical Report. Available at: https://arxiv.org/abs/2303.08774 (Accessed: 19 September 2025).',
      options: [
        'OpenAI. (2023). GPT-4 Technical Report. Available at: https://arxiv.org/abs/2303.08774 (Accessed: 19 September 2025).',
        'OpenAI (2023) GPT-4 Technical Report arXiv 2303.08774',
        'OpenAI 2023 GPT4 Technical Report Available at arxiv.org'
      ]
    }
  ],
  history: [
    {
      source: { title: 'History of Art', type: 'Book', authors: 'Brown, L.', year: '2018' },
      correct: 'Brown, L. (2018). History of Art. Cambridge: Cambridge University Press.',
      options: [
        'Brown, L. (2018). History of Art. Cambridge: Cambridge University Press.',
        'L. Brown, History of Art, Cambridge University Press, 2018.',
        'Brown L 2018 History of Art Cambridge Cambridge University Press'
      ]
    },
    {
      source: { title: 'The Roman Empire', type: 'Book', authors: 'Evans, M.', year: '2017' },
      correct: 'Evans, M. (2017). The Roman Empire. London: Penguin.',
      options: [
        'Evans, M. (2017). The Roman Empire. London: Penguin.',
        'M. Evans. The Roman Empire. Penguin, 2017.',
        'Evans M 2017 The Roman Empire London Penguin'
      ]
    },
    {
      source: { title: 'Medieval Europe', type: 'Book', authors: 'Taylor, S.', year: '2021' },
      correct: 'Taylor, S. (2021). Medieval Europe. Oxford: Oxford University Press.',
      options: [
        'Taylor, S. (2021). Medieval Europe. Oxford: Oxford University Press.',
        'S. Taylor. Medieval Europe. Oxford University Press, 2021.',
        'Taylor S 2021 Medieval Europe Oxford Oxford University Press'
      ]
    },
    {
      source: { title: 'Empire: How Britain Made the Modern World', type: 'Book', authors: 'Ferguson, N.', year: '2003' },
      correct: 'Ferguson, N. (2003). Empire: How Britain Made the Modern World. London: Allen Lane.',
      options: [
        'Ferguson, N. (2003). Empire: How Britain Made the Modern World. London: Allen Lane.',
        'N. Ferguson. Empire. Allen Lane, 2003.',
        'Ferguson N 2003 Empire How Britain Made the Modern World London Allen Lane'
      ]
    }
  ],
  literature: [
    {
      source: { title: 'Modern Poetry', type: 'Book', authors: 'Johnson, M.', year: '2015' },
      correct: 'Johnson, M. (2015). Modern Poetry. New York: Routledge.',
      options: [
        'Johnson, M. (2015). Modern Poetry. New York: Routledge.',
        'M. Johnson. Modern Poetry. Routledge, 2015.',
        'Johnson M 2015 Modern Poetry New York Routledge'
      ]
    },
    {
      source: { title: 'Shakespearean Drama', type: 'Book', authors: 'Clark, E.', year: '2016' },
      correct: 'Clark, E. (2016). Shakespearean Drama. London: Penguin.',
      options: [
        'Clark, E. (2016). Shakespearean Drama. London: Penguin.',
        'E. Clark. Shakespearean Drama. Penguin, 2016.',
        'Clark E 2016 Shakespearean Drama London Penguin'
      ]
    },
    {
      source: { title: 'The Novel in the 21st Century', type: 'Book', authors: 'Miller, R.', year: '2020' },
      correct: 'Miller, R. (2020). The Novel in the 21st Century. Cambridge: Cambridge University Press.',
      options: [
        'Miller, R. (2020). The Novel in the 21st Century. Cambridge: Cambridge University Press.',
        'R. Miller. The Novel in the 21st Century. Cambridge University Press, 2020.',
        'Miller R 2020 The Novel in the 21st Century Cambridge Cambridge University Press'
      ]
    },
    {
      source: { title: 'Why Marx Was Right', type: 'Book', authors: 'Eagleton, T.', year: '2011' },
      correct: 'Eagleton, T. (2011). Why Marx Was Right. New Haven: Yale University Press.',
      options: [
        'Eagleton, T. (2011). Why Marx Was Right. New Haven: Yale University Press.',
        'T. Eagleton. Why Marx Was Right. Yale University Press, 2011.',
        'Eagleton T 2011 Why Marx Was Right New Haven Yale University Press'
      ]
    }
  ],
  psychology: [
    {
      source: { title: 'Cognitive Psychology', type: 'Book', authors: 'Adams, P.', year: '2018' },
      correct: 'Adams, P. (2018). Cognitive Psychology. New York: Routledge.',
      options: [
        'Adams, P. (2018). Cognitive Psychology. New York: Routledge.',
        'P. Adams. Cognitive Psychology. Routledge, 2018.',
        'Adams P 2018 Cognitive Psychology New York Routledge'
      ]
    },
    {
      source: { title: 'Social Development', type: 'Book', authors: 'Baker, S.', year: '2021' },
      correct: 'Baker, S. (2021). Social Development. Oxford: Oxford University Press.',
      options: [
        'Baker, S. (2021). Social Development. Oxford: Oxford University Press.',
        'S. Baker. Social Development. Oxford University Press, 2021.',
        'Baker S 2021 Social Development Oxford Oxford University Press'
      ]
    },
    {
      source: { title: 'Theories of Personality', type: 'Book', authors: 'Davis, L.', year: '2019' },
      correct: 'Davis, L. (2019). Theories of Personality. London: Penguin.',
      options: [
        'Davis, L. (2019). Theories of Personality. London: Penguin.',
        'L. Davis. Theories of Personality. Penguin, 2019.',
        'Davis L 2019 Theories of Personality London Penguin'
      ]
    },
    {
      source: { title: 'Diagnostic and Statistical Manual of Mental Disorders (5th ed.)', type: 'Book', authors: 'American Psychiatric Association', year: '2013' },
      correct: 'American Psychiatric Association. (2013). Diagnostic and Statistical Manual of Mental Disorders (5th ed.). Washington, DC: APA.',
      options: [
        'American Psychiatric Association. (2013). Diagnostic and Statistical Manual of Mental Disorders (5th ed.). Washington, DC: APA.',
        'APA (2013) Diagnostic and Statistical Manual of Mental Disorders (5th ed.)',
        'American Psychiatric Association 2013 DSM-5 Washington DC APA'
      ]
    },
    // GenAI example
    {
      source: { title: 'Artificial Intelligence: A Modern Approach (4th ed.)', type: 'Book', authors: 'Russell, S. & Norvig, P.', year: '2021' },
      correct: 'Russell, S. & Norvig, P. (2021). Artificial Intelligence: A Modern Approach (4th ed.). Harlow: Pearson. (Ch. on generative models).',
      options: [
        'Russell, S. & Norvig, P. (2021). Artificial Intelligence: A Modern Approach (4th ed.). Harlow: Pearson. (Ch. on generative models).',
        'S. Russell and P. Norvig. Artificial Intelligence: A Modern Approach. 4th ed., Pearson, 2021.',
        'Russell S, Norvig P 2021 AI A Modern Approach 4th ed Harlow Pearson'
      ]
    }
  ],
  business: [
    {
      source: { title: 'Business Ethics', type: 'Book', authors: 'Green, T.', year: '2017' },
      correct: 'Green, T. (2017). Business Ethics. New York: Routledge.',
      options: [
        'Green, T. (2017). Business Ethics. New York: Routledge.',
        'T. Green. Business Ethics. Routledge, 2017.',
        'Green T 2017 Business Ethics New York Routledge'
      ]
    },
    {
      source: { title: 'Marketing Principles', type: 'Book', authors: 'Hall, J.', year: '2020' },
      correct: 'Hall, J. (2020). Marketing Principles. Oxford: Oxford University Press.',
      options: [
        'Hall, J. (2020). Marketing Principles. Oxford: Oxford University Press.',
        'J. Hall. Marketing Principles. Oxford University Press, 2020.',
        'Hall J 2020 Marketing Principles Oxford Oxford University Press'
      ]
    },
    {
      source: { title: 'Financial Management', type: 'Book', authors: 'King, S.', year: '2018' },
      correct: 'King, S. (2018). Financial Management. Cambridge: Cambridge University Press.',
      options: [
        'King, S. (2018). Financial Management. Cambridge: Cambridge University Press.',
        'S. King. Financial Management. Cambridge University Press, 2018.',
        'King S 2018 Financial Management Cambridge Cambridge University Press'
      ]
    },
    {
      source: { title: 'The Five Competitive Forces That Shape Strategy', type: 'Journal Article', authors: 'Porter, M. E.', year: '2008' },
      correct: 'Porter, M. E. (2008). The Five Competitive Forces That Shape Strategy. Harvard Business Review, 86(1), 78–93.',
      options: [
        'Porter, M. E. (2008). The Five Competitive Forces That Shape Strategy. Harvard Business Review, 86(1), 78–93.',
        'M. Porter. Five Forces. Harvard Business Review, 2008.',
        'Porter ME (2008) The Five Competitive Forces That Shape Strategy HBR 86(1) 78–93'
      ]
    },
    // GenAI examples
    {
      source: { title: 'ChatGPT (Sep 2025 version)', type: 'Webpage', authors: 'OpenAI', year: '2025' },
      correct: 'OpenAI. (2025). ChatGPT (Sep 2025 version) [Large language model]. Available at: https://chat.openai.com/ (Accessed: 19 September 2025).',
      options: [
        'OpenAI. (2025). ChatGPT (Sep 2025 version) [Large language model]. Available at: https://chat.openai.com/ (Accessed: 19 September 2025).',
        'OpenAI (2025) ChatGPT [LLM] Available at chat.openai.com',
        'OpenAI 2025 ChatGPT Sep 2025 version Large language model Accessed 19 Sept 2025'
      ]
    }
  ]
};

let current = 0;
let fallingInterval;
let score = 0;
let subject = 'science';
let sources = sourcesBySubject[subject];

// New question type: choose correct in-text citation for a given reference and sample text
// We'll mix question types: 'reference-to-full' (existing) and 'intext-citation'
const QUESTION_TYPES = {
  FULL_REFERENCE: 'reference-to-full',
  INTEXT_CITATION: 'intext-citation'
};
let currentType = QUESTION_TYPES.FULL_REFERENCE;

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
  const sampleText = document.getElementById('sample-text');
  if (sampleText) sampleText.style.display = 'none';
  const falling = document.getElementById('falling-source');
  if (falling) { falling.style.display = 'block'; falling.style.top = '0px'; }
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
  let options = [...q.options];
  shuffle(options);
  const falling = document.getElementById('falling-source');
  const sampleText = document.getElementById('sample-text');
  // Randomly decide question type, bias slightly towards FULL_REFERENCE
  currentType = Math.random() < 0.6 ? QUESTION_TYPES.FULL_REFERENCE : QUESTION_TYPES.INTEXT_CITATION;
  if (currentType === QUESTION_TYPES.FULL_REFERENCE) {
    if (sampleText) sampleText.style.display = 'none';
    falling.style.display = 'block';
    falling.style.top = '0px';
  // Show a summary card using structured metadata (non 1:1 with answers)
  falling.textContent = buildSourceSummary(q.source);
    animateFalling();
  } else {
    // In-text citation question
    // Build sample text and 3 in-text options from the reference
    const intext = buildInTextOptions(q.correct);
    options = intext.options;
    q.correctInText = intext.correct; // attach for checking
    // Show the full reference statically in the dashed box, and make the sample paragraph fall
    if (sampleText) {
      sampleText.style.display = 'block';
      sampleText.textContent = q.correct; // static reference in dashed style
    }
    falling.style.display = 'block';
    falling.style.top = '0px';
    falling.textContent = intext.sampleParagraphMasked; // falling sample paragraph with placeholder
    animateFalling();
  }
  options.forEach((opt, i) => {
    const btn = document.getElementById('option' + (i + 1));
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
  });
}

function animateFalling() {
  const falling = document.getElementById('falling-source');
  let pos = 0;
  clearInterval(fallingInterval);
  // Make the falling much slower and dynamic based on container height
  const container = document.getElementById('game-container');
  const optionsEl = document.getElementById('options');
  const buffer = optionsEl ? (container.offsetHeight - optionsEl.offsetTop + 12) : 100;
  const maxPos = Math.max(60, container.offsetHeight - buffer); // keep safe area above options
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
  const q = sources[current];
  const isCorrect = currentType === QUESTION_TYPES.FULL_REFERENCE
    ? selected === q.correct
    : selected === q.correctInText;
  if (isCorrect) {
    score++;
    updateScore();
    current++;
    nextQuestion();
  } else {
    gameOver();
  }
}

function gameOver() {
  const over = document.getElementById('game-over');
  over.style.display = 'flex';
}

// Build in-text citation options for a given Harvard reference
function buildInTextOptions(reference) {
  // Try to parse "Author, A. (Year). Title. City: Publisher." and multi-author variants.
  // Fallback to simple patterns if regex fails.
  const sampleBase = 'This study provides evidence supporting the central claim ';
  let authorsPart = '';
  let year = '';
  const authorYearMatch = reference.match(/^(.*?)\s*\((\d{4})\)/);
  if (authorYearMatch) {
    authorsPart = authorYearMatch[1];
    year = authorYearMatch[2];
  }
  // Normalize authors for in-text, handling corporate authors and & separators
  let correct;
  if (!authorsPart) {
    correct = `(Unknown, ${year || 'n.d.'})`;
  } else if (/\b&\b|,\s*\&/.test(authorsPart)) {
    // Already has ampersand, keep surnames only
    const surnames = authorsPart.split(/\s*&\s*|,\s*&\s*/).map(s => s.split(',')[0].trim());
    correct = `(${surnames.join(' & ')}, ${year})`;
  } else if (/,/.test(authorsPart)) {
    // Format like "Surname, A." possibly with second author like "Surname, A., Surname, B."
    const parts = authorsPart.split(/,\s*/);
    const surnames = [];
    for (let i = 0; i < parts.length; i += 2) {
      surnames.push(parts[i]);
    }
    if (surnames.length > 2) {
      correct = `(${surnames[0]} et al., ${year})`;
    } else if (surnames.length === 2) {
      correct = `(${surnames[0]} & ${surnames[1]}, ${year})`;
    } else {
      correct = `(${surnames[0]}, ${year})`;
    }
  } else {
    // Corporate author or single word
    correct = `(${authorsPart}, ${year})`;
  }

  const wrong1 = correct.replace('(', '(').replace(/\d{4}/, (y)=>String(Number(y)+1));
  const wrong2 = correct.replace('(', '(').replace(', ', ' ');

  const sampleParagraph = sampleBase + correct + ', highlighting methodological rigor.';
  // Masked version for the falling snippet to avoid revealing the answer
  const sampleParagraphMasked = sampleBase + '(Citation needed)' + ', highlighting methodological rigor.';
  // Return shuffled options
  const options = [correct, wrong1, wrong2];
  shuffle(options);
  return { correct, options, sampleParagraph, sampleParagraphMasked };
}

// Build a non-1:1 summary for the falling bubble using the full reference
function buildSourceSummary(refOrObj) {
  // If an object is provided, prefer its metadata
  if (typeof refOrObj === 'object' && refOrObj !== null) {
    const { title = 'Untitled', type = 'Source', authors = 'Unknown', year = 'n.d.' } = refOrObj;
    const icon = type === 'Book' ? '📘' : type === 'Webpage' ? '🌐' : type === 'Journal Article' ? '📰' : '📄';
    return `${icon} ${type} — ${title} • ${authors} (${year})`;
  }
  const fullReference = String(refOrObj);
  // Extract authors and year
  const ay = fullReference.match(/^(.*?)\s*\((\d{4})\)/);
  const authors = ay ? ay[1] : 'Unknown';
  const year = ay ? ay[2] : 'n.d.';
  // Extract title between ") . Title . " pattern
  const titleMatch = fullReference.match(/\)\.\s*(.*?)\./);
  const title = titleMatch ? titleMatch[1] : 'Untitled';
  // Infer type from cues
  const lower = fullReference.toLowerCase();
  let type = 'Source';
  let icon = '📄';
  if (lower.includes('available at:') || lower.includes('http')) {
    type = 'Webpage'; icon = '🌐';
  } else if (/\d+\s*\(\d+\)/.test(fullReference) || lower.includes('review') || lower.includes('journal')) {
    type = 'Journal Article'; icon = '📰';
  } else if (/[^:]+:\s*[^.]+\./.test(fullReference)) {
    // City: Publisher.
    type = 'Book'; icon = '📘';
  } else if (lower.includes('technical report') || lower.includes('report')) {
    type = 'Report'; icon = '📄';
  }
  // Compose concise summary
  return `${icon} ${type} — ${title} • ${authors} (${year})`;
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
  // Wire restart button
  const restart = document.getElementById('restart-btn');
  if (restart) restart.addEventListener('click', startGame);
  startGame();
};
