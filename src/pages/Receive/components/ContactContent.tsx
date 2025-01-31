import { useQuery } from '@tanstack/react-query';
import { getContactAccountList } from '../../../api/receive.api';
import { ContactAccountType, ReceiveContentProps } from '../../../types/receive';
import defaultImage from '../../../assets/images/img_default.png';
import Button from '../../../components/Button';

const ContactContent = ({ onSubmitAccount }: ReceiveContentProps) => {
  const id = import.meta.env.VITE_USER_ID;

  const { data } = useQuery({
    queryKey: ['contact', id],
    queryFn: () => getContactAccountList(id),
  });

  return (
    <>
      <input
        type="search"
        name="contact"
        id="contactList"
        placeholder="연락처를 검색하거나 입력할 수 있습니다"
        className="block w-full mb-[20px] text-[20px]"
      />
      <ul aria-label="연락처 목록">
        {data?.map((ele: ContactAccountType) => (
          <li key={ele.id}>
            <Button
              className="flex w-full py-[10px] border-b-[1px] border-b border-slate-200"
              onClick={() =>
                onSubmitAccount({
                  accountHolder: ele.name,
                  tel: ele.tel,
                })
              }
            >
              <img
                className="inline-block w-[30px] h-[30px] mr-[10px] rounded-lg shadow-xl dark:shadow-gray-800"
                src={defaultImage}
                alt="image description"
              />
              <div className="text-left">
                <strong className="block">{ele.name}</strong> {ele.tel}
              </div>
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactContent;
