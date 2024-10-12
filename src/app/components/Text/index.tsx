import React from 'react';

import { TextStyled } from './styled';

type TextProps = {
  children: string;
};

export default function Text({ children }: TextProps) {
  const message = children.split('\n').map((str, idx, array) => {
    return (
      <React.Fragment key={idx}>
        {str}
        {idx === array.length - 1 ? null : <br />}
      </React.Fragment>
    );
  });

  return <TextStyled>{message}</TextStyled>;
}
