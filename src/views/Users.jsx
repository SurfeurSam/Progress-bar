const React = require('react');
const Layout = require('./Layout');

module.exports = function Users({ userSession, userList }) {
  return (
    <Layout userSession={userSession}>
      <script defer src="js/users.js" />
      <link rel="stylesheet" href="/css/users.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,100&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      <body>
        <div className="usersContainer">
          <h1 className='myListsAdapt'>Пользователи</h1>
          <div className='CreateUser'><button className="addUserButton">Добавить нового пользователя</button></div>
            {userList.map((user) => (
              <div className='usPad'><ul id='userList' className='usPad'>
                <li key={user.id} data-user-id={user.id} className='liGap'>
                  <span className='name'>{user.name}</span> - <span className='role'>{user.role ? 'Администратор' : 'Пользователь'}</span>
                  <select defaultValue={user.role ? 'true' : 'false'}>
                    <option value="false">Пользователь</option>
                    <option value="true">Администратор</option>
                  </select>
                  <button id={user.id} className="resetPasswordButton">Переназначить пароль</button>
                  <button className="deleteUserButton">Удалить пользователя</button>
                </li>
              </ul></div>
            ))}
      </div>
      </body>
    </Layout>
  );
};
