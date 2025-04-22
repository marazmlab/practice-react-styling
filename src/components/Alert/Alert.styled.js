import styled from 'styled-components';

const StyledAlert = styled.div`
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid #b8daff;
    border-radius: 0.25rem;
    background-color: ${(props) => 
        props.theme && props.theme.colors && props.theme.colors[props.variant]
            ? props.theme.colors[props.variant]
            : props.variant === 'primary'
            ? '#cce5ff' 
            : '#fff'};
    color: #004085;
`;

export { StyledAlert };