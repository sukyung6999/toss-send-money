import { useQuery } from "@tanstack/react-query";
import { getContactAccountList } from "../../../../api/receive.api";
import { ContactAccountType } from "../../../../types/receive";

const ContactContent = () => {
  const id = import.meta.env.VITE_USER_ID;

  const {data} = useQuery({
    queryKey: ['contact', id],
    queryFn: () => getContactAccountList(id)
  })

  return <ul aria-label="연락처 목록">
    {
      data?.map((ele: ContactAccountType) => <li key={ele.id}>
        <button type="submit">{ele.name} {ele.tel}</button>
      </li>)
    }
</ul>
}
export default ContactContent;