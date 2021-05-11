import styled from 'styled-components';
import background from './../../assets/1.jpg'

export const Container = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;

  .content{
    min-height: 500px;
    a{
      text-decoration: none;
      color: white;
      p{
        text-align:center;
      }
    }
    
    .w-80{
        width: 80%;
      }
    .quote{
      border-left: #00ffff 2px solid;
      padding-left: 10px;
    }
    h3{
      color: #00ffff;
      margin-left: 10px;
    }
    .justify-right{
        text-align: right;
      }
    p{
      color: #fff;
      text-align: justify;    
      
    }
  }
  
`;
