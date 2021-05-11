import styled from 'styled-components';

export const Container = styled.div`
    
    background: #0000008f ;
    /* opacity: 40%; */
    nav{
        .ml-auto{
            margin-left:auto;
        }
        a{
            color: #fff;
            :hover{
                opacity: 50%;
                color: #fff;
            }
            transition: ease-in-out 0.1s;
        }
        
    }
`;
