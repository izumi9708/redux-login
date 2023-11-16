import contentsStyle from '../../styles/Contents.module.css'

function Task() {
  return (
    <div className={contentsStyle.containerItem}>
      <div className={`${contentsStyle.containerInner} ${contentsStyle.scheduleInner}`}>
        <p className={contentsStyle.numberText}>本日の予定</p>
        <div className={`${contentsStyle.numberFlex} ${contentsStyle.scheduleFlex}`}>
          <p className={contentsStyle.flexText}>
            <span className={`${contentsStyle.flexNum} ${contentsStyle.item3}`}>10</span>
          </p>
        </div>
        <p className={`${contentsStyle.linkText} ${contentsStyle.schedule}`}>他３個のタスク</p>
      </div>
    </div>
  )
}

export default Task;