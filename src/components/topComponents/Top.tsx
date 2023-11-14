// component 
import Header from "./Header";
import Menu from "./Menu";

function Top() {
  return (
    <div className="topComtents">
      <Header />
      <div className='flex'>
        <Menu />
        
      </div>
    </div>
  )
}

export default Top;