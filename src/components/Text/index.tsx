import React from "react";
import { TextProps } from "react-native";

import { Container, StyledText } from "./styles";
import theme from "../../global/styles/theme";

export interface ICustomStyleProps {
  size?: Lowercase<keyof typeof theme.FONT_SIZE>;
  fontWeight?: Lowercase<keyof typeof theme.FONT_FAMILY>;
  color?: Lowercase<keyof typeof theme.COLORS>;
}

interface ICustomTextProps extends TextProps, ICustomStyleProps {}

export function Text(props: ICustomTextProps) {
  return (
    <Container>
      <StyledText {...props}>{props.children}</StyledText>
    </Container>
  );
}
