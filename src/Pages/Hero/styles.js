import styled from 'styled-components';
import background from './../../assets/1.jpg'

export const Container = styled.div`
  
  width: 100vw;
  height: 100vh;
  
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
  
  background-position: 50% 0;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url(${background});
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media (max-width: 800px){
    background-size: 170%;
  }
  display: flex;
  justify-content: center;
  .content{
    .sroll-down-indicator{
      animation: bounce 1s ease infinite;
  bottom: 2rem;
  color: white;
  content: '╲╱';
  font-size: 2rem;
  height: 4rem;
  left: 50%;
  letter-spacing: -1px;
  line-height: 4rem;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.8;
  /* position: absolute; */
  text-align: center;
  width: 6rem;
}

@keyframes bounce {
  50% {
    transform: translateY(-20%);
  }
}




    .mt-10{
      margin-top: 80px;
    }
    width: 100%;
    max-width: 1200px;
    height: 100vh;
    
    div{
      margin: auto 0;
    }
    .avatar{
      height: 25vw;
      width: 25vw;
      object-fit: cover;
      border-radius: 50%;
      box-shadow: 10px 10px 10px black;
    }
    p{
      color: #00ffff;
      margin:0;
    }
    h1{
      text-shadow: 0 3px 10px black;
    }
    p, h1{
      margin-left: 10px;
    }

  }
`;
