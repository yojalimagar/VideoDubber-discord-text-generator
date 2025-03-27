import { forwardRef } from 'react';
import { Stack, Box } from '@mantine/core';

const About = forwardRef((props, ref) => {
  const initialContent = `
    <h3 style="text-align: center;">About</h3>
    <p style="text-align: center;">This is a simple app that creates colored Discord messages using the ANSI color codes available on the latest Discord desktop versions.</p>
    <p style="text-align: center;">To use this, write your text, select parts of it and assign colors to them, then copy it using the button below, and send in a Discord message.</p>
    <h3 style="text-align: center;">Source Code</h3>
    <p style="text-align: center;">This app runs entirely in your browser and the source code is freely available on <a href="https://gist.github.com/rebane2001/07f2d8e80df053c70a1576d27eabe97c" style="color: blue;">GitHub</a>. Shout out to kkrypt0nn for <a href="https://gist.github.com/kkrypt0nn/a02506f3712ff2d1c8ca7c9e0aed7c06" style="color: blue;">this guide</a>.</p>
  `;

  return (
    <Stack spacing="md" mb="xl">
      <Box
        ref={ref} // Forward ref directly to Box
        sx={{
          padding: 20,
          backgroundColor: '#2F3136',
          color: '#B9BBBE',
          border: '3px solid #202225',
          borderRadius: 5,
          fontFamily: 'monospace',
          whiteSpace: 'pre-wrap',
        }}
        dangerouslySetInnerHTML={{ __html: initialContent }}
      />
    </Stack>
  );
});

export default About;