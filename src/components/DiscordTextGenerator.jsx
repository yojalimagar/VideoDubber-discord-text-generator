import React, { useState } from "react";
import { MantineProvider, Button, Card, Text, Container, Title } from "@mantine/core";
import "@mantine/core/styles.css";

const DiscordTextGenerator = () => {
  const [content, setContent] = useState(
    `Welcome to <span style='color: yellow;'>Rebane</span>'s <span style='color: purple;'><span style='color: white;'>Discord</span></span> <span style='color: red;'>C</span><span style='color: green;'>o</span><span style='color: yellow;'>l</span><span style='color: blue;'>o</span><span style='color: indigo;'>r</span><span style='color: teal;'>e</span><span style='color: gray;'>d</span> Text Generator!`
  );

  const handleCopy = () => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;
    const textToCopy = tempDiv.textContent || tempDiv.innerText;
    navigator.clipboard.writeText(textToCopy);
    alert("Copied to clipboard!");
  };

  return (
    <MantineProvider
      theme={{
        colorScheme: "dark", // Matches your dark theme
        colors: {
          // You can customize colors here if needed
        },
      }}
    >
      <Container 
        size="md" 
        style={{ 
          textAlign: "center", 
          color: "white", 
          backgroundColor: "#1A1B1E", 
          minHeight: "100vh", 
          padding: "20px" 
        }}
      >
        <Title order={1}>
          Rebane's <span style={{ color: "indigo" }}>Colored</span> Discord Text Generator
        </Title>
        <Card 
          shadow="sm" 
          padding="lg" 
          radius="md" 
          withBorder
          style={{ backgroundColor: "#25262B", marginTop: "20px" }}
        >
          <Text size="lg" fw={500}>About</Text>
          <Text size="sm">
            This is a simple app that creates colored Discord messages using the ANSI color codes available on the latest Discord desktop versions.
          </Text>
        </Card>
        <Title order={2} style={{ marginTop: "20px" }}>Create your text</Title>
        <Card 
          shadow="sm" 
          padding="lg" 
          radius="md" 
          withBorder
          style={{ backgroundColor: "#25262B", marginTop: "10px" }}
        >
          <Text
            component="div"
            size="sm"
            style={{ whiteSpace: "pre-wrap", color: "#CCCCCC" }}
            contentEditable
            onInput={(e) => setContent(e.currentTarget.innerHTML)}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Card>
        <Button 
          style={{ marginTop: "20px" }} 
          color="gray"
          onClick={handleCopy}
        >
          Copy text as Discord formatted
        </Button>
        <Text size="xs" c="gray" style={{ marginTop: "10px" }}>
          This is an unofficial tool, not made or endorsed by Discord.
        </Text>
      </Container>
    </MantineProvider>
  );
};

export default DiscordTextGenerator;