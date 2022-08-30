import styled from "styled-components";

export const Container = styled.div`
  width: 75%;
  max-width: 900px;
  margin: 0 auto;
  
  h2 {
    color: ${(props) => props.theme.primary};
  }

  p {
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.warning};
    background: ${(props) => props.theme.bgWarning};
    color: ${(props) => props.theme.warning};
    padding: 30px 40px;
  }
`;
