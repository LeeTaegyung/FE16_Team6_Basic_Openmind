import styled from 'styled-components';

function Badge({ variant, children }) {
  return <StyledBadge variant={variant}>{children}</StyledBadge>;
}

export default Badge;

const StyledBadge = styled.div`
  width: fit-content;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 14px;

  ${(props) =>
    props.variant === 'notAnswered' &&
    `border: 1px solid var(--gray-40);
    color: var(--gray-40);
  `}

  ${(props) =>
    props.variant === 'answered' &&
    `border: 1px solid var(--brown-40);
    color: var(--brown-40);
  `}
`;
