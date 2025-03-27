import { useRef, forwardRef } from 'react'; // Added forwardRef
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

  // Merge internal ref with forwarded ref
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
          ref={setRef} // Changed to use merged ref
          contentEditable
          suppressContentEditableWarning
          sx={{
            width: 600,
            minHeight: 200,
            borderRadius: 5,
            padding: 80,
            backgroundColor: '#2F3136',
            color: '#B9BBBE',
            border: '3px solid #202225',
            fontFamily: 'monospace',
            whiteSpace: 'pre-wrap',
            fontSize: '0.875rem',
            lineHeight: '1.125rem',
            outline: 'none',
            resize: 'both',
            overflow: 'auto',
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