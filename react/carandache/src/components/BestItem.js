import React, { memo, useCallback, useState} from "react";
import styled from "styled-components";
import dataset from "../dataset";

const BestItemContainer = styled.div`
  .best-item {
    text-align: center;
    font-size: 29px;
    font-weight: bold;
    margin-top: 130px;
    margin-bottom: 70px;
  }

  ul {
    display: flex;
    width: 700px;
    margin: auto;
    justify-content: center;

    .tab {
      padding: 20px 30px;
      font-size: 22px;
      border-bottom: 2px solid #d0d0d0;
    }

    .active {
      border-bottom: 2px solid #da291c;
    }
  }

  .content-container {
    display: flex;
    width: 1500px;
    margin: auto;
    flex-wrap: wrap;

    ul {
      width: 25%;

      li {
        padding: 15px;

        a {

          img {
            width: 100%;
          }
       }
      }
    }
  }
`;

function BestItem() {
  /** useState로 탭 상태값 관리하기 */
  const [tabnum, setTabnum] = useState(0);

  const onTab = useCallback(function(e) {
    e.preventDefault();

    const tabindex = parseInt(e.target.dataset.tab);
    return setTabnum(tabindex);
  }, [tabnum]);


  return (
    <BestItemContainer>
      <h1 className="best-item">BEST ITEM</h1>
      <ul>
        <li className="tab"><a href="#" data-tab="0" onClick={onTab}>ALL</a></li>
        <li className="tab"><a href="#" data-tab="1" onClick={onTab}>COLORS</a></li>
        <li className="tab"><a href="#" data-tab="2" onClick={onTab}>WRITING</a></li>
        <li className="tab"><a href="#" data-tab="3" onClick={onTab}>FINE WRITING</a></li>
      </ul>

      <div className="content-container">
        {dataset.bestitem[tabnum].map((v, i) => {
          return (
            <ul>
              <li key={i}>
                <a href="#">
                  <img src={v.img} />
                  <div>
                    <h1>{v.category}</h1>
                    <h2>{v.desc}</h2>
                    <h3>{v.price}</h3>
                  </div>
                </a>
              </li>
            </ul>
          );
        })}
      </div>
    </BestItemContainer>
  );
};

export default memo(BestItem);