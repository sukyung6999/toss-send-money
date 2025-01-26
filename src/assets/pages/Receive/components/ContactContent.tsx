import { useQuery } from "@tanstack/react-query";
import { getContactAccountList } from "../../../../api/receive.api";
import { ContactAccountType, ReceiveContentProps } from "../../../../types/receive";
import Button from "../../../components/Button";

const ContactContent = ({onSubmitAccount}: ReceiveContentProps) => {
  const id = import.meta.env.VITE_USER_ID;

  const {data} = useQuery({
    queryKey: ['contact', id],
    queryFn: () => getContactAccountList(id)
  })

  return <ul aria-label="연락처 목록">
    {
      data?.map((ele: ContactAccountType) => <li key={ele.id}>
        <Button onClick={() => onSubmitAccount({
          payee: ele.name,
          tel: ele.tel
        })}>{ele.name} {ele.tel}</Button>
      </li>)
    }
</ul>
}
export default ContactContent;