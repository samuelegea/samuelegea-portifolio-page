import styled from 'styled-components';

export const Container = styled.div`
    header{
        width: 100%;
        display: flex;
        div{
            margin: 10px;
            :last-child{
                margin-left: auto;
            }
        }
        
    }
    background: #353535;
    a{
        color: #fefefe;
        margin: 3px;
        /* color: black; */
        /* font-style: none; */
        text-decoration: none;
    }
`;
