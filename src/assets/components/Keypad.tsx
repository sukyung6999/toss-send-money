import React from "react";
import Button from "./Button";

type keypadProps = {
  handleKeypadNumClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
  handleKeypadNumDelete: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Keypad = ({handleKeypadNumClick, handleKeypadNumDelete}: keypadProps) => {
  return <ul role="group" aria-label="숫자 키패드" className="grid grid-cols-3 gap-4 mt-[50px]">
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
}
export default React.memo(Keypad);