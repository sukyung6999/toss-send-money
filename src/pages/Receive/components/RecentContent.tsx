import { useQuery } from '@tanstack/react-query';
import defaultImage from '../../../assets/images/img_default.png';
import Button from '../../../components/Button';
import { getRecentAccountList } from '../../../api/receive.api';
import { RecentAccountType, ReceiveContentProps } from '../../../types/receive';
import BookMarkSVG from '../../../assets/svg/Bookmark';

const RecentContent = ({ onSubmitAccount }: ReceiveContentProps) => {
  const userId = import.meta.env.VITE_USER_ID;

  const { data } = useQuery({
    queryKey: ['recent'],
    queryFn: () => getRecentAccountList(userId),
  });

  return (
    <ul>
      {data?.map((ele: RecentAccountType) => (
        <li key={ele.id} className="flex justify-between py-[10px] border-b border-slate-200">
          <Button
            className="flex justify-between text-left"
            onClick={() =>
              onSubmitAccount({
                accountHolder: ele.name,
                bankCode: ele.bankCode,
                account: ele.account,
              })
            }
          >
            <div className="min-w-[70px] mr-[15px] text-center">
              {ele.bankCode ? (
                <span>{ele.bankName}</span>
              ) : (
                <img
                  className="inline-block w-[30px] h-[30px] rounded-lg shadow-xl dark:shadow-gray-800"
                  src={defaultImage}
                  alt="image description"
                />
              )}
            </div>
            <div>
              <span className="block font-bold fz-[18px]">{ele.name}</span>
              {ele.bankCode ? ele.account : ele.tel}
            </div>
          </Button>
          <Button className="inline-block" aria-label="즐겨찾기">
            <BookMarkSVG isFilled={ele.bookmark} />
          </Button>
        </li>
      ))}
    </ul>
  );
};
export default RecentContent;
