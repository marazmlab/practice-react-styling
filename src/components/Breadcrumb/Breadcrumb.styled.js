import styled from 'styled-components';

export const StyledBreadcrumb = styled.nav`
    display: flex;
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #e9ecef;
    border-radius: 0.25rem;
`;

export const StyledBreadcrumbItem = styled.li`
    display: inline;
    font-size: 1rem;
    color: ${(props) => (props.active ? '#6c757d' : '#007bff')};
    ${(props) => props.active && 'pointer-events: none;'}
    &:not(:last-child)::after {
        content: '/';
        padding: 0 0.5rem;
        color: #6c757d;
    }
`;

export const StyledBreadcrumbLink = styled.a`
    color: #007bff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;