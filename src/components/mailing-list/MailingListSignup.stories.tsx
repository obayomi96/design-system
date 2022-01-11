import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { styled } from '@storybook/theming';

import { MailingListSignup } from './MailingListSignup';

const Demo = styled.div`
  min-height: 50px;
  max-width: 300px;
  position: relative;
`;

export default {
  title: 'MailingList/MailingListSignup',
  component: MailingListSignup,
  decorators: [
    (Story) => (
      <Demo>
        <Story />
      </Demo>
    ),
  ],
} as ComponentMeta<typeof MailingListSignup>;

const Template: ComponentStory<typeof MailingListSignup> = (args) => (
  <MailingListSignup {...args} />
);

export const Default: ComponentStory<typeof MailingListSignup> = Template.bind({});
