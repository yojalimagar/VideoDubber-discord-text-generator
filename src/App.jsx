import { useState, useRef } from 'react';
import { Container } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import Header from './components/Header';
import About from './components/About';
import ColorButtons from './components/ColorButtons';
import TextEditor from './components/TextEditor';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [copyCount, setCopyCount] = useState(0);
  const clipboard = useClipboard({ timeout: 2000 });
  const textAreaRef = useRef(null); // Ref for TextEditor
  const aboutRef = useRef(null); // Ref for About

  const ansiStyles = {
    30: { backgroundColor: '#4f545c' },
    31: { backgroundColor: '#dc322f' },
    32: { backgroundColor: '#859900' },
    33: { backgroundColor: '#b58900' },
    34: { backgroundColor: '#268bd2' },
    35: { backgroundColor: '#d33682' },
    36: { backgroundColor: '#2aa198' },
    37: { backgroundColor: '#ffffff' },
    40: { backgroundColor: '#002b36' },
    41: { backgroundColor: '#cb4b16' },
    42: { backgroundColor: '#586e75' },
    43: { backgroundColor: '#657b83' },
    44: { backgroundColor: '#839496' },
    45: { backgroundColor: '#6c71c4' },
    46: { backgroundColor: '#93a1a1' },
    47: { backgroundColor: '#fdf6e3' },
  };

  const applyStyle = (ansiCode) => {
    const selection = window.getSelection();
    if (!selection.toString()) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.className = `ansi-${ansiCode}`;
    span.textContent = selection.toString();

    if (ansiCode >= 30 && ansiCode <= 37) {
      span.style.color = ansiStyles[ansiCode].backgroundColor;
    } else if (ansiCode >= 40 && ansiCode <= 47) {
      span.style.backgroundColor = ansiStyles[ansiCode].backgroundColor;
    } else if (ansiCode === 1) {
      span.style.fontWeight = 'bold';
    } else if (ansiCode === 4) {
      span.style.textDecoration = 'underline';
    }

    range.deleteContents();
    range.insertNode(span);

    selection.removeAllRanges();
    selection.addRange(range);
    range.selectNodeContents(span);
  };

  const resetStyles = () => {
    if (textAreaRef.current) {
      textAreaRef.current.innerHTML = "Welcome to Rebane's Discord Colored Text Generator!";
    }
    if (aboutRef.current) {
      aboutRef.current.innerHTML = `
        <h3 style="text-align: center;">About</h3>
        <p style="text-align: center;">This is a simple app that creates colored Discord messages using the ANSI color codes available on the latest Discord desktop versions.</p>
        <p style="text-align: center;">To use this, write your text, select parts of it and assign colors to them, then copy it using the button below, and send in a Discord message.</p>
        <h3 style="text-align: center;">Source Code</h3>
        <p style="text-align: center;">This app runs entirely in your browser and the source code is freely available on <a href="https://gist.github.com/rebane2001/07f2d8e80df053c70a1576d27eabe97c" style="color: blue;">GitHub</a>. Shout out to kkrypt0nn for <a href="https://gist.github.com/kkrypt0nn/a02506f3712ff2d1c8ca7c9e0aed7c06" style="color: blue;">this guide</a>.</p>
      `;
    }
  };

  const nodesToANSI = (nodes, states) => {
    let text = '';
    for (const node of nodes) {
      if (node.nodeType === 3) {
        text += node.textContent;
        continue;
      }
      if (node.nodeName === 'BR') {
        text += '\n';
        continue;
      }
      const ansiCode = +(node.className.split('-')[1]);
      const newState = { ...states[states.length - 1] };

      if (ansiCode < 30) newState.st = ansiCode;
      if (ansiCode >= 30 && ansiCode < 40) newState.fg = ansiCode;
      if (ansiCode >= 40) newState.bg = ansiCode;

      states.push(newState);
      text += `\x1b[${newState.st};${ansiCode >= 40 ? newState.bg : newState.fg}m`;
      text += nodesToANSI(node.childNodes, states);
      states.pop();
      text += '\x1b[0m';
      if (states[states.length - 1].fg !== 2) text += `\x1b[${states[states.length - 1].st};${states[states.length - 1].fg}m`;
      if (states[states.length - 1].bg !== 2) text += `\x1b[${states[states.length - 1].st};${states[states.length - 1].bg}m`;
    }
    return text;
  };

  const copyToClipboard = (textArea, nodesToANSI) => {
    const toCopy = '```ansi\n' + nodesToANSI(textArea.childNodes, [{ fg: 2, bg: 2, st: 2 }]) + '\n```';
    clipboard.copy(toCopy);
    setCopyCount((prev) => Math.min(11, prev + 1));
  };

  return (
    <Container size="sm" py="xl">
      <Header />
      <About ref={aboutRef} />
      <ColorButtons applyStyle={applyStyle} resetStyles={resetStyles} />
      <TextEditor 
        copyToClipboard={copyToClipboard} 
        nodesToANSI={nodesToANSI} 
        copyCount={copyCount} 
        clipboard={clipboard} 
        ref={textAreaRef}
      />
      <Footer />
    </Container>
  );
}

export default App;