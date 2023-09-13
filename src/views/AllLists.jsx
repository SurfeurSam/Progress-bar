const React = require('react');
const Layout = require('./Layout');

module.exports = function AllList({ userSession, Coopers }) {
  return (
    <Layout userSession={userSession}>
      <link rel="stylesheet" href="/css/progressbar.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,100&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      <script src="/js/showlist.js" defer />
      <div className="ListContainer">
        <h1 className='myListsAdapt'>Все листки адаптации</h1>
        {Coopers.map((el) => 

        <ol className='allListsOl'>
          <><div></div><li className='AlllistShablons '>
            <div className='empText'>
            {`Сотрудник: ${el.employee}`}
            </div>
            <div className='w3-light-grey w3-round-large progressDiv'>
              <button className="w3-container w3-red w3-round progressBar" value={el.percent} style={{ width: `${el.percent}%` }}>{el.percent}%</button>
            </div>
            <form name='ShowShablon'>
              <button className='ShowListBtn' id={el.id}>Посмотреть листок</button>
            </form>
          </li></>
          </ol>
        )}
      </div>
    </Layout>
  ); 
};
