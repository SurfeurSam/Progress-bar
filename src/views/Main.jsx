const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ userSession }) {
  return (
    <Layout userSession={userSession}>
      <div className="container">
        <p className="message">
          Привет!<br></br>
          <br></br>
          <span className='mountain'>Это корпоративный портал ООО “Высокая Гора”.<br></br>
          <br></br> Чтобы получить доступ к сайту - обратись в департамент HR.</span><br></br>
          <br></br>hr@v.gora.ru
        </p>
        <img
          src="/images/mega-creator (2) 1.svg"
          alt="Высокая гора"
          className="logoMain"
        />
      </div>
    </Layout>
  );
};
