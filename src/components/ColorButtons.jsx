import { Group, Button, Text, Tooltip } from '@mantine/core';

const tooltipTexts = {
  30: 'Dark Gray (33%)',
  31: 'Red',
  32: 'Yellowish Green',
  33: 'Gold',
  34: 'Light Blue',
  35: 'Pink',
  36: 'Teal',
  37: 'White',
  40: 'Blueish Black',
  41: 'Rust Brown',
  42: 'Gray (40%)',
  43: 'Gray (45%)',
  44: 'Light Gray (55%)',
  45: 'Blurple',
  46: 'Light Gray (60%)',
  47: 'Cream White',
};

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

function ColorButtons({ applyStyle, resetStyles }) {
  return (
    <>
      <Group justify="center" mb="md">
        <Button onClick={resetStyles} variant="outline" color="#93a1a1">
          Reset All
        </Button>
        <Button onClick={() => applyStyle(1)} variant="outline" color="#93a1a1" styles={{ root: { fontWeight: 700 } }}>
          Bold
        </Button>
        <Button onClick={() => applyStyle(4)} variant="outline" color="#93a1a1" styles={{ root: { textDecoration: 'underline' } }}>
          Line
        </Button>
      </Group>

      <Group justify="center" mb="md">
        <Text fw={700}>FG</Text>
        {[30, 31, 32, 33, 34, 35, 36, 37].map((code) => (
          <Tooltip key={code} label={tooltipTexts[code]} position="top">
            <Button
              onClick={() => applyStyle(code)}
              variant="transparent" // Minimize Mantine background interference
              styles={{
                root: {
                  backgroundColor: ansiStyles[code].backgroundColor, // Explicitly set background
                  width: 32,
                  height: 32,
                  padding: 0,
                  minWidth: 32, // Ensure button doesn’t shrink
                  '&:hover': {
                    backgroundColor: ansiStyles[code].backgroundColor, // Keep color on hover
                  },
                },
              }}
            />
          </Tooltip>
        ))}
      </Group>

      <Group justify="center" mb="md">
        <Text fw={700}>BG</Text>
        {[40, 41, 42, 43, 44, 45, 46, 47].map((code) => (
          <Tooltip key={code} label={tooltipTexts[code]} position="top">
            <Button
              onClick={() => applyStyle(code)}
              variant="transparent" // Minimize Mantine background interference
              styles={{
                root: {
                  backgroundColor: ansiStyles[code].backgroundColor, // Explicitly set background
                  width: 32,
                  height: 32,
                  padding: 0,
                  minWidth: 32, // Ensure button doesn’t shrink
                  '&:hover': {
                    backgroundColor: ansiStyles[code].backgroundColor, // Keep color on hover
                  },
                },
              }}
            />
          </Tooltip>
        ))}
      </Group>
    </>
  );
}

export default ColorButtons;