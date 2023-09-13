const React = require('react');
const Layout = require('./Layout');

module.exports = function MyLists({ userSession, MyCoopers }) {
  // const { user } = userSession;
  return (
    <Layout userSession={userSession}>
       <script src="/js/my.lists.js" defer />
      <div className="listContainer">
        <h1 className='myListsAdapt'>Мои листки адаптации</h1><br /><br />
        <form name='createShablon'>
          {/* <div className='createShablonDiv'> */}
          <a type='button' className='createShablonBtn createShablonDiv' href='/mylists/shablon'>Создать листок</a>
          {/* </div> */}
        
        </form><br /><br /><br />
        <ol className='employeeList'>
        {MyCoopers.map((el) => 
            
            <li >
            {el.employee}
            {" "}
            <div className='oneEmployeeList'>
            <form name='ShowShablon'>
            <button className='ShowListBtn ListBtn' id={el.id}>Посмотреть листок</button>
            </form>
            <form name='EditShablon'>
            <button className='EditListBtn ListBtn' id={el.id}>Отправить листок</button>
            </form>
            <form name='DeleteShablon'>
            <button className='DeleteListBtn ListBtn' data-shablonid={el.id} id={el.id}>Удалить листок</button>
            </form>
            </div><br />
            </li>
          )}
        </ol>
    
      </div>
      
    </Layout>
  );
};
