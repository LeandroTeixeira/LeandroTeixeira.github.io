import React from 'react';
import { createUser } from '../services/userAPI';
import Carregando from './Carregando';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      disabled: true,
      loading: false,
      userCreated: false,
    };
  }

  mainContent = (disabled, name) => (
    <form>
      Página de Login
      <input
        type="text"
        data-testid="login-name-input"
        onChange={ (e) => {
          const n = e.target.value;
          const max = 3;
          if (n.length < max) disabled = true;
          else disabled = false;
          this.setState({ name: n,
            disabled });
        } }
      />
      <button
        type="button"
        data-testid="login-submit-button"
        disabled={ disabled }
        onClick={ async () => {
          this.setState({ loading: true });
          await createUser({ name });
          this.setState({ userCreated: true });
          console.log('Deveria ter funcionado');
        } }
      >
        Entrar

      </button>

    </form>)

  render() {
    const { disabled } = this.state;
    const { name, loading, userCreated } = this.state;
    return (
      <div data-testid="page-login">
        {console.log(loading)}
        { loading
          ? <Carregando src="Login" update={ userCreated } />
          : this.mainContent(disabled, name, userCreated)}
      </div>
    );
  }
}

export default Login;
