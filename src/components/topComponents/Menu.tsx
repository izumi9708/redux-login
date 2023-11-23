import { useSelector } from 'react-redux';
import MenuStyles from '../../styles/Menu.module.css'

interface State {
  status: {
    status: string
    name: string
    menu: boolean
  }
}

function Menu() {
  const menu = useSelector((state: State) => state.status.menu);


  return (
    <div className={`${MenuStyles.menu} ${menu ? MenuStyles.menuActive : ''}`}>
      <ul className={MenuStyles.menuList}>
        <li className={`${MenuStyles.menuItem} ${MenuStyles.menuTop} ${MenuStyles.active}`}>
          <div className={MenuStyles.menuIcon}>
            <svg
              id="home_black_24dp"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50.5 50.5"
            >
              <path
                id="パス_8"
                data-name="パス 8"
                d="M18.833,38.771V26.146H27.25V38.771H37.771V21.938h6.312L23.042,3,2,21.938H8.313V38.771Z"
                transform="translate(2.208 3.313)"
                fill="#fff"
              />
            </svg>
          </div>
          <p className={MenuStyles.menuText}>トップ</p>
        </li>
      </ul>
    </div>
  )
}

export default Menu;