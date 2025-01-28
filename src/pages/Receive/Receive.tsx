import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '../../components/Button';
import Header from '../../layout/Header';
import RecentContent from './components/RecentContent';
import ContactContent from './components/ContactContent';
import AccountInputContent from './components/AccountInputContent';
import ThousandsSeperator from '../../util/ThousandsSeperator';
import { useRemittanceStore } from '../../store/useRemittanceStore';
import { RecentAccountType } from '../../types/receive';

const Receive = () => {
  const { data } = useRemittanceStore();
  const navigate = useNavigate();
  const selectedTabStyle = 'border-solid border-black border-b-[1px]';

  const [selectedTab, setSelectedTab] = useState('recentTab');
  const handleTabBtnClick = (id: string) => {
    setSelectedTab(id);
  };

  const { setData } = useRemittanceStore();

  const handleRecentAccountSubmit = (data: Partial<RecentAccountType>) => {
    setData(data);
    navigate('/completeCheck');
  };

  if (data.amount === '0')
    return (
      <p>
        페이지 정보가 갱신되었습니다. <br /> 뒤로 가기를 눌러 금액을 다시 입력해주세요.
      </p>
    );

  return (
    <div>
      <Header title={`${ThousandsSeperator(data.amount)}원 받는 분 입력`} />
      <div role="tablist" aria-label="받을 분 선택" className="flex justify-between my-[20px]">
        <Button
          onClick={() => handleTabBtnClick('recentTab')}
          className={`w-1/3 h-[50px] ${selectedTab === 'recentTab' ? selectedTabStyle : ''}`}
          role="tab"
          aria-controls="recentContent"
          aria-selected={selectedTab === 'recentTab' ? true : false}
          id="recentTab"
          tabIndex={selectedTab === 'recentTab' ? 1 : 0}
        >
          최근
        </Button>
        <Button
          onClick={() => handleTabBtnClick('accountTab')}
          className={`w-1/3 h-[50px] ${selectedTab === 'accountTab' ? selectedTabStyle : ''}`}
          role="tab"
          aria-controls="accountContent"
          aria-selected={selectedTab === 'accountTab' ? true : false}
          id="accountTab"
          tabIndex={selectedTab === 'accountTab' ? 1 : 0}
        >
          계좌
        </Button>
        <Button
          onClick={() => handleTabBtnClick('contactTab')}
          className={`w-1/3 h-[50px] ${selectedTab === 'contactTab' ? selectedTabStyle : ''}`}
          role="tab"
          aria-controls="contactContent"
          aria-selected={selectedTab === 'contactTab' ? true : false}
          id="contactTab"
          tabIndex={selectedTab === 'contactTab' ? 1 : 0}
        >
          연락처
        </Button>
      </div>
      <div
        id="recentContent"
        role="tabpanel"
        aria-labelledby="recentTab"
        className={`${selectedTab === 'recentTab' ? 'block' : 'hidden'}`}
      >
        <RecentContent onSubmitAccount={handleRecentAccountSubmit} />
      </div>
      <div
        id="accountContent"
        role="tabpanel"
        aria-labelledby="accountTab"
        className={`${selectedTab === 'accountTab' ? 'block' : 'hidden'}`}
      >
        <AccountInputContent onSubmitAccount={handleRecentAccountSubmit} />
      </div>
      <div
        id="contactContent"
        role="tabpanel"
        aria-labelledby="contactTab"
        className={`${selectedTab === 'contactTab' ? 'block' : 'hidden'}`}
      >
        <input
          type="search"
          name="contact"
          id="contactList"
          placeholder="연락처를 검색하거나 입력할 수 있습니다"
          className="block"
        />
        <ContactContent onSubmitAccount={handleRecentAccountSubmit} />
      </div>
    </div>
  );
};
export default Receive;
