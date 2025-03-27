VideoDubber Discord Text Generator
A React-based web application for creating colored text messages for Discord using ANSI color codes. Built with Mantine UI, this tool allows users to visually style text in an editor and copy it as Discord-compatible ANSI-formatted text.

Features
Visual Text Styling: Apply foreground colors, background colors, bold, and underline styles directly in the editor.
Discord ANSI Output: Copy text with ANSI escape codes (e.g., \x1b[31m for red) that render as colored messages in Discord.
Resizable Editor: A customizable, contentEditable text area styled to resemble a <textarea>.
Playful Feedback: Displays fun messages (e.g., "GODLIKE!!!") after copying text.

Installation
Prerequisites
Node.js (v16 or higher recommended)
npm
Steps
Clone the Repository
bash

Collapse

Wrap

Copy
git clone https://github.com/yojalimagar/VideoDubber-discord-text-generator.git
cd VideoDubber-discord-text-generator
Install Dependencies
bash

Collapse

Wrap

Copy
npm install
Run the App
bash

Collapse

Wrap

Copy
npm start
The app will launch at http://localhost:3000 in your browser.
Usage
Open the app in your browser.
Type or edit text in the editor.
Select text and use the color or style buttons (e.g., "Red" or "Bold") to apply visual styles.
Click "Copy text as Discord formatted" to copy the ANSI-formatted text.
Paste it into a Discord message within a code block (e.g., ansi ... ) to see the colors.
Project Structure
text

Collapse

Wrap

Copy
VideoDubber-discord-text-generator/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── TextEditor.jsx       # Editor with contentEditable Box
│   │   ├── ColorButtons.jsx    # Buttons for applying styles
│   │   ├── Header.jsx          # Header component
│   │   ├── About.jsx           # About section
│   │   ├── Footer.jsx          # Footer component
│   │   └── ColorBoard.jsx      # Optional color palette
│   ├── App.jsx                 # Main app logic
│   ├── App.css                 # Global styles
│   └── index.js                # Entry point
├── package.json
└── README.md
Customization
Editor Appearance: Edit TextEditor.jsx’s sx prop or add a TextEditor.css file to adjust width, height, or colors.
Color Palette: Modify ansiStyles in App.jsx to change or add colors.
Copy Messages: Update funnyCopyMessages in TextEditor.jsx for custom feedback.
Technical Details
Framework: React
UI Library: Mantine (@mantine/core, @mantine/hooks)
Styling: Combination of Mantine’s sx prop and global App.css. Note: Global CSS may override Box styles; see "Troubleshooting" below.
Core Logic:
contentEditable Box for rich text editing.
DOM manipulation to apply styles and generate ANSI codes.
Troubleshooting
Styles Not Applying: If the editor’s appearance (e.g., width, background) doesn’t match expectations, global CSS in App.css might be overriding Box styles. Fixes:
Add !important to sx properties in TextEditor.jsx:
javascript

Collapse

Wrap

Copy
sx={{ width: '1400px !important', backgroundColor: '#0D1117 !important', /* ... */ }}
Increase specificity by wrapping the Box in a unique class (e.g., .text-editor-container .custom-text-editor) and scoping styles in TextEditor.css.
Check App.css for broad selectors like div { background-color: #fff; } and exclude the editor (e.g., div:not(.custom-text-editor)).
Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.
Credits
Inspired by Rebane2001’s HTML Colored Text Generator.
ANSI code reference from kkrypt0nn’s guide.
License
This project is released into the public domain under the Unlicense. You’re free to use, modify, or distribute it as you see fit.
