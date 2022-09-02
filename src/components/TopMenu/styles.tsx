import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    .logo{
        margin-top: 38.82px;
    }

nav, ul{
    display: flex;
    align-items: center;
    gap: 45px;

    li{
        list-style-type: none;
      
        .icons{
            width: 22px;
            height: 20px;
            margin-right: 7px;
        }

        a{
            text-decoration: none;
          
        }
    }
}

.devAreaBox{
    
    background: ${(props) => props.theme.primary};
    border-radius: 5px;
    padding: 7px;
    display: flex;
    gap: 1rem;
    width: 188px;
    height: 60px;

    img{
        margin-left: 14px;
    }
   
    a{
    color: ${(props) => props.theme.background};
    text-decoration: none;
    font-size: 19px;
    font-weight: 800;
    width: 100px;
    }
}

`