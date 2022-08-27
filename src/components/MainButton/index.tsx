import { Container } from "./styles";

export function MainButton({ children }) {
  return (
    <Container>
      <button type="button">{children}</button>
    </Container>
  );
}
