

function Contents() {
  return (
    <div className="content">
      <div className="content-head">
        <p className="head-text">ようこそ〇〇さま</p>
        <div className="head-btn-wrapper">
          <button
            type="button"
            className="contact-btn"
            onClick={() => { window.location.href = "https://www.wantedly.com/id/sizumi" }}
          >
            お問合わせ
          </button>
          {/* <button type="button" class="logout-btn">ログアウト</button> */}
        </div>
      </div>
      {/* main-content */}
      <div className="main-content">
        <div className="breadcrumb">トップ</div>
        {/* ここまで */}
        <div className="main-inner">
          {/* number_content  */}
          <div className="number-wrapper">
            <div className="number-container">
              <Weather
                lat={lat}
                lon={lon}
                name={prefName}
                state={openModal}
              />
              <Day />
              <div className="container-item">
                <div className="container-inner schedule-inner">
                  <p className="number-text">本日の予定</p>
                  <div className="number-flex schedule-flex">
                    <p className="flex-text">
                      <span className="flex-num item3">10</span>
                    </p>
                  </div>
                  <p className="link-text schedule">他３個のタスク</p>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="wrapper-container">
              <Pie />
              <Ranking />
            </div>
            <div className="acutual-result-wrapper">
              <div className="result-inner">
                <h4 className="wrapper-title" />
                <div className="result-table-wrapper">現在準備中</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contents;