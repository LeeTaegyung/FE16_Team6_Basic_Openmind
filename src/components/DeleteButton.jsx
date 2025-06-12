import { ButtonBrown40 } from '@components/Button.jsx';
import { deletePage } from '@service/api.js';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useToastContext } from '@context/ToastContext';

function DeleteButton({ id }) {
  const { createToast } = useToastContext();
  let redirect = true;
  const navigate = useNavigate();

  async function handleDelete() {
    let resultText;

    const redirect = await deletePage(id);
    if (redirect) {
      resultText = '삭제가 완료되었습니다.';
      navigate('/', { replace: true }); // / 으로 이동
    } else {
      resultText = '삭제에 실패했습니다.';
    }

    createToast({
      message: resultText,
    });
  }

  return (
    <>
      <Button onClick={handleDelete}>삭제하기</Button>
    </>
  );
}

export default DeleteButton;

const Button = styled(ButtonBrown40)`
  width: 72px;
  height: 25px;
  padding: 0;
  font-size: 10px;
  font-weight: 400;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 100px;
    height: 35px;
    font-size: 15px;
  }
`;
