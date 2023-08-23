import logo from './assets/logo.svg'

function App() {


  return (
    <>
      <div className='container'>
      <header className="header">
        <img className="logo" src={logo} alt="" />
        <span>Favor entrar com suas informações.</span>
      </header>
      <form>
        <div className="inputContainer">
        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" id="email" placeholder="sergio@email.com"/>
        </div>
        <div className="inputContainer">
        <label htmlFor="senha">Senha</label>
        <input type="senha" name="senha" id="senha" placeholder="************"/>
        </div>

        <a href="">Esqueceu sua senha?</a>

        <button className="button">Entrar</button>
        <div className="footer">
          <p>Não tem uma conta?</p>
          <a href="">Criar uma conta</a>
        </div>
      </form>
      </div>
    </>
  )
}

export default App
