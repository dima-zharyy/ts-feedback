import { INotification } from '../../../../types/appTypes';

export const Notification: React.FC<INotification> = ({ message }) => {
  return <p>{message}</p>;
};
