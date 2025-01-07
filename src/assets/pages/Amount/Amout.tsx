import { useState } from "react"
import Header from "../../layout/Header"
import ThousandsSeperator from "../../util/ThousandsSeperator";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Amount = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('0');

  const handleKeypadNumClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const num = event.currentTarget.innerText;

    setAmount(prev => prev + num)
  }

  const handleKeypadNumDelete = () => {
    setAmount(prev => prev.slice(0, prev.length - 1))
  }

  const amountToString = () => {
    const amountNum = Number(amount);

    const parts = [
      amountNum > 99999999 && `${ThousandsSeperator(amount.slice(0, -8))}억`,
      amountNum > 9999 && Number(amount.slice(-8,-4)) > 0 && `${ThousandsSeperator(amount.slice(-8, -4))}만`,
      Number(amount.slice(-4)) > 0 && `${ThousandsSeperator(amount.slice(-4))}`,
    ].filter(Boolean);

    if (amountNum > 9999) return parts.join(' ') + '원'

    return '';
  }

  return <div>
    <Header title="송금"/>
    <div className="pt-[50px]">{ThousandsSeperator(amount)}원</div>
    <div aria-hidden="true" className="min-h-[50px] text-slate-400">{amountToString()}</div>
    <ul role="group" aria-label="숫자 키패드" className="grid grid-cols-3 gap-4 mt-[50px]">
      {Array.from({length: 9}).map((_, idx) => <li key={idx}>
        <Button onClick={handleKeypadNumClick} className="w-full">{idx + 1}</Button>
      </li>)}
      <li>
        <Button onClick={handleKeypadNumClick} className="w-full">00</Button>
      </li>
      <li>
        <Button onClick={handleKeypadNumClick} className="w-full">0</Button>
      </li>
      <li>
        <Button onClick={handleKeypadNumDelete} className="w-full">뒤로가기</Button>
      </li>
    </ul>
    <div>
      <Button onClick={() => navigate('/receive')} className="block mt-[30px] w-full h-[50px] bg-blue-600 rounded-md text-white">보내기</Button>
    </div>
  </div>
}
export default Amount