import React from "react";
import {
  Html,
  Body,
  Tailwind,
  Container,
  Preview,
  Text,
  Link,
} from "@react-email/components";

const welcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Text className="font-bold text-4xl"> Hello {name}</Text>
            <Link href="google.com"> google </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default welcomeTemplate;
