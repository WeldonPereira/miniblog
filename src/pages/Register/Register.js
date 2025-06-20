const Register = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mt-6 mb-2">
        Cadastre-se para compartilhar sua história com a comunidade
      </h1>
      <p className="text-lg mb-2">Crie sua conta</p>
      <form autoComplete="off">
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
        <button className="text-white text-center cursor-pointer rounded-xl font-bold border-none py-2 mt-4 px-4 text-base">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Register;
