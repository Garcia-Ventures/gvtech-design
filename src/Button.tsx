import React, { Fragment, JSX } from 'react';
import styled from 'styled-components';
import { darken, rgba } from 'polished';

import { color, typography } from './shared/styles';
import { easing } from './shared/animation';
import {
  ButtonProps,
  BUTTON_APPEARANCES,
  BUTTON_SIZES,
  SizeableProps,
  AppearanceProps,
  DisableableProps,
  LoadableProps,
} from './types';

/**
 * Props for styled button components
 */
interface StyledButtonProps extends SizeableProps, AppearanceProps, DisableableProps, LoadableProps {
  isUnclickable?: boolean;
  containsIcon?: boolean;
}

const APPEARANCES = BUTTON_APPEARANCES;
const SIZES = BUTTON_SIZES;

const Text = styled.span``;

const Loading = styled.span``;

const StyledButton = styled.button<StyledButtonProps>`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: ${(props) => (props.size === SIZES.SMALL ? '8px 16px' : '13px 20px')};
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0;
  background: transparent;

  font-size: ${(props) => (props.size === SIZES.SMALL ? typography.size.s1 : typography.size.s2)}px;
  font-weight: ${typography.weight.extrabold};
  line-height: 1;

  ${(props) =>
    !props.isLoading &&
    `
      &:hover {
        transform: translate3d(0, -2px, 0);
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;
      }

      &:active {
        transform: translate3d(0, 0, 0);
      }

      &:focus {
        box-shadow: ${rgba(color.primary, 0.4)} 0 1px 9px 2px;
      }

      &:focus:hover {
        box-shadow: ${rgba(color.primary, 0.2)} 0 8px 18px 0px;
      }
    `}

  ${Text} {
    transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
    transition: transform 700ms ${easing.rubber};
    opacity: 1;
  }

  ${Loading} {
    transform: translate3d(0, 100%, 0);
  }

  svg {
    height: ${(props) => (props.size === SIZES.SMALL ? '14' : '16')}px;
    width: ${(props) => (props.size === SIZES.SMALL ? '14' : '16')}px;
    vertical-align: top;
    margin-right: ${(props) => (props.size === SIZES.SMALL ? '4' : '6')}px;
    margin-top: ${(props) => (props.size === SIZES.SMALL ? '-1' : '-2')}px;
    margin-bottom: ${(props) => (props.size === SIZES.SMALL ? '-1' : '-2')}px;

    /* Necessary for js mouse events to not glitch out when hovering on svgs */
    pointer-events: none;
  }

  ${(props) =>
    props.disabled &&
    `
      cursor: not-allowed !important;
      opacity: 0.5;
      &:hover {
        transform: none;
      }
    `}

  ${(props) =>
    props.isUnclickable &&
    `
      cursor: default !important;
      pointer-events: none;
      &:hover {
        transform: none;
      }
    `}

  ${(props) =>
    props.isLoading &&
    `
      cursor: progress !important;
      opacity: 0.7;

      ${Loading} {
        transition: transform 700ms ${easing.rubber};
        transform: translate3d(0, -50%, 0);
        opacity: 1;
      }

      ${Text} {
        transform: scale3d(0, 0, 1) translate3d(0, -100%, 0);
        opacity: 0;
      }

      &:hover {
        transform: none;
      }
    `}

  ${(props) =>
    props.containsIcon &&
    `
      svg {
        display: block;
        margin: 0;
      }
      padding: ${props.size === SIZES.SMALL ? '7' : '12'}px;
    `}

  ${(props) =>
    props.appearance === APPEARANCES.PRIMARY &&
    `
      background: ${color.primary};
      color: ${color.lightest};

      ${
        !props.isLoading &&
        `
          &:hover {
            background: ${darken(0.05, color.primary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${rgba(color.primary, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${rgba(color.primary, 0.2)} 0 8px 18px 0px;
          }
        `
      }
    `}

  ${(props) =>
    props.appearance === APPEARANCES.SECONDARY &&
    `
      background: ${color.secondary};
      color: ${color.lightest};

      ${
        !props.isLoading &&
        `
          &:hover {
            background: ${darken(0.05, color.secondary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${rgba(color.secondary, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${rgba(color.secondary, 0.2)} 0 8px 18px 0px;
          }
        `
      }
    `}

  ${(props) =>
    props.appearance === APPEARANCES.TERTIARY &&
    `
      background: ${color.tertiary};
      color: ${color.darkest};

      ${
        !props.isLoading &&
        `
          &:hover {
            background: ${darken(0.05, color.tertiary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${rgba(color.tertiary, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${rgba(color.tertiary, 0.2)} 0 8px 18px 0px;
          }
        `
      }
    `}

  ${(props) =>
    props.appearance === APPEARANCES.OUTLINE &&
    `
      box-shadow: ${color.medium} 0 0 0 1px inset;
      color: ${color.dark};
      background: transparent;

      ${
        !props.isLoading &&
        `
          &:hover {
            box-shadow: ${color.mediumdark} 0 0 0 1px inset;
          }

          &:active {
            background: ${color.medium};
            box-shadow: ${color.medium} 0 0 0 1px inset;
            color: ${color.darkest};
          }
          &:focus {
            box-shadow: ${color.medium} 0 0 0 1px inset, ${rgba(color.secondary, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${color.medium} 0 0 0 1px inset, ${rgba(color.secondary, 0.2)} 0 8px 18px 0px;
          }
        `
      };
    `};

  ${(props) =>
    props.appearance === APPEARANCES.PRIMARY_OUTLINE &&
    `
        box-shadow: ${color.primary} 0 0 0 1px inset;
        color: ${color.primary};

        &:hover {
          box-shadow: ${color.primary} 0 0 0 1px inset;
          background: transparent;
        }

        &:active {
          background: ${color.primary};
          box-shadow: ${color.primary} 0 0 0 1px inset;
          color: ${color.lightest};
        }
        &:focus {
          box-shadow: ${color.primary} 0 0 0 1px inset, ${rgba(color.primary, 0.4)} 0 1px 9px 2px;
        }
        &:focus:hover {
          box-shadow: ${color.primary} 0 0 0 1px inset, ${rgba(color.primary, 0.2)} 0 8px 18px 0px;
        }
      `};

  ${(props) =>
    props.appearance === APPEARANCES.SECONDARY_OUTLINE &&
    `
        box-shadow: ${color.secondary} 0 0 0 1px inset;
        color: ${color.secondary};

        &:hover {
          box-shadow: ${color.secondary} 0 0 0 1px inset;
          background: transparent;
        }

        &:active {
          background: ${color.secondary};
          box-shadow: ${color.secondary} 0 0 0 1px inset;
          color: ${color.lightest};
        }
        &:focus {
          box-shadow: ${color.secondary} 0 0 0 1px inset,
            ${rgba(color.secondary, 0.4)} 0 1px 9px 2px;
        }
        &:focus:hover {
          box-shadow: ${color.secondary} 0 0 0 1px inset,
            ${rgba(color.secondary, 0.2)} 0 8px 18px 0px;
        }
      `};
`;

type WrapperProps = Record<string, unknown> & { children?: React.ReactNode };

const ButtonLink: React.ComponentType<WrapperProps> = (props) => <StyledButton as="a" {...props} />;

const applyStyle = (ButtonWrapper?: ButtonProps['ButtonWrapper']): React.ComponentType<WrapperProps> | undefined => {
  if (!ButtonWrapper) return undefined;

  const Wrapped = ({
    containsIcon: _containsIcon,
    isLoading: _isLoading,
    isUnclickable: _isUnclickable,
    children: _children,
    ...rest
  }: WrapperProps): JSX.Element => <ButtonWrapper {...(rest as Record<string, unknown>)}>{_children}</ButtonWrapper>;

  return styled(StyledButton).attrs({ as: Wrapped })`` as unknown as React.ComponentType<WrapperProps>;
};

/**
 * Button component with multiple appearance and size variants
 *
 * @example
 * ```tsx
 * <Button>Default Button</Button>
 * <Button appearance="primary" size="large">Primary Large</Button>
 * <Button loading loadingText="Saving...">Save</Button>
 * <Button disabled>Disabled</Button>
 * ```
 */
export const Button = ({
  isLoading = false,
  loadingText,
  isLink = false,
  appearance = APPEARANCES.TERTIARY,
  isDisabled = false,
  isUnclickable = false,
  containsIcon = false,
  size = SIZES.MEDIUM,
  children,
  ButtonWrapper,
  ...props
}: ButtonProps) => {
  // Dev-time accessibility check: if the button is icon-only, require an accessible name
  if (process.env.NODE_ENV !== 'production') {
    const hasAriaLabel = Object.prototype.hasOwnProperty.call(props, 'aria-label');
    const noVisibleChildren = !children || (typeof children === 'string' && children.trim() === '');
    if (containsIcon && noVisibleChildren && !hasAriaLabel) {
      console.warn('Button: icon-only buttons should include an `aria-label` or visible text for accessibility.');
    }
  }
  const buttonInner = (
    <Fragment>
      <Text>{children}</Text>
      {isLoading && <Loading>{loadingText || 'Loading...'}</Loading>}
    </Fragment>
  );

  const StyledButtonWrapper = React.useMemo(() => applyStyle(ButtonWrapper), [ButtonWrapper]);

  let SelectedButton: React.ComponentType<WrapperProps> = StyledButton as unknown as React.ComponentType<WrapperProps>;
  if (ButtonWrapper && StyledButtonWrapper) {
    SelectedButton = StyledButtonWrapper;
  } else if (isLink) {
    SelectedButton = ButtonLink;
  }

  return (
    <SelectedButton
      size={size}
      appearance={appearance}
      isLoading={isLoading}
      disabled={isDisabled}
      isUnclickable={isUnclickable}
      containsIcon={containsIcon}
      {...props}
    >
      {buttonInner}
    </SelectedButton>
  );
};
