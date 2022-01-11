import { styled } from '@storybook/theming';
import * as styles from '../shared/styles';

export const MailingListConfirm = styled.div`
  font-size: ${styles.typography.size.s2}px;
  background: ${styles.background.positive};
  line-height: 20px;
  padding: 10px;
  text-align: center;
  border-radius: ${styles.spacing.borderRadius.small}px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 4;
`;
