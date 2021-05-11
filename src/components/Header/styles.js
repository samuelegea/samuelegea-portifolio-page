import styled from 'styled-components';

export const Container = styled.div`
    
    background: #000000 ;
    /* opacity: 40%; */
    z-index: 10;
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
