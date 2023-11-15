// component 
import Header from "./Header";
import Menu from "./Menu";
import Contents from "./Contents";


function Top() {
  return (
    <div className="topComtents">
      <Header />
      <div className='flex'>
        <Menu />
        <Contents/>
      </div>
    </div>
  )
}

export default Top;