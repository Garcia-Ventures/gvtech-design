import styled from 'styled-components';

import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Button } from './Button';
import { Icon } from './Icon';
import { IconName } from './types';
import { StoryLinkWrapper } from './StoryLinkWrapper';

const CustomButton = styled.button`
  border: 1px solid green;
  background: lightgreen;
  color: rebeccapurple;
  padding: 1em;
  font-size: 1.2em;
`;

function ButtonWrapper(props: any) {
  return <CustomButton {...props} />;
}

export default {
  title: 'Design System/Button',
  component: Button,
};

export const AllButtons = (_args: any) => (
  <div>
    <Button appearance="primary">Primary</Button>
    <Button appearance="secondary">Secondary</Button>
    <Button appearance="tertiary">Tertiary</Button>
    <Button appearance="outline">Outline</Button>
    <Button appearance="primaryOutline">Outline primary</Button>
    <Button appearance="secondaryOutline">Outline secondary</Button>
    <Button appearance="primary" disabled>
      Disabled
    </Button>
    <br />
    <Button appearance="primary" loading>
      Primary
    </Button>
    <Button appearance="secondary" loading>
      Secondary
    </Button>
    <Button appearance="tertiary" loading>
      Tertiary
    </Button>
    <Button appearance="outline" loading>
      Outline
    </Button>
    <Button appearance="outline" loading loadingText="Custom...">
      Outline
    </Button>
    <br />
    <Button appearance="primary" size="small">
      Primary
    </Button>
    <Button appearance="secondary" size="small">
      Secondary
    </Button>
    <Button appearance="tertiary" size="small">
      Tertiary
    </Button>
    <Button appearance="outline" size="small">
      Outline
    </Button>
    <Button appearance="primary" disabled size="small">
      Disabled
    </Button>
    <Button appearance="outline" size="small" containsIcon>
      <Icon icon={"link" as IconName} aria-label="Link" />
    </Button>
    <Button appearance="outline" size="small">
      <Icon icon={"link" as IconName} />
      Link
    </Button>
  </div>
);

AllButtons.storyName = 'all buttons';

// eslint-disable-next-line storybook/prefer-pascal-case
export const buttonWrapper = (_args: any) => (
  <div>
    <ButtonWrapper>Original Button Wrapper</ButtonWrapper>
    <br />
    <Button ButtonWrapper={ButtonWrapper} appearance="primary">
      Primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="secondary">
      Secondary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="tertiary">
      Tertiary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline">
      Outline
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="primaryOutline">
      Outline primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="secondaryOutline">
      Outline secondary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="primary" disabled>
      Disabled
    </Button>
    <br />
    <Button ButtonWrapper={ButtonWrapper} appearance="primary" loading>
      Primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="secondary" loading>
      Secondary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="tertiary" loading>
      Tertiary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline" loading>
      Outline
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline" loading loadingText="Custom...">
      Outline
    </Button>
    <br />
    <Button ButtonWrapper={ButtonWrapper} appearance="primary" size="small">
      Primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="secondary" size="small">
      Secondary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="tertiary" size="small">
      Tertiary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline" size="small">
      Outline
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="primary" disabled size="small">
      Disabled
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline" size="small" containsIcon>
      <Icon icon={"link" as IconName} aria-label="Link" />
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline" size="small">
      <Icon icon={"link" as IconName} />
      Link
    </Button>
  </div>
);

buttonWrapper.storyName = 'button wrapper';

export const AnchorWrapper = (_args: any) => (
  <div>
    <StoryLinkWrapper to="http://storybook.js.org">Original Link Wrapper</StoryLinkWrapper>
    <br />
    <Button ButtonWrapper={StoryLinkWrapper} appearance="primary">
      Primary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="secondary">
      Secondary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="tertiary">
      Tertiary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="outline">
      Outline
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="primaryOutline">
      Outline primary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="secondaryOutline">
      Outline secondary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="primary" disabled>
      Disabled
    </Button>
    <br />
    <Button ButtonWrapper={StoryLinkWrapper} appearance="primary" loading>
      Primary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="secondary" loading>
      Secondary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="tertiary" loading>
      Tertiary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="outline" loading>
      Outline
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      loading
      loadingText="Custom..."
     
    >
      Outline
    </Button>
    <br />
    <Button ButtonWrapper={StoryLinkWrapper} appearance="primary" size="small">
      Primary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="secondary" size="small">
      Secondary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="tertiary" size="small">
      Tertiary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="outline" size="small">
      Outline
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="primary" disabled size="small">
      Disabled
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      size="small"
      containsIcon
     
    >
      <Icon icon={"link" as IconName} aria-label="Link" />
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="outline" size="small">
      <Icon icon={"link" as IconName} />
      Link
    </Button>
  </div>
);

AnchorWrapper.storyName = 'anchor wrapper';

/*
 * New story using the play function.
 * See https://storybook.js.org/docs/react/writing-stories/play-function
 * to learn more about the play function.
 */
export const WithInteractions = (_args: any) => <Button {..._args} />;
WithInteractions.args = {
  appearance: 'primary',
  href: 'http://storybook.js.org',
  ButtonWrapper: StoryLinkWrapper,
  children: 'Button',
};

WithInteractions.play = async ({ canvasElement }: any) => {
  // Assigns canvas to the component root element
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('link'));
  expect(canvas.getByRole('link')).toHaveAttribute('href', 'http://storybook.js.org');
};
