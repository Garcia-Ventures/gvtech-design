import styled, { css } from 'styled-components';
import { background, color, typography } from './shared/styles';
import { BadgeProps, BADGE_STATUSES, StatusProps } from './types';

/**
 * Styled badge wrapper with status-based styling
 */
const BadgeWrapper = styled.div<StatusProps>`
  display: inline-block;
  vertical-align: top;
  font-size: 11px;
  line-height: 12px;
  padding: 4px 12px;
  border-radius: 3em;
  font-weight: ${typography.weight.bold};

  svg {
    height: 12px;
    width: 12px;
    margin-right: 4px;
    margin-top: -2px;
  }

  ${(props) =>
    props.status === BADGE_STATUSES.POSITIVE &&
    css`
      color: ${color.positive};
      background: ${background.positive};
    `};

  ${(props) =>
    props.status === BADGE_STATUSES.NEGATIVE &&
    css`
      color: ${color.negative};
      background: ${background.negative};
    `};

  ${(props) =>
    props.status === BADGE_STATUSES.WARNING &&
    css`
      color: ${color.warning};
      background: ${background.warning};
    `};

  ${(props) =>
    props.status === BADGE_STATUSES.ERROR &&
    css`
      color: ${color.lightest};
      background: ${color.negative};
    `};

  ${(props) =>
    props.status === BADGE_STATUSES.NEUTRAL &&
    css`
      color: ${color.dark};
      background: ${color.mediumlight};
    `};
`;

/**
 * Badge component for displaying status indicators and labels
 *
 * @example
 * ```tsx
 * <Badge status="positive">Success</Badge>
 * <Badge status="error">Error</Badge>
 * <Badge>Default</Badge>
 * ```
 */
export const Badge = ({ status = BADGE_STATUSES.NEUTRAL, children, ...props }: BadgeProps) => {
  return (
    <BadgeWrapper status={status} {...props}>
      {children}
    </BadgeWrapper>
  );
};
