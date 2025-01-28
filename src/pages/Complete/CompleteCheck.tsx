import { useRemittanceStore } from '../../store/useRemittanceStore';
import ThousandsSeperator from '../../util/ThousandsSeperator';

const CompleteCheck = () => {
  const { data } = useRemittanceStore();

  return (
    <div>
      <strong>
        {data.payee}께 <br />{' '}
        {data.bank
          ? `${ThousandsSeperator(data.amount)}원을 보냅니다.`
          : `${data.tel} 송금 안내를 보냅니다.`}
      </strong>
      <span>{data.bank ? `${data.bank}은행 ${data.account}` : data.tel}</span>
      <span>받는 분 통장 표시: 이수경</span>
    </div>
  );
};
export default CompleteCheck;
