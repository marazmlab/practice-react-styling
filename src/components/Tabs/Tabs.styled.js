import styled from 'styled-components';

export const StyledTabs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTabList = styled.div`
  display: flex;;
  border-bottom: 1px solid #dee2e6;
`;

export const StyledTab = styled.button`
  padding: 0.5rem 1rem;
  margin-bottom: -1px;
  background-color: ${(props) => (props.active ? '#fff' : '#fff')};
  border: 2px solid ${(props) => (props.active ? '#dee2e6' : 'transparent')};
  border-bottom: ${(props) => (props.active ? 'none' : '1px solid #dee2e6')};
  border-radius: ${(props) => (props.active ? '0.25rem 0.25rem 0 0' : '0.25rem 0.25rem 0 0')};
  color: ${(props) => (props.disabled ? '#6c757d' : props.active ? '#495057' : '#007bff')};
  cursor: ${(props) => (props.disabled ? 'arrow' : 'pointer')};
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    border: ${(props) => (props.disabled ? '2px solid transparent' : props.active ? '2px solid #dee2e6' : '2px solid #dee2e6')};
    border-bottom: ${(props) => (props.active ? 'none' : '1px solid #dee2e6')};
  }

  &:focus {
    outline: none;
  }
`;