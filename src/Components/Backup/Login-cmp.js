<div>
  <h1>Login</h1>
  <form method="POST" onSubmit={(e) => this.handleLogin(e)}>
    <div>
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        onChange={(e) => {
          this.setState({ email: e.target.value });
        }}
        id="InputEmail"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      ></input>
    </div>
    <div>
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        onChange={(e) => {
          this.setState({ password: e.target.value });
        }}
        id="InputPassword"
        placeholder="Password"
      ></input>
    </div>
    <button type="submit" id="btn-login">
      Login
    </button>
  </form>
</div>;
