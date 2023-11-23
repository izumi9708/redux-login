// component 
import Header from "./Header";
import Menu from "./Menu";
import Contents from "./Contents";
import { useDispatch } from "react-redux";
import { firstMenuHide } from "../../futures/status";


function Top() {

  const dispatch = useDispatch();

  window.addEventListener('resize',() => {
    const body = document.getElementsByTagName('body');

    const width = body[0].clientWidth;

    if(width <= 900){
      dispatch(firstMenuHide())
    }
    
  })

  return (
    <div className="topComtents">
      <Header />
      <div className='flex'>
        <Menu />
        <Contents />
      </div>
    </div>
  )
}

export default Top;