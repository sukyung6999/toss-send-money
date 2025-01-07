import React from "react";
import Button from "../../../components/Button";

type keypadProps = {
  onNumClick: (num: string) => void,
  onDelete: () => void
}

const Keypad = ({onNumClick, onDelete}: keypadProps) => {
  return <ul role="group" aria-label="숫자 키패드" className="grid grid-cols-3 gap-4 mt-[50px]">
  {Array.from({length: 9}).map((_, idx) => <li key={idx}>
    <Button onClick={() => onNumClick(`${idx + 1}`)} className="w-full">{idx + 1}</Button>
  </li>)}
  <li>
    <Button onClick={() => onNumClick('00')} className="w-full">00</Button>
  </li>
  <li>
    <Button onClick={() => onNumClick('0')} className="w-full">0</Button>
  </li>
  <li>
    <Button onClick={onDelete} className="w-full">뒤로가기</Button>
  </li>
</ul>
}
export default React.memo(Keypad);