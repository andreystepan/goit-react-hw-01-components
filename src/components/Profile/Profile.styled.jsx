import styled from '@emotion/styled'

export const Profile = styled.div`
display: block;
width: 300px;
border: 2px solid;
margin: auto;
`;
export const Description = styled.div`
text-align: center; `;

export const NameTitle = styled.p`
font-size: 24px;
font-weight: bold;
margin-bottom: 0px;`;

export const StatsUser = styled.ul`
display: flex;
list-style: none;
justify-content: center;
padding: 0;
`;

export const StatItem = styled.li`
    flex-direction: column;
    display: flex;
    align-items: center;
    margin-right: 15px; `;

export const Quantity = styled.span`
font-weight: 500;`;