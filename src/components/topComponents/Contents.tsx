import contentsStyle from '../../styles/Contents.module.css';
import Weather from './Weather';
import Day from './Day';
import Task from './Task';
import Graph from './Graph';
import Ranking from './Ranking';

function Contents() {
  return (
    <div className={contentsStyle.content}>
      <div className={contentsStyle.contentHead}>
        <p className={contentsStyle.headText}>ようこそ〇〇さま</p>
        <div className={contentsStyle.headBtnWrapper}>
          <button
            type="button"
            className={contentsStyle.contactBtn}
            onClick={() => { window.location.href = "https://www.wantedly.com/id/sizumi" }}
          >
            お問合わせ
          </button>
          {/* <button type="button" class="logout-btn">ログアウト</button> */}
        </div>
      </div>
      {/* main-content */}
      <div className={contentsStyle.mainContent}>
        <div className={contentsStyle.breadcrumb}>トップ</div>
        {/* ここまで */}
        <div className={contentsStyle.mainInner}>
          {/* number_content  */}
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
            <div className={contentsStyle.acutualResultWrapper}>
              <div className={contentsStyle.resultInner}>
                <h4 className={contentsStyle.wrapperTitle}></h4>
                <div className={contentsStyle.resultTableWrapper}>現在準備中</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contents;