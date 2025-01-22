import { useQuery } from "@tanstack/react-query";
import Button from "../../../components/Button";
import { getRecentAccountList } from "../../../../api/receive.api";

const RecentContent = () => {
  const userId = import.meta.env.VITE_USER_ID;
  const {data} = useQuery({
    queryKey: ['recent'],
    queryFn: () => getRecentAccountList(userId)
  })
  console.log(data);
  return <ul>
  <li>
    <Button>
      고모부
      농협 
    </Button>
    <Button>
      즐겨찾기
    </Button>
  </li>
</ul>
}
export default RecentContent;