const React = require('react');
const Layout = require('./Layout');

module.exports = function Login({ userSession }) {
  return (
    <Layout userSession={userSession}>
      <script defer src="js/login.js" />
      <link rel="stylesheet" href="/css/login.css" />
      <div className="container">
        <h1 className="title">Авторизация пользователя</h1>
        <form name="logForm" className="form">
          <label htmlFor="username" className="label">
            Почта:
          </label>
          <input name="email" type="name" className="input" />

          <label htmlFor="password" className="label">
            Пароль:
          </label>
          <input name="password" type="password" className="input" />

          <input type="submit" value="Войти" className="button" />
        </form>
      </div>
    </Layout>
  );
};
