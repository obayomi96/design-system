import * as React from 'react';
import { styled } from '@storybook/theming';
import * as styles from '../shared/styles';
import { Button } from '../Button';
import { Input } from '../Input';

interface MailingListFormUIProps extends React.HTMLAttributes<HTMLDivElement> {
  isSubmitting: boolean;
}

const MailingListFormUIWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const EmailInput = styled(Input)`
  flex: 1;
  && input {
    border-top-left-radius: ${styles.spacing.borderRadius.small}px;
    border-bottom-left-radius: ${styles.spacing.borderRadius.small}px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

const SendButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: ${styles.spacing.borderRadius.small}px;
  border-bottom-right-radius: ${styles.spacing.borderRadius.small}px;
`;

let lastId = 0;

function uuid() {
  lastId += 1;
  return `email-${lastId}`;
}

export const MailingListFormUI = ({ isSubmitting, ...rest }: MailingListFormUIProps) => (
  <MailingListFormUIWrapper {...rest}>
    <EmailInput
      id={uuid()}
      icon="email"
      type="email"
      name="email"
      placeholder="Your email"
      autoCapitalize="off"
      autoCorrect="off"
      label="Your email"
      hideLabel
      required
      value={undefined}
    />

    <SendButton appearance="secondary" type="submit" isUnclickable={isSubmitting}>
      Send
    </SendButton>
  </MailingListFormUIWrapper>
);
