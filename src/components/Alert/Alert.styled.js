import styled from 'styled-components';

const StyledAlert = styled.div`
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;

    background-color: ${(props) => 
        props.theme.colors[props.variant] || '#cce5ff'};

    color: ${(props) =>
        props.variant === 'primary'
            ? '#004085'
            : '#383d41'};

    border-color: ${(props) =>
        props.variant === 'primary'
            ? '#b8daff'
            : '#d6d8db'};
`;

export { StyledAlert };