import * as React from 'react';
import { styled } from '@storybook/theming';
import { MailingListConfirm } from './MailingListConfirm';
import { MailingListFormUI } from './MailingListFormUI';

interface MailingListSignupProps {
  fieldsFromValues: (values: Record<string, any>) => Record<string, any>;
  listUrl: string;
  sourceLocation: string;
}

const FormWrapper = styled.form`
  max-width: 300px;
  position: relative;
`;

export const MailingListSignup = ({
  fieldsFromValues = (values) => ({
    // ...siteConfig.mailingList.fields,
    MERGE0: values.email,
  }),
  listUrl,
  sourceLocation,
  ...props
}: MailingListSignupProps) => {
  const formRef = React.useRef(null);
  const [submitStatus, setSubmitStatus] = React.useState('idle');

  const handleSubmit = async (event: React.FormEvent) => {
    setSubmitStatus('submitting');

    const data = new FormData(event.target);
    const fullFields = fieldsFromValues(event.target);

    Object.keys(fullFields).forEach((key) => data.append(key, fullFields[key]));

    // await fetch(listUrl, {
    //   method: 'POST',
    //   body: data,
    //   mode: 'no-cors',
    // });

    console.log('fetch', data);

    setSubmitStatus('submitted');
  };

  // React.useEffect(() => {
  //   if (hasSubmitted && formRef.current) {
  //     const submitButtonEl = formRef.current.querySelector('[type="submit"]');
  //     if (submitButtonEl) {
  //       submitButtonEl.blur();
  //     }
  //   }
  // }, [formRef, hasSubmitted]);

  return (
    <FormWrapper ref={formRef} onSubmit={handleSubmit}>
      <MailingListFormUI isSubmitting={submitStatus === 'submitting'} {...props} />
      {submitStatus === 'submitted' && (
        <MailingListConfirm role="alert">
          <b>
            <span role="img" aria-label="thumbs up">
              👍
            </span>{' '}
            Thanks, you&rsquo;re all signed up!
          </b>
        </MailingListConfirm>
      )}
    </FormWrapper>
  );
};
