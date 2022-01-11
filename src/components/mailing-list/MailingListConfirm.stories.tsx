import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { styled } from '@storybook/theming';

import { MailingListConfirm } from './MailingListConfirm';

const Demo = styled.div`
  min-height: 50px;
  max-width: 300px;
  position: relative;
`;

export default {
  title: 'MailingList/MailingListConfirm',
  component: MailingListConfirm,
  argTypes: {
    children: { control: false },
  },
  decorators: [
    (Story) => (
      <Demo>
        <Story />
      </Demo>
    ),
  ],
} as ComponentMeta<typeof MailingListConfirm>;

const Template: ComponentStory<typeof MailingListConfirm> = (args) => (
  <MailingListConfirm {...args} />
);

export const Default: ComponentStory<typeof MailingListConfirm> = Template.bind({});
Default.args = {
  children: (
    <b>
      <span role="img" aria-label="thumbs up">
        👍
      </span>{' '}
      Thanks, you&rsquo;re all signed up!
    </b>
  ),
};
