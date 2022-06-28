import styled from '@emotion/styled'

export const SectionStatistics = styled.section`
border: 2px solid grey;
 box-shadow: 0px 0px 5px #b3b3c5;
margin: 20px auto;
width: 300px;
text-align: center;`;

export const StatTitle = styled.h2`
border-bottom: 2px solid grey;
 box-shadow: 0px 0px 5px #b3b3c5;
margin: 0;
padding: 20px 0`;

export const StatList = styled.ul`
display: flex;
list-style: none;
padding: 0;
margin: 0;

justify-content: space-between; `;

export const StatListItem = styled.li`
display: flex;
flex-direction: column;
`;

export const PercentageSpan = styled.span`
font-size: 24px;
font-weight: 500;`;