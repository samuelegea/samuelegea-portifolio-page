import styled from 'styled-components';
import background from './../../assets/1.jpg'

export const Container = styled.div`
  
  width: 100%;  
  display: inline-block;
  
  color: #fff;
  background: linear-gradient(72.44deg, #17181A 8.85%, #494C51 100%);

  background-repeat: no-repeat;

  position: absolute;
  top: calc(9*100vw/16);
  justify-content: center;
  
  .content{
    width: 100%;
    max-width: 1200px;

    .image{
      max-height: 80vw;
      max-width: 80vw;
    }
    
    .avatar{
      height: 25vw;
      width: 25vw;
      object-fit: cover;
      border-radius: 50%;
      box-shadow: 10px 10px 10px black;
    }
    p{
      color: #fff;
      margin:0;
    }
    h1{
      text-shadow: 0 3px 10px black;
    }
    p, h1, h3, h5{
      margin-left: 10px;
    }

  }
`;
