import { useQuery } from '@tanstack/react-query';
import Button from '../../../components/Button';
import { getRecentAccountList } from '../../../api/receive.api';
import { RecentAccountType, ReceiveContentProps } from '../../../types/receive';

const RecentContent = ({ onSubmitAccount }: ReceiveContentProps) => {
  const userId = import.meta.env.VITE_USER_ID;
  const { data } = useQuery({
    queryKey: ['recent'],
    queryFn: () => getRecentAccountList(userId),
  });

  return (
    <ul>
      {data?.map((ele: RecentAccountType) => (
        <li key={ele.id}>
          <Button
            onClick={() =>
              onSubmitAccount({
                payee: ele.name,
                bank: ele.bank,
                account: ele.account,
              })
            }
          >
            {ele.name}
            {ele.bank} {ele.account}
          </Button>
          <Button>즐겨찾기</Button>
        </li>
      ))}
    </ul>
  );
};
export default RecentContent;
