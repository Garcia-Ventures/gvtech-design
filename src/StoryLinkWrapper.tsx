import React from 'react';
import { action } from 'storybook/actions';

const fireClickAction = action('onLinkClick');

interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string | null;
  onClick?: () => void;
  to?: string | null;
}

export const StoryLinkWrapper: React.FC<Props> = ({
  children,
  className = '',
  href = null,
  onClick = () => {},
  to = null,
  ...rest
}) => {
  const modifiedOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    onClick?.();
    fireClickAction(href || to);
  };

  return (
    <a className={className} href={(href || to) ?? undefined} onClick={modifiedOnClick} {...rest}>
      {children}
    </a>
  );
};
