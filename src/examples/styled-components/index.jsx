import styled from "styled-components";

export const StyledComponent = ({ color }) => {
  const StyledButton = styled.button`
    background-color: ${color || "red"};
    color: white;
  `;
  return (
    <>
      <StyledButton>Styled Button</StyledButton>
    </>
  );
};
