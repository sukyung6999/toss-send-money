import { useQuery } from "@tanstack/react-query";
import { getBanksList } from "../../../../api/receive.api";
import { BankCodeType } from "../../../../types/receive";

const AccountInputContent = () => {
  const {data} = useQuery({
    queryKey: ['bank'],
    queryFn: () => getBanksList()
  })


  return <form action="">
  <select name="bank" id="bankList">
  <option value="은행선택">은행선택</option>
    {data?.map((ele: BankCodeType) => <option key={ele.code} value={ele.code}>{ele.name}</option>)}
  </select>
  <input type="tel" name="accountnumer" id="accountNum" placeholder="계좌번호 입력" pattern="[0-9]-*" inputMode="numeric" maxLength={14} />
  <button>확인</button>
</form>
}
export default AccountInputContent;