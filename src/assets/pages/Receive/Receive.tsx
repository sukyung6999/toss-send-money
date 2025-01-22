import { useSearchParams } from "react-router-dom";
import Header from "../../layout/Header";
import ThousandsSeperator from "../../util/ThousandsSeperator";
import Button from "../../components/Button";
import { useState } from "react";
import RecentContent from "./components/RecentContent";

const Receive = () => {
  const [searchParams] = useSearchParams();
  const amount = searchParams.get('amount');
  const selectedTabStyle = 'border-solid border-black border-b-[1px]'

  const [selectedTab, setSelectedTab] = useState('recentTab');
  const handleTabBtnClick = (id: string) => {
    setSelectedTab(id);
  }

  return <div>
    <Header title={`${amount ? ThousandsSeperator(amount) : '0'}원 받는 분 입력`} />
    <div role="tablist" aria-label="받을 분 선택" className="flex justify-between my-[20px]">
      <Button onClick={() => handleTabBtnClick('recentTab')} className={`w-1/3 h-[50px] ${selectedTab === 'recentTab' ? selectedTabStyle : ''}`} role="tab" aria-controls="recentContent" aria-selected={selectedTab === 'recentTab' ? true : false} id="recentTab" tabIndex={selectedTab === 'recentTab' ? 1 : 0}>최근</Button>
      <Button onClick={() => handleTabBtnClick('accountTab')} className={`w-1/3 h-[50px] ${selectedTab === 'accountTab' ? selectedTabStyle : ''}`} role="tab" aria-controls="accountContent" aria-selected={selectedTab === 'accountTab' ? true : false} id="accountTab" tabIndex={selectedTab === 'accountTab' ? 1 : 0}>계좌</Button>
      <Button onClick={() => handleTabBtnClick('contactTab')} className={`w-1/3 h-[50px] ${selectedTab === 'contactTab' ? selectedTabStyle : ''}`} role="tab" aria-controls="contactContent" aria-selected={selectedTab === 'contactTab' ? true : false} id="contactTab" tabIndex={selectedTab === 'contactTab' ? 1 : 0}>연락처</Button>
    </div>
    <div id="recentContent" role="tabpanel" aria-labelledby="recentTab" className={`${selectedTab === 'recentTab' ? 'block' : 'hidden'}`} >
      <RecentContent/>
    </div>
    <div id="accountContent" role="tabpanel" aria-labelledby="accountTab" className={`${selectedTab === 'accountTab' ? 'block' : 'hidden'}`}  >
      <form action="">
        <select name="bank" id="bankList">
          <option value="은행선택">은행선택</option>
          <option value="NH농협">NH농협</option>
          <option value="카카오뱅크">카카오뱅크</option>
          <option value="KB국민">KB국민</option>
          <option value="토스뱅크">토스뱅크</option>
          <option value="신한">신한</option>
          <option value="우리">우리</option>
          <option value="IBK기업">IBK기업</option>
          <option value="하나">하나</option>
          <option value="새마을">새마을</option>
          <option value="부산">부산</option>
          <option value="iM뱅크(대구)">iM뱅크(대구)</option>
          <option value="케이뱅크">케이뱅크</option>
          <option value="신협">신협</option>
          <option value="우체국">우체국</option>
          <option value="SC제일">SC제일</option>
          <option value="경남">경남</option>
          <option value="광주">광주</option>
        </select>
        <input type="tel" name="accountnumer" id="accountNum" placeholder="계좌번호 입력" pattern="[0-9]-*" inputMode="numeric" maxLength={14} />
        <button>확인</button>
      </form>
    </div>
    <div id="contactContent" role="tabpanel" aria-labelledby="contactTab" className={`${selectedTab === 'contactTab' ? 'block' : 'hidden'}`}  >
      <input type="search" name="contact" id="contactList" placeholder="연락처를 검색하거나 입력할 수 있습니다" className="block" />
      <ul aria-label="연락처 목록">
        <li>
          <button type="submit">오빠1 010-000-0000</button>
        </li>
        <li>
          <button type="submit">친구1 010-000-0000</button>
        </li>
        <li>
          <button type="submit">친구2 010-000-0000</button>
        </li>
        <li>
          <button type="submit">친구3 010-000-0000</button>
        </li>
        <li>
          <button type="submit">친구4 010-000-0000</button>
        </li>
        <li>
          <button type="submit">친구5 010-000-0000</button>
        </li>
      </ul>
    </div>
  </div>
}
export default Receive;