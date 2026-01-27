import React from 'react';
import styled, { css } from 'styled-components';
import { color, typography } from './shared/styles';
import { glow } from './shared/animation';
import { Icon } from './Icon';

/**
 * Available avatar sizes with their pixel values
 */
export const sizes = {
  large: 40,
  medium: 28,
  small: 20,
  tiny: 16,
} as const;

/**
 * Union type for avatar size keys
 */
export type AvatarSize = keyof typeof sizes;

/**
 * Props for the Avatar component
 */
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the avatar is in a loading state */
  loading?: boolean;
  /** The username to display (used for initials or alt text) */
  username?: string;
  /** Image source URL for the avatar */
  src?: string;
  /** Size variant of the avatar */
  size?: AvatarSize;
}

/**
 * Props for styled Image component
 */
interface ImageProps {
  loading?: boolean;
  size?: AvatarSize;
  src?: string;
}

/**
 * Props for styled Initial component
 */
interface InitialProps {
  size?: AvatarSize;
}

const Image = styled.div<ImageProps>`
  background: ${(props) => (!props.loading ? 'transparent' : color.light)};
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  text-transform: uppercase;

  height: ${sizes.medium}px;
  width: ${sizes.medium}px;
  line-height: ${sizes.medium}px;

  ${(props) =>
    props.size === 'tiny' &&
    css`
      height: ${sizes.tiny}px;
      width: ${sizes.tiny}px;
      line-height: ${sizes.tiny}px;
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      height: ${sizes.small}px;
      width: ${sizes.small}px;
      line-height: ${sizes.small}px;
    `}

  ${(props) =>
    props.size === 'large' &&
    css`
      height: ${sizes.large}px;
      width: ${sizes.large}px;
      line-height: ${sizes.large}px;
    `}

  ${(props) =>
    !props.src &&
    css`
      background: ${!props.loading && '#37D5D3'};
    `}

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  svg {
    position: relative;
    bottom: -2px;
    height: 100%;
    width: 100%;
    vertical-align: top;
  }

  path {
    fill: ${color.medium};
    animation: ${glow} 1.5s ease-in-out infinite;
  }
`;

// prettier-ignore
const Initial = styled.div<InitialProps>`
  color: ${color.lightest};
  text-align: center;

  font-size: ${typography.size.s2}px;
  line-height: ${sizes.medium}px;

  ${(props) => props.size === 'tiny' && css`
    font-size: ${typography.size.s1 - 2}px;
    line-height: ${sizes.tiny}px;
  `}

  ${(props) => props.size === 'small' && css`
    font-size: ${typography.size.s1}px;
    line-height: ${sizes.small}px;
  `}

  ${(props) => props.size === 'large' && css`
    font-size: ${typography.size.s3}px;
    line-height: ${sizes.large}px;
  `}
`;

/**
 * Avatar component for displaying user profile images or initials
 *
 * @example
 * ```tsx
 * <Avatar username="John Doe" size="large" />
 * <Avatar src="https://example.com/avatar.jpg" username="Jane Doe" />
 * <Avatar loading username="Loading..." />
 * ```
 */
export const Avatar = ({ loading = false, username = 'loading', src, size = 'medium', ...props }: AvatarProps) => {
  let avatarFigure = <Icon icon="useralt" block={false} />;
  const a11yProps: {
    'aria-busy'?: boolean;
    'aria-label'?: string;
  } = {};

  if (loading) {
    a11yProps['aria-busy'] = true;
    a11yProps['aria-label'] = 'Loading avatar ...';
  } else if (src) {
    avatarFigure = <img src={src} alt={username} />;
  } else {
    a11yProps['aria-label'] = username;
    avatarFigure = (
      <Initial size={size} aria-hidden="true">
        {username.substring(0, 1)}
      </Initial>
    );
  }

  return (
    <Image size={size} loading={loading} src={src} {...a11yProps} {...props}>
      {avatarFigure}
    </Image>
  );
};
