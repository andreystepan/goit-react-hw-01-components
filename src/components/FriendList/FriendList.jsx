 import PropTypes from 'prop-types'




const FriendListItem = ({avatar,name}) => {
    return (
        <li >
            <span ></span>
            <img  src={avatar} alt="User avatar" width="48" />
            <p >{name}</p>
</li>
    )
}

export const FriendList = ({ friends }) => {
     return (
    <ul>
        {friends.map(friend => {
            return (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline} />
            )
        })}
        
    </ul>
)}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}