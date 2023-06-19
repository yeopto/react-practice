import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Card = (props: PropsWithChildren) => {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
};

export default Card;

const Wrapper = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;
