import contentsStyle from '../../styles/Contents.module.css';
import Weather from './Weather';
import Day from './Day';
import Task from './Task';
import Graph from './Graph';
import Ranking from './Ranking';
import { useDispatch, useSelector } from "react-redux";
import { changeLoginStatus } from '../../futures/status';

interface State {
  status: {
    status: string
    name: string
  }
}

function Contents() {

  const name = useSelector((state: State) => state.status.name);
  const dispatch = useDispatch();


  return (
    <div className={contentsStyle.content}>
      <div className={contentsStyle.contentHead}>
        <p className={contentsStyle.headText}>{name}さま</p>
        <div className={contentsStyle.headBtnWrapper}>
          <button
            type="button"
            className={contentsStyle.contactBtn}
            onClick={() => { window.location.href = "https://www.wantedly.com/id/sizumi" }}
          >
            お問合わせ
          </button>
          <button
            type="button"
            className={contentsStyle.logoutBtn}
            onClick={() => dispatch(changeLoginStatus())}
          >
            ログアウト
          </button>
        </div>
      </div>
      {/* main-content */}
      <div className={contentsStyle.mainContent}>
        <div className={contentsStyle.breadcrumb}>トップ</div>
        <div className={contentsStyle.mainInner}>
          <div className={contentsStyle.numberWrapper}>
            <div className={contentsStyle.numberContainer}>
              <Weather />
              <Day />
              <Task />
            </div>
          </div>
          <div className="wrapper">
            <div className={contentsStyle.wrapperContainer}>
              <Graph />
              <Ranking />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contents;