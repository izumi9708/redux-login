import contentsStyle from '../../styles/Contents.module.css';
import Weather from './Weather';

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
              {/* <Day /> */}
              <div className={contentsStyle.containerItem}>
                <div className="container-inner schedule-inner">
                  <p className={contentsStyle.numberText}>本日の予定</p>
                  <div className="number-flex schedule-flex">
                    <p className={contentsStyle.flexText}>
                      <span className="flex-num item3">10</span>
                    </p>
                  </div>
                  <p className="link-text schedule">他３個のタスク</p>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className={contentsStyle.wrapperContainer}>
              {/* <Pie /> */}
              {/* <Ranking /> */}
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