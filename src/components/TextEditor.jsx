import { useRef, forwardRef } from 'react';
import { Center, Button, Box } from '@mantine/core';

const TextEditor = forwardRef(({ copyToClipboard, nodesToANSI, copyCount, clipboard }, ref) => {
  const textAreaRef = useRef(null);

  const funnyCopyMessages = [
    'Copied!',
    'Double Copy!',
    'Triple Copy!',
    'Dominating!!',
    'Rampage!!',
    'Mega Copy!!',
    'Unstoppable!!',
    'Wicked Sick!!',
    'Monster Copy!!!',
    'GODLIKE!!!',
    'BEYOND GODLIKE!!!!',
    Array(16).fill(0).reduce((p) => p + String.fromCharCode(Math.floor(Math.random() * 65535)), ''),
  ];

  const setRef = (node) => {
    textAreaRef.current = node;
    if (ref) {
      if (typeof ref === 'function') ref(node);
      else ref.current = node;
    }
  };

  return (
    <>
      <Center>
        <Box
          ref={setRef}
          contentEditable
          suppressContentEditableWarning
          className="custom-text-editor" // Unique class
          sx={{
            width: '1400px',
            minHeight: '200px',
            backgroundColor: '#0D1117',
            color: '#FFFFFF',
            border: '2px solid #30363D',
            borderRadius: '6px',
            padding: '10px',
            fontFamily: 'monospace',
            fontSize: '16px',
            lineHeight: '1.5',
            resize: 'both',
            outline: 'none',
            boxSizing: 'border-box',
            whiteSpace: 'pre-wrap',
            overflow: 'auto',
            boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
          }}
          dangerouslySetInnerHTML={{ __html: "Welcome to Rebane's Discord Colored Text Generator!" }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              document.execCommand('insertLineBreak');
              e.preventDefault();
            }
          }}
        />
      </Center>

      <Center mt="md">
        <Button
          onClick={() => copyToClipboard(textAreaRef.current, nodesToANSI)}
          color={copyCount <= 8 ? 'gray' : 'red'}
        >
          {clipboard.copied ? funnyCopyMessages[copyCount] : 'Copy text as Discord formatted'}
        </Button>
      </Center>
    </>
  );
});

export default TextEditor;