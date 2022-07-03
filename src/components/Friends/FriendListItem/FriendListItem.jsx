import { Status, FriendItem, FriendAvatar } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Status isOnline={isOnline}></Status>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendItem>
  );
};
