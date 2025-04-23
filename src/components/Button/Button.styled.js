import styled from "styled-components";

const StyledButton = styled.button`
  padding: ${(props) => (props.size === 'lg' ? '0.5rem 1rem' : props.size === 'sm' ? '0.25rem 0.5rem' : '0.4rem 0.8rem')};
  font-size: ${(props) => (props.size === 'lg' ? '1.25rem' : props.size === 'sm' ? '0.875rem' : '1rem')};
  border-radius: 0.25rem;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme.colors[props.variant] || '#007bff'};
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.65 : 1)};

  &:hover {
    background-color: ${(props) =>
        props.variant === 'primary' ? '#0056b3' : props.variant === 'secondary' ? '#5a6268' : '#007bff'};
  }
    
`;

export { StyledButton };