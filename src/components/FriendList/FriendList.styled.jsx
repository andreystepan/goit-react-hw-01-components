import styled from '@emotion/styled'

export const List = styled.ul`
width: 300px;
margin: 0 auto;
padding: 0;`;


export const FriendItem = styled.li`
display: flex;
    align-items: center;
    border-radius: 6px;
    padding: 13px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    box-shadow: 0px 0px 5px rgba(33, 33, 33, 0.2);
    margin-top: 10px;
`;

export const Status = styled.span`
border-radius: 50%;
    width: 15px;
    height: 15px;
    margin-right: 15px;
    display: inline-block;`;

export const FriendAvatar = styled.img`
margin-right: 20px;`;
