import React from 'react';

export default function SvgIcon({ children, ...props }) {
  return (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      {children}
    </svg>
  );
}
