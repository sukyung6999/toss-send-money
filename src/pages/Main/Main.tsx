import { useNavigate } from 'react-router-dom';
import defaultImage from '../../assets/images/img_default.png';
import Button from '../../components/Button';
import Header from '../../layout/Header';

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header title="메인" />
      <div className="flex justify-between items-center h-[100px]">
        <img
          className="inline-block w-[30px] h-[30px] rounded-lg shadow-xl dark:shadow-gray-800"
          src={defaultImage}
          alt="image description"
        />
        <div className="ml-[20px] mr-auto text-left">
          <h3>이수경</h3>
          <span>신용점수 900점</span>
        </div>
        <Button onClick={() => navigate('/amount')}>송금하기</Button>
      </div>
    </div>
  );
};
export default Main;
