import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { styled } from '@storybook/theming';

import { MailingListFormUI } from './MailingListFormUI';

const Demo = styled.div`
  min-height: 50px;
  max-width: 300px;
  position: relative;
`;

export default {
  title: 'MailingList/MailingListFormUI',
  component: MailingListFormUI,
  decorators: [
    (Story) => (
      <Demo>
        <Story />
      </Demo>
    ),
  ],
} as ComponentMeta<typeof MailingListFormUI>;

const Template: ComponentStory<typeof MailingListFormUI> = (args) => (
  <MailingListFormUI {...args} />
);

export const Default: ComponentStory<typeof MailingListFormUI> = Template.bind({});

export const Submitting: ComponentStory<typeof MailingListFormUI> = Template.bind({});
Submitting.args = {
  isSubmitting: true,
};
