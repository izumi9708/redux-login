import { MouseEvent } from "react";
import graphStyles from '../../styles/Graph.module.css';
import '../../styles/Graph.css';

function Graph() {

  let css = document.createElement('style');
  css.media = 'screen';
  css.type = 'text/css';

  let data1 = 55;
  let data2 = 5;
  let data3 = 30;
  let data4 = 10;

  let max = 100;

  let percent1 = Math.round(data1 / max * 100);
  let percent2 = Math.round(data2 / max * 100);
  let percent3 = Math.round(data3 / max * 100);
  let percent4 = Math.round(data4 / max * 100);

  let ownStroke = 100 - percent1;
  let otherStroke = 100 - (percent1 + percent2);
  let elseStroke = 100 - (percent1 + percent2 + percent3);


  let graphStroke = [
    `@keyframes own-store{
          to {
              stroke-dashoffset:${ownStroke};
          }
      }`,
    `@keyframes another-store{
          to {
              stroke-dashoffset:${otherStroke};
          }
      }`
    ,
    `@keyframes else-company{
          to {
              stroke-dashoffset:${elseStroke};
          }
      }`,
    `@keyframes hoge{
          to {
              stroke-dashoffset:0;
          }
      }`
  ];

  let rules = document.createTextNode(graphStroke.join(`\n`));
  css.appendChild(rules);
  let head = document.getElementsByTagName('head')[0];
  head.appendChild(css);


  function SelectedGraph(e:MouseEvent) {
    let ownPie = document.getElementById('own-store')!;
    let anotherPie = document.getElementById('another-store')!;
    let elsePie = document.getElementById('else-company')!;
    let hoge = document.getElementById('hoge')!;
    let pieChart = document.querySelector('.pie-graph')!;
    let selectPie = document.createElement('div');

    selectPie.classList.add('select-pie');

    let selectPieContent = `<div class="pie-color"></div><p class="pie-text"></p>`;

    selectPie.innerHTML = selectPieContent;

    pieChart?.appendChild(selectPie);

    let pieColor = document.querySelector('.pie-color')! as HTMLElement;
    let pieText = document.querySelector('.pie-text')!;


    if ((e.target as HTMLElement).classList.contains('own-store')) {
      anotherPie.style.filter = 'brightness(70%)';
      elsePie.style.filter = 'brightness(70%)';
      hoge.style.filter = 'brightness(70%)';
      pieColor.style.backgroundColor = '#736be7';
      pieText.textContent = `${percent1}%`

    } else if ((e.target as HTMLElement).classList.contains('another-store')) {
      ownPie.style.filter = 'brightness(70%)';
      elsePie.style.filter = 'brightness(70%)';
      hoge.style.filter = 'brightness(70%)';
      pieColor.style.backgroundColor = '#0F172A';
      pieText.textContent = `${percent2}%`

    } else if ((e.target as HTMLElement).classList.contains('else-company')) {
      ownPie.style.filter = 'brightness(70%)';
      anotherPie.style.filter = 'brightness(70%)';
      hoge.style.filter = 'brightness(70%)';
      pieColor.style.backgroundColor = '#3F51B5';
      pieText.textContent = `${percent3}%`
    } else {
      ownPie.style.filter = 'brightness(70%)';
      anotherPie.style.filter = 'brightness(70%)';
      elsePie.style.filter = 'brightness(70%)';
      pieColor.style.backgroundColor = '#2196F3';
      pieText.textContent = `${percent4}%`
    }
  }

  function selectOut() {
    let remove = document.querySelector('.select-pie')!;
    remove.remove();
    let pie = document.querySelectorAll('.graph-item');

    pie.forEach(item => {
      const pieItem = item as HTMLElement;
      pieItem.style.filter = 'unset';
    })
  }

  return (
    <div className={graphStyles.graphWrapper}>
      <div className={graphStyles.graphWrapperInner}>
        <div className={graphStyles.pieInner}>
          <div className={`${graphStyles.pieGraph} pie-graph`}>
            <svg id={graphStyles.svg} viewBox=" 0 0 64 64">
              <circle
                id="hoge"
                className={`${graphStyles.graphItem} ${graphStyles.hoge} graph-item hoge`}
                cx="50%"
                cy="50%"
                r="15.9154"
                onMouseEnter={(e) => { SelectedGraph(e) }}
                onMouseLeave={(e) => { selectOut() }}
              />
              <circle
                id="else-company"
                className={`${graphStyles.graphItem} ${graphStyles.elseCompany} graph-item else-company`}
                cx="50%"
                cy="50%"
                r="15.9154"
                onMouseEnter={(e) => { SelectedGraph(e) }}
                onMouseLeave={(e) => { selectOut() }}
              />
              <circle
                id="another-store"
                className={`${graphStyles.graphItem} ${graphStyles.anotherStore} graph-item another-store`}
                cx="50%"
                cy="50%"
                r="15.9154"
                onMouseEnter={(e) => { SelectedGraph(e) }}
                onMouseLeave={(e) => { selectOut() }}
              />
              <circle
                id="own-store"
                className={`${graphStyles.graphItem} ${graphStyles.ownStore} graph-item own-store`}
                cx="50%"
                cy="50%"
                r="15.9154"
                onMouseEnter={(e) => { SelectedGraph(e) }}
                onMouseLeave={(e) => { selectOut() }}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Graph;