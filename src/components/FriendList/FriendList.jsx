import PropTypes from 'prop-types';
import {List, Status,FriendItem,FriendAvatar } from './FriendList.styled';




const FriendListItem = ({avatar,name,isOnline}) => {
    return (
        <FriendItem >
            <Status style={{ backgroundColor: isOnline ? 'green' : 'red' }}></Status>
            <FriendAvatar  src={avatar} alt="User avatar" width="48" />
            <p >{name}</p>
</FriendItem>
    )
}

export const FriendList = ({ friends }) => {
     return (
    <List>
        {friends.map(friend => {
            return (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline} />
            )
        })}
        
    </List>
)}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}