# Academic Referencing Game 📚

An interactive educational game designed to help students practice and learn proper academic citation formats. Test your knowledge of different referencing styles across multiple academic subjects!

## 🎮 Game Overview

The Academic Referencing Game presents students with incomplete academic references that are "falling" down the screen. Players must quickly select the correct, properly formatted citation from three options before the reference reaches the bottom. The game covers multiple academic subjects and helps reinforce proper citation formatting skills.

## ✨ Features

- Multiple Subject Areas: Science, History, Literature, Psychology, Business
- Dynamic Gameplay: Reference mode has falling prompts with time pressure
- New In-text Citation Mode: Given a full reference and a sample paragraph, choose the correct Harvard-style in-text citation from 3 options
- Broader Harvard References: Mix of books, journal articles, reports and web sources
- Score Tracking: Keep track of correct answers
- Responsive Design: Works on desktop and mobile devices with fluid typography and no overlap
- Clean UI: Modern, accessible interface with smooth animations

## 🎯 How to Play

1. Select a Subject from the dropdown
2. A question appears in one of two modes:
   - Reference mode: a partially blanked reference falls from the top
   - In-text mode: a full reference displays with a sample paragraph
3. Choose the correct option from the three choices at the bottom
4. Beat the Clock: in Reference mode, answer before it reaches the bottom (In-text mode has no fall)
5. Build Your Score: each correct answer increases your score
6. Restart: after Game Over, click the Restart button to play again

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/taggatron/Referencinggame.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Referencinggame
   ```

3. **Open the game**:
   - Simply open `index.html` in your web browser
   - Or use a local server for development:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     ```

4. **Start playing**!

## 📁 Project Structure

```
Referencinggame/
├── index.html          # Main HTML file
├── game.js             # Game logic and functionality
├── style.css           # Styling and animations
└── README.md           # Project documentation
```

## 🎨 Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, shadows, and responsive design
- **Vanilla JavaScript**: Game logic, animations, and interactivity

### Key Features Implementation
- **Falling Animation**: Smooth 60fps animation using `setInterval`
- **Dynamic Content**: Subject-based question pools with randomization
- **Responsive Layout**: Flexible design that adapts to different screen sizes
- **Score System**: Real-time score tracking and display

## 🎓 Educational Value
## 🤖 Citing Generative AI (Harvard examples)

Below are example patterns often recommended by institutions. Always check your university’s specific Harvard guide.

- In-text (tool as author):
   - (OpenAI, 2025)
   - Narrative: According to OpenAI (2025), …

- Reference list (model output used):
   - OpenAI. (2025). ChatGPT (Sep 2025 version) [Large language model]. Available at: https://chat.openai.com/ (Accessed: 19 September 2025).

- Reference list (technical report):
   - OpenAI. (2023). GPT-4 Technical Report. Available at: https://arxiv.org/abs/2303.08774 (Accessed: 19 September 2025).

- In-text (prompted content paraphrased):
   - Paraphrase: Recent outputs suggest … (OpenAI, 2025).
   - Quoted exact wording should include a quote and an indication of the AI source.

Tip: Include a short methodology note in your assignment (e.g., “An LLM was used to ideate examples. Outputs were checked and edited.”) if your institution requires disclosure.


This game helps students with:
- **Citation Format Recognition**: Practice identifying correct academic formatting
- **Subject-Specific References**: Learn conventions across different academic disciplines
- **Time Management**: Develop quick recognition skills under pressure
- **Reference Components**: Understand author, year, title, publisher, and location formatting

## 🤝 Contributing

Contributions are welcome! Here are some ways you can help:

1. **Add More Subjects**: Expand the question pool with additional academic areas
2. **Improve Styling**: Enhance the visual design and user experience
3. **Add Features**: Implement difficulty levels, timer options, or multiplayer modes
4. **Bug Fixes**: Report and fix any issues you encounter

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Known Issues

- Game speed (Reference mode) is currently fixed - future versions may include difficulty settings

## 🚀 Future Enhancements

- [ ] Multiple citation styles (APA, MLA, Chicago, Harvard)
- [ ] Difficulty levels with varying fall speeds
- [ ] Achievement system and badges
- [ ] Multiplayer competitive mode
- [ ] Additional source types (journals, websites, etc.)
- [ ] Statistics and progress tracking
- [ ] Audio feedback and sound effects

## 📧 Contact

**Daniel Tagg** - [@taggatron](https://github.com/taggatron)

Project Link: [https://github.com/taggatron/Referencinggame](https://github.com/taggatron/Referencinggame)

## 🙏 Acknowledgments

- Inspired by the need for better academic writing tools
- Designed for students and educators focusing on proper citation practices
- Built with accessibility and educational effectiveness in mind

---

**Made with ❤️ for education**
