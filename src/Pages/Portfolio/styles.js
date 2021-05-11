import styled from 'styled-components';
import background from './../../assets/1.jpg'

export const Container = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;

  .content{
    .project-card{
      min-height: 50px;
      margin: 30px 0;
      text-align:center;
      position: relative;
      /* :hover a div .cantos{
        &.direito ::before{width:20px;}
        &.esquerdo ::before{width:20px;}
        &.superior ::after{height:20px;}
        &.inferior ::after{height:20px;}
        } */
      :hover a div span::before{width:20px!important;}
      :hover a div span::after{height:20px!important;}
      span::before, span::after {transition: all .5s ease;}
      .cantos{
        position: absolute;
        &.direito{
          right: 0;
          ::before{
            content: "";
            position: absolute;
            height: 2px;
            width: 0px;
            /* transition: width 2s; */
            background-color: #fff;
            transform:translateX(-100%) 
          }
        }
        &.esquerdo{
          left: 0;
          ::before{
            content: "";
            position: absolute;
            height: 2px;
            width: 0px;
            /* transition: width 2s; */
            background-color: #fff;

          }

        }
        &.superior{
          top: 0;
          ::after{
            content: "";
            position: absolute;
            width: 2px;
            height: 0px;
            background-color: #fff;
            /* transition: height 2s; */
          }
        }
        &.inferior{
          bottom: 0;
          ::after{
            content: "";
            position: absolute;
            width: 2px;
            height: 0px;
            background-color: #fff;
            transform:translatey(-100%);
            /* transition: height 2s; */
          }
        }
      }
        
    }   

    a{
      text-decoration: none;
      color: white;
      p{
        text-align:center;
      }
    }
    .svg{
      height: 100px;
      width: 100px;
      fill: #00ffff;

      margin: 20px 0;
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
