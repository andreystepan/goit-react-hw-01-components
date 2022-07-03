import PropTypes from 'prop-types';
import { List} from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';



export const FriendList = ({ friends }) => {
     return (
    <List>
        {friends.map(({id, avatar, name, isOnline}) => {
            return (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline} />
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