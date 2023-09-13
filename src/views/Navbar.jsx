const React = require('react');

module.exports = function Navbar({ userSession }) {
  return (
    <nav className="navigation">
      <img src="/images/Group 1.svg" alt="Высокая гора" className="logo" />
      <div className="nav-links">
        {userSession.user ? (
          <>
            <a href="/alllists" className="nav-link">
              Все листки адаптации
            </a>
            <a href="/mylists" className="nav-link">
              Мои листки адаптации
            </a>
            {userSession.role ? (
              <a href="/users" className="nav-link">
                Пользователи
              </a>
            ) : null}
            <div className="right">
              <a href="/logout" className="nav-link logout">
                Выйти
              </a>
            </div>
          </>
        ) : (
          <>
            <div className="right">
              <a href="/login" className="nav-link auth">
                Авторизация
              </a>
            </div>
            {/* <a href="/registration" className="nav-link">
              Регистрация
            </a> */}
          </>
        )}
      </div>
    </nav>
  );
};
