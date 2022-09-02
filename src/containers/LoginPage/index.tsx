import { Container, ContainerTitle , ContainerLogin , ButtonNewDev ,ContainerPurple } from "./styles";
import LogoImg from '../../assets/logo.png'
import LogoImgTransparent from '../../assets/devclublogotransparent.svg'
import LogoImgTransparentTop from '../../assets/devclublogotransparenttop.svg'

export function LoginPage() {
  return (
    <Container>
      <ContainerTitle>
        <img src={LogoImgTransparentTop} alt="logo-devclub"></img>
        <h1>ACESSO DOS DEVS</h1>
        <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel quisque
            imperdiet etiam volutpat cursus id.
        </h2>  
      </ContainerTitle>  
      <ContainerLogin>
        <div>
          <img src={LogoImg} alt="logo-image"></img>

          <h1>FAÇA SEU LOGIN</h1>

          <h3>Digite seu E-mail</h3>
          <input type="text" name="email" id="email-login" />

          <h3 className="senha" >Senha</h3>
          <input type="text" name="senha"></input>
    
          <h4>Esqueci minha senha</h4>

          <button>ENTRAR</button>
        </div>
      </ContainerLogin>

      <ButtonNewDev>Não tem cadastro? Clique aqui</ButtonNewDev>

      <ContainerPurple id="background-down">
        <img src={LogoImgTransparent} alt="logo-transparent"></img>
      </ContainerPurple>
    </Container>
  );
}
