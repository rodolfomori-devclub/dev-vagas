import { Container } from "./styles";

interface IWarning {
  title: string;
  paragraph: string;
}

export function Warning({ title, paragraph }: IWarning) {
  return (
    <Container>
      <h2> {title}</h2>
      <p>{paragraph}</p>    
    </Container>
  );
}
