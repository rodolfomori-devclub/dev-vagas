import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background: ${(props) => props.theme.primary};
  width: 340px;
  height: 48px;
  border-radius: 5px;

  color: ${(props) => props.theme.light};
  font-weight: 900;
  font-size: 18px;
  line-height: 33px;
  border: none;
`;
