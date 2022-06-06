import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    margin-bottom: 3rem;
    border-collapse: collapse;
    & th {
        text-align: left;
    }
    & tr {
       border-bottom: 1px solid #ccc;
    }
`;