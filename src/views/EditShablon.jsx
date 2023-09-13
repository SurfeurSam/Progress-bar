const React = require("react");

module.exports = function EditShablon({ el }) {
  return (
      <form name="editForm" data-formid={el.id}>
        <div className="shablonShow"><br />
            <div className="greetings">
            Привет, {el.employee} <br />
            И добро пожаловать в команду Высокогорья!
            <br />
            Впереди нас ждет интересное путешествие в мир нашей
            <br /> компании, и самым главным проводником будет- {el.leader}
            <br />
            Мы подготовили для тебя чек-лист на первый день. Процесс
            <br />
            выполнения будет сохраняться, поэтому ты можешь закрывать пункты
            <br />в удобном для тебя порядке.
            </div>
            <div>
            <h4>Нужно подготовить твое рабочее место:</h4> 
            <div className="check">
            <div><input type="checkbox" name="task1"  defaultChecked={el.task1} />Наставник выдал мне пропуск</div>
            <div className="check">
            <div><input type="checkbox" name="task2" defaultChecked={el.task2} />Наставник сообщил пароль от Wi-Fi</div>
            </div>
            <div className="check">
            <div><input type="checkbox" name="task3" defaultChecked={el.task3} />Системный администратор выдал мне ноутбук</div>
            </div>
            <div className="check">
            <div><input type="checkbox" name="task4" defaultChecked={el.task4} />Системный администратор выдал мне доступы к почте</div>
            </div>
            <div className="check">
            <div><input type="checkbox" name="task5" defaultChecked={el.task5} />Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя канцелярии</div>
            </div>
            <h4>Важно познакомиться с коллегами:</h4> 
            <div className="check">
            <div><input type="checkbox" name="task6" defaultChecked={el.task6} />Ты познакомился (-ась) со своим руководителем</div>
            </div>
            <div className="check">
            <div><input type="checkbox" name="task7" defaultChecked={el.task7} />Ты написал(-а) сообщение в командный чат</div>
            </div>
            <div className="check">
              <div>Напиши имена трех твоих коллег по отделу: <input type="text" name="task8" defaultValue={el.task8}/>
            </div>
            <h4>Важно пройти оформление в отделе кадров:</h4> 
            <div className="check">
            <div><input type="checkbox" name="task9" defaultChecked={el.task9} />Ты отправил (-а) сканы документов на оформление в отдел кадров</div>
            </div>
            <div className="check">
            <div><input type="checkbox" name="task10" defaultChecked={el.task10} />Ты подписал (-а) соглашение о коммерческой тайне</div>
            </div>
            <h4>А теперь самое время работать:</h4>
            <div className="check">
            <div><input type="checkbox" name="task11" defaultChecked={el.task11} />Получи свою первую задачу у руководителя</div>
            </div>
            <div className="check">
            <div><input type="checkbox" name="task12" defaultChecked={el.task12} />Создай подпись в почте по корпоративному шаблону</div>
            </div><br />
            Классного путешествия! <br /> Команда Высокой горы 💚
            </div><br />
            </div>
            </div>
        </div>
      </form>
    )
};
