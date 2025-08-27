
import './Header.css'
import logo from '../../images/Mask group.png'
import burger1 from '../../images/Menu.png'
import user from '../../images/User_Empty.png'

const Header = () => {
  return (
    <>

      <div className="header flex justify-between items-center h-[90px] bg-[#FFFFFF]">

        <div className="head-left flex gap-[36px] items-center">

          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="head-btn">
            <button className='w-[127px] h-[45px] rounded-[45px] bg-[#A16341] flex justify-center text-[white] items-center gap-[11px]'>
              <img src={burger1} alt="" /> Каталог
            </button>
          </div>

          <ul className='flex gap-[20px]'>

            <li>
              <a href="#">Оптовые продажи</a>
            </li>
            <li>
              <a href="#">Продажи в рознице</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
            <li>
              <a href="#">Вакансии</a>
            </li>
            <li>
              <a href="#">Отзывы</a>
            </li>

          </ul>

        </div>

        <div className="head-right">

          <div className="personal-cabinet flex justify-center items-center gap-[11px]">

              <img src={user} alt="" /> <span className="cab-text">Личный кабинет</span>

          </div>

          <div className="burger-menu flex justify-center items-center w-[41px] h-[41px]">
            <img src={burger1} alt="" />
          </div>

        </div>

      </div>

    </>
  )
}

export default Header