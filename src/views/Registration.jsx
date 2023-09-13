const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration({ userSession }) {
  return (
    <Layout userSession={userSession}>
      <script defer src="js/registration.js" />
      <div className="container">
        <h1 className="title">Регистрация пользователя</h1>
        <form name="regForm" className="form">
          <label htmlFor="username" className="label">
            Имя пользователя:
          </label>
          <input name="name" type="name" className="input" />

          <label htmlFor="email" className="label">
            Email:
          </label>
          <input name="email" type="email" className="input" />

          <label htmlFor="password" className="label">
            Пароль:
          </label>
          <input name="password" type="password" className="input" />

          <input type="submit" value="Зарегистрироваться" className="button" />
        </form>
      </div>
    </Layout>
  );
};
