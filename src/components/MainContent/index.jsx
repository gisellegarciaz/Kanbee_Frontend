import React from "react";
import { InputContainer } from "./styles";
import { useAccessibility } from "../../contexts/AccessibilityContext";

export default function MainContent({ children }) {

  const { theme } = useAccessibility();

  return (
    <InputContainer theme={(theme)}>
      {children}
    </InputContainer>
  );
}
