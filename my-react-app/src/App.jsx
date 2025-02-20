
import "./App.css";
const courses = [
  { title: "React js + Next JS", color: "#C7EEFF", discount: false },
  { title: "Vue js + Nuxt JS", color: "#FFCE94", discount: false },
  { title: "Angular js", color: "#FFE38E", discount: "10%" },
  { title: "Golang", color: "#DDDDFF", discount: false },
  { title: "Node JS", color: "#FFEEF6", discount: false },
  { title: "График Дизайн", color: "#C7EEFF", discount: "10%" },
  { title: "3D Моделирование", color: "#FFCE94", discount: false },
  { title: "Мобилография", color: "#FFE38E", discount: "10%" },
  { title: "Компьютерная грамотность", color: "#DDDDFF", discount: false }
];


function App() {
  return (
    <>
      {headerCompany()}
      <h1 className="all-programm">Все программы обучения</h1>
      {ageCategory()}
      <hr />
       <div className="curs-radio">
       <div className="curs-btn">
      <h1 className="course-text">Направление</h1>
      <CoursesBtn courses={courses} />
      {createCard()}
      </div>
      {radioPart()}
       </div>
    </>
  );
}

function headerCompany() {
  return (
    <header>
      <img src="./Group 1.png" alt="" className="company-icon" />
      <button className="courses">Все курсы</button>
      <button className="event">Мероприятие</button>
      <button className="brain-base">База знаний</button>
      <button className="career">Карьера</button>
      <button className="location">Адрес</button>
      <button className="phone">Номер телефона</button>
      <button className="sigin">Войти</button>
    </header>
  );
}

function ageCategory() {
  return (
    <div className="age-parent">
      <div className="age-category">
        <img src="./children.png" alt="" className="age-icon" />
        <div className="age-text">
          <h3 className="text">Дети</h3>
          <p className="age">8-14 лет</p>
        </div>
      </div>

      <div className="age-category">
        <img src="./children (1).png" alt="" className="age-icon" />
        <div className="age-text">
          <h3 className="text">Подростки</h3>
          <p className="age">14-18 лет</p>
        </div>
      </div>

      <div className="age-category">
        <img src="./family.png" alt="" className="age-icon" />
        <div className="age-text">
          <h3 className="text">Взрослые</h3>
          <p className="age">18- ∞ лет</p>
        </div>
      </div>
    </div>
  );
}

function CoursesBtn({ courses }) {
  return ( <div className="courses-container">{courses.map((course) => ( <button className="course-btn">  {course.title}</button>))}</div>);
}

function radioPart() {
  return(
    <div className="radio-parent">
      <h3 className="radio-text">Уровень сложности</h3>
      <div className="hardly-container">
        <div className="complexity">
          <input type="radio"  />
          <p>Новичок</p>
        </div>

        <div className="complexity">
          <input type="radio"  />
          <p>Пользователь</p>
        </div>

        <div className="complexity">
          <input type="radio"  />
          <p>Професионал</p>
        </div>
        <div className="complexity">
          <input type="radio"  />
          <p>Читер</p>
        </div>
        
      </div>
     <hr className="hr2" />
      <div className="type">
          <h3 className="type-text">Тип обучения</h3>
          <div className="type-parent">
          <div className="complexity">
          <input type="radio"  />
          <p>Любой</p>
        </div>
        <div className="complexity">
          <input type="radio"  />
          <p>Професия</p>
        </div>
        <div className="complexity">
          <input type="radio"  />
          <p>Курс</p>
        </div>
          </div>
         </div>
      
    </div>
  )
}


function createCard() {
  return (
    <div className="card-parent">
      {courses.map((course) => (
        <div  className="course-card" style={{ backgroundColor: course.color }}>
          <p className="programm2">Программа</p>
          <div className="icon-text">
            <img src="./Group 815.png" alt="" className="course-icon" />
            <h1 className="program-text">{course.title}</h1>
          </div>

         <div className="data-overview">
         <p className="direction">Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются 
         на смартфонах, умных часах и планшетах. </p>
         <p className="data">24-месяц</p>
         </div>
         {course.discount !== false && <div className="sale">{course.discount}</div>}
        </div>
      ))}
    </div>
  );
}


export default App;
