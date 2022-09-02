import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
  background: ${(props) => props.theme.background};
`;

export const ContainerTitle = styled.div`
display: flex;
margin-top: 116px;
flex-direction: column;
align-items: center;

img {
position: absolute;
margin-left: 42.5%;
margin-top: -130px;
}

h1 {
    font-family: 'Nunito Sans';
font-style: normal;
font-weight: 900;
font-size: 40px;
line-height: 68px;
text-transform: uppercase;
color: #6A3778;
}

h2 {
font-family: 'Nunito Sans';
margin-top: 10px;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 49px;
color: #6A3778;

}

`

export const ContainerLogin = styled.div ` 
position: absolute;
margin-left: 36%;
margin-top: 115px;
text-align: center;
width: 800px;
height:665px;
background: #FFFFFF;
border: 1px solid #969696;
box-shadow: 5px 4px 30px rgba(0, 0, 0, 0.15);
border-radius: 8px;


.senha {
    margin-top: 30px;
}

img {
    margin-top: 20px;
    width: 100px;
    height: 100px;
}

h1 {
margin-top: 30px;
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 900;
font-size: 30px;
line-height: 49px;
color: #6A3778;
margin-bottom: 30px;
}

h3 {
text-align: left;
margin-left: 200px;
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 900;
font-size: 20px;
line-height: 41px;
color: #6A3778;

}


input {
display: block;
margin-left: 200px;
padding-left: 15px;
font-size: 15px;
width: 400px;
height: 50px;
background: #FEFEFE;
border: 1px solid #9A9898;
box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.25);
border-radius: 5px;
}

h4{
text-align: left;
margin-left: 200px;
margin-top: 6px;
margin-bottom: 39px;

font-family: 'Nunito Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 41px;
text-decoration-line: underline;
color: #F95632;
}

button {
width: 400px;
height: 66px;
background: #6A3778;
border-radius: 5px;
border: none;
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 900;
font-size: 16px;
line-height: 41px;
color: #FFFFFF;

}

`
export const ButtonNewDev = styled.button ` 
position: absolute;
width: 500px;
height:70px;
margin-top: 850px;
margin-left: 42%;
background-color: transparent;
border: 5px solid #B7D930;
border-radius: 5px;

font-family: 'Nunito Sans';
font-style: normal;
font-weight: 900;
font-size: 20px;
line-height: 41px;
text-transform: uppercase;
color: #B7D930;
`
export const ContainerPurple = styled.div ` 
margin-top: 15%;
width: 100%;
height: 708px;
background-color: #3D2344;

img {
    margin-top: 20px;
}
`