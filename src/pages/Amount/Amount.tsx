import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../layout/Header';
import Button from '../../components/Button';
import Keypad from './components/Keypad';
import ThousandsSeperator from '../../util/ThousandsSeperator';
import { useRemittanceStore } from '../../store/useRemittanceStore';

const Amount = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('0');

  const amountToString = () => {
    const amountNum = Number(amount);

    const parts = [
      amountNum > 99999999 && `${ThousandsSeperator(amount.slice(0, -8))}억`,
      amountNum > 9999 &&
        Number(amount.slice(-8, -4)) > 0 &&
        `${ThousandsSeperator(amount.slice(-8, -4))}만`,
      Number(amount.slice(-4)) > 0 && `${ThousandsSeperator(amount.slice(-4))}`,
    ].filter(Boolean);

    if (amountNum > 9999) return parts.join(' ') + '원';

    return '';
  };

  const handleNumClick = useCallback((num: string) => {
    setAmount((prev) => {
      if (prev === '0') {
        return num;
      }
      return prev + num;
    });
  }, []);

  const handleDelete = useCallback(() => {
    setAmount((prev) => {
      if (prev.length <= 1) return '0';
      return prev.slice(0, prev.length - 1);
    });
  }, []);

  const { setData } = useRemittanceStore();

  const handleAmoutSend = () => {
    setData({
      amount,
    });
    navigate(`/receive`);
  };

  return (
    <div>
      <Header title="송금" />
      <div className="pt-[50px]">{ThousandsSeperator(amount)}원</div>
      <div aria-hidden="true" className="min-h-[50px] text-slate-400">
        {amountToString()}
      </div>
      <Keypad onNumClick={handleNumClick} onDelete={handleDelete} />
      <div>
        <Button
          onClick={() => handleAmoutSend()}
          className="block mt-[30px] w-full h-[50px] bg-blue-600 rounded-md text-white"
        >
          보내기
        </Button>
      </div>
    </div>
  );
};
export default Amount;
