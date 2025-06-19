const Register = () => {
  return (
    <div>
      <h1>Crie sua conta</h1>
      <p>Cadastre-se para compartilhar sua história com a comunidade</p>
      <form>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            placeholder="Digite seu nome"
            required
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            placeholder="Crie uma senha segura"
            required
          />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            required
          />
        </label>
        <button>Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
