import type { ComponentType, ReactNode } from 'react';
import { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { Icon } from './Icon';
import { color } from './shared/styles';
import { LinkProps } from './types';

/**
 * Props for styled link components
 */
interface StyledLinkProps {
  secondary?: boolean;
  tertiary?: boolean;
  nochrome?: boolean;
  inverse?: boolean;
  isButton?: boolean;
  containsIcon?: boolean;
  withArrow?: boolean;
}

/**
 * Props for LinkInner component
 */
interface LinkInnerProps {
  withArrow?: boolean;
}

const linkStyles = css<StyledLinkProps>`
  display: inline-block;
  transition:
    transform 150ms ease-out,
    color 150ms ease-out;
  text-decoration: none;

  color: ${color.secondary};

  &:hover,
  &:focus {
    cursor: pointer;
    transform: translateY(-1px);
    color: ${darken(0.07, color.secondary)};
  }
  &:active {
    transform: translateY(0);
    color: ${darken(0.1, color.secondary)};
  }

  svg {
    display: inline-block;
    height: 1em;
    width: 1em;
    vertical-align: text-top;
    position: relative;
    bottom: -0.125em;
    margin-right: 0.4em;
  }

  ${(props) =>
    props.containsIcon &&
    css`
      svg {
        height: 1em;
        width: 1em;
        vertical-align: middle;
        position: relative;
        bottom: 0;
        margin-right: 0;
      }
    `};

  ${(props) =>
    props.secondary &&
    css`
      color: ${color.mediumdark};

      &:hover {
        color: ${color.dark};
      }

      &:active {
        color: ${color.darker};
      }
    `};

  ${(props) =>
    props.tertiary &&
    css`
      color: ${color.dark};

      &:hover {
        color: ${color.darkest};
      }

      &:active {
        color: ${color.mediumdark};
      }
    `};

  ${(props) =>
    props.nochrome &&
    css`
      color: inherit;

      &:hover,
      &:active {
        color: inherit;
        text-decoration: underline;
      }
    `};

  ${(props) =>
    props.inverse &&
    css`
      color: ${color.lightest};

      &:hover {
        color: ${color.lighter};
      }

      &:active {
        color: ${color.light};
      }
    `};

  ${(props) =>
    props.isButton &&
    css`
      border: 0;
      border-radius: 0;
      background: none;
      padding: 0;
      font-size: inherit;
    `};
`;

const LinkInner = styled.span<LinkInnerProps>`
  ${(props) =>
    props.withArrow &&
    css`
      > svg:last-of-type {
        height: 0.7em;
        width: 0.7em;
        margin-right: 0;
        margin-left: 0.25em;
        bottom: auto;
        vertical-align: inherit;
      }
    `};
`;

const LinkA = styled.a<StyledLinkProps>`
  ${linkStyles};
`;

const LinkButton = styled.button<StyledLinkProps>`
  /* reset button styles */
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  ${linkStyles};
`;

const applyStyle = (LinkWrapper?: LinkProps['LinkWrapper']) => {
  return (
    LinkWrapper &&
    styled(
      ({
        containsIcon: _containsIcon,
        inverse: _inverse,
        nochrome: _nochrome,
        secondary: _secondary,
        tertiary: _tertiary,
        children: _children,
        ...linkWrapperRest
      }: Record<string, unknown>) => (
        <LinkWrapper {...(linkWrapperRest as Record<string, unknown>)}>{_children as ReactNode}</LinkWrapper>
      ),
    )`
      ${linkStyles};
    `
  );
};

/**
 * Links can contains text and/or icons. Be careful using only icons, you must provide a text alternative via aria-label for accessibility.
 *
 * @example
 * ```tsx
 * <Link href="/home">Home</Link>
 * <Link secondary href="/about">About</Link>
 * <Link withArrow>Learn more</Link>
 * ```
 */
export const Link = ({
  isButton = false,
  withArrow = false,
  secondary = false,
  tertiary = false,
  nochrome = false,
  inverse = false,
  containsIcon = false,
  LinkWrapper,
  children,
  ...props
}: LinkProps) => {
  // Dev-time accessibility check for icon-only links
  if (process.env.NODE_ENV !== 'production') {
    const hasAriaLabel = Object.prototype.hasOwnProperty.call(props, 'aria-label');
    const noVisibleChildren = !children || (typeof children === 'string' && children.trim() === '');
    if (containsIcon && noVisibleChildren && !hasAriaLabel) {
      console.warn('Link: icon-only links should include an `aria-label` or visible text for accessibility.');
    }
  }
  const content = (
    <Fragment>
      <LinkInner withArrow={withArrow}>
        {children}
        {withArrow && <Icon icon="arrowright" />}
      </LinkInner>
    </Fragment>
  );

  const StyledLinkWrapper = applyStyle(LinkWrapper);

  let SelectedLink: ComponentType<Record<string, unknown>> = LinkA;
  if (LinkWrapper) {
    SelectedLink = StyledLinkWrapper as ComponentType<Record<string, unknown>>;
  } else if (isButton) {
    SelectedLink = LinkButton as ComponentType<Record<string, unknown>>;
  }

  return (
    <SelectedLink
      secondary={secondary}
      tertiary={tertiary}
      nochrome={nochrome}
      inverse={inverse}
      isButton={isButton}
      containsIcon={containsIcon}
      {...props}
    >
      {content}
    </SelectedLink>
  );
};
