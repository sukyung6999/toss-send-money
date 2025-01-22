import { useQuery } from "@tanstack/react-query";
import Button from "../../../components/Button";
import { getRecentAccountList } from "../../../../api/receive.api";
import { RecentAccountType } from "../../../../types/receive";

const RecentContent = () => {
  const userId = import.meta.env.VITE_USER_ID;
  const {data} = useQuery({
    queryKey: ['recent'],
    queryFn: () => getRecentAccountList(userId)
  })
  console.log(data);
  return <ul>
    {data.map((ele: RecentAccountType) => <li>
    <Button>
      {ele.name}
      {ele.bank} {ele.account}
    </Button>
    <Button>
      즐겨찾기
    </Button>
  </li>)}
</ul>
}
export default RecentContent;