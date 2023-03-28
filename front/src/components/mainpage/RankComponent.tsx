import IdolProfile from "../IdolProfile";
import styled from "styled-components";

const ComponentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

interface RankingNumType {
  rank: string;
}

/** 순위 숫자 (색을 다르게 부여) */
const RankingNum = styled.div<RankingNumType>`
  position: relative;
  top: ${props => (props.rank in ["1", "2", "3", "4"] ? "40px" : "20px")};
  font-size: ${props => (props.rank in ["1", "2", "3", "4"] ? "40px" : "20px")};
  color: rgba(0, 0, 0, 0);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #828282;
  font-weight: bold;

  /* color: ${props =>
    props.rank === "1"
      ? "#FFB800"
      : props.rank === "2"
      ? "#B7B7B7"
      : props.rank === "3"
      ? "#A55A23"
      : "#000000"}; */
`;

const NameDiv = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  margin-top: 5px;
`;

function RankComponent(props: any) {
  let IdolRank: any = 0;
  if (props.item.rank in ["1", "2", "3", "4"]) {
    IdolRank = (
      <IdolProfile width="170px" height="170px" shape="round" url={props.item.src}></IdolProfile>
    );
  } else {
    IdolRank = (
      <IdolProfile width="95px" height="95px" shape="round" url={props.item.src}></IdolProfile>
    );
  }
  return (
    <ComponentDiv>
      <RankingNum rank={props.item.rank}>{props.item.rank}</RankingNum>
      <div>{IdolRank}</div>
      <NameDiv>{props.item.name}</NameDiv>
    </ComponentDiv>
  );
}

export default RankComponent;
