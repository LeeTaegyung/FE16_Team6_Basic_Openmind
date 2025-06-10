import styled from 'styled-components';

const AnswerContent = ({ answer }) => {
  //       if(rejected임?) {
  //         ㅇㅇ 맞음 - 답변 거절 텍스트
  //       } else {
  //         ㄴㄴ 아님 - 답변 보여줌
  //       }

  return (
    <AnswerBoxText isRejected={answer.isRejected}>
      {answer.isRejected ? '답변 거절' : answer.content}
    </AnswerBoxText>
  );
};

export default AnswerContent;

const AnswerBoxText = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isRejected',
})`
  font-size: 16px;
  font-weight: 400;

  color: ${(props) => props.isRejected && props.theme.color.red50};
`;
