import { useQuery } from "@tanstack/react-query";
import { getBanksList } from "../../../../api/receive.api";
import { BankCodeType, ReceiveContentProps } from "../../../../types/receive";
import { SubmitHandler, useForm } from "react-hook-form";

type AccountFormProps = {
  bank: string,
  accountNum: number
}

const AccountInputContent = ({onSubmitAccount}: ReceiveContentProps) => {
  const {register, handleSubmit, formState: {errors}} = useForm<AccountFormProps>();
  const onSubmit: SubmitHandler<AccountFormProps> = (data) => {
    console.log(data);
    onSubmitAccount(data)
  }
  const {data} = useQuery({
    queryKey: ['bank'],
    queryFn: () => getBanksList()
  })

  return <form onSubmit={handleSubmit(onSubmit)}>
  <select id="bankList" {...register('bank', { required: true })}>
    <option value="은행선택">은행선택</option>
      {data?.map((ele: BankCodeType) => <option key={ele.code} value={ele.name}>{ele.name}</option>)}
  </select>
  {errors.bank && <p>은행을 선택해주세요.</p>}
  <input type="tel" id="accountNum" placeholder="계좌번호 입력" inputMode="numeric" maxLength={14} {...register('accountNum', { required: true })} />
  {errors.accountNum && <p>계좌번호를 입력해주세요.</p>}
  <button>확인</button>
</form>
}
export default AccountInputContent;