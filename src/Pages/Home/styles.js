import styled from 'styled-components';

export const Container = styled.div`
  flex-grow:1;
  max-width: 1200px;
  padding: 15px;
  justify-content: center;
  margin: auto;
  .white{
      color: white;
  }
  .center-text{
    text-align: center;

  }
  .full-width{
    /* position: relative; */
    /* margin-left: -50vw; */
    /* margin-right: -50vw; */
    width: 100vw;
  }
  .color-dark{
      background-color: #353535;
      border-radius: 10px;
      color: white;
  }

  .d-flex{
    display:flex;
  }
  .avatar{
      margin: auto;
      object-fit: cover;
      border-radius: 50%;
  }
  div{
      width: 100%;
      justify-content: center;
      text-justify: center;
  }
  .MuiPaper-root{
      width: 100%;
  }
  .icon{
      height: 150px;
      width: 150px;
  }
  .d-block{
      display: block;
      margin: 30px 0;
    }
    caption{
        margin-top: 15px;
    }

`;
