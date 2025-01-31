import { useRemittanceStore } from '../../store/useRemittanceStore';
import ThousandsSeperator from '../../util/ThousandsSeperator';
import { BankCodeType } from '../../types/receive';
import { useBankList } from '../../hooks/useBankList';
import Header from '../../layout/Header';

const CompleteCheck = () => {
  const { data } = useRemittanceStore();

  const { data: bankList } = useBankList();

  const selectedBank = bankList.find((bank: BankCodeType) => bank.code === data.bankCode);

  console.log(data);
  return (
    <div>
      <Header />
      <strong className="block mt-[40px] text-[25px]">
        {data.accountHolder}님께 <br />{' '}
        {data.bankCode
          ? `${ThousandsSeperator(data.amount)}원을 보냅니다.`
          : `${data.tel} 송금 안내를 보냅니다.`}
      </strong>
      <span className="block py-[10px] text-blue-600 text-[15px]">
        {data.bankCode ? `${selectedBank.name} ${data.account}` : data.tel}
      </span>
      <span className="inline-block px-[10px] py-[4px] rounded-[5px] bg-gray-100 text-[13px]">
        받는 분 통장 표시: 이수경
      </span>
      <button className="fixed bottom-0 left-0 w-full py-[20px] bg-blue-600 text-white font-bold">
        보내기
      </button>
    </div>
  );
};
export default CompleteCheck;
