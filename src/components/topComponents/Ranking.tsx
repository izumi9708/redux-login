import contentsStyle from '../../styles/Contents.module.css';

const areaData = [
  {
    number: '1',
    name: '〇〇店'
  },
  {
    number: '2',
    name: '〇〇店'
  },
  {
    number: '3',
    name: '〇〇店'
  },
  {
    number: '4',
    name: '〇〇店'
  },
  {
    number: '5',
    name: '〇〇店'
  }

];

function Ranking() {
  return (
    <div className={contentsStyle.rankingWrapper}>
      <div className={contentsStyle.rankingInner}>
        <div className={contentsStyle.rankingDisplay}>
          <div className={contentsStyle.rankingContent}>
            <div className={contentsStyle.rankingContentInner}>
              <div className={contentsStyle.rankingFlex}>
                <div className={contentsStyle.rankingOverview}>
                  <div className={`${contentsStyle.rankingFlexItem} ${contentsStyle.areaContainer}`}>
                    {areaData.map((val, index) => {
                      return (
                        <div
                          key={index}
                          className={contentsStyle.rankingItemContainer}>
                          <div className={contentsStyle.rankingNumberBg}>
                            <p className={contentsStyle.rankingNumber}>{val.number}</p>
                          </div>
                          <div className={contentsStyle.rankingText}>{val.name}</div>
                        </div>
                      )

                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ranking;