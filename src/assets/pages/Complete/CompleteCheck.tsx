import { useRemittanceStore } from "../../../store/useRemittanceStore";
import ThousandsSeperator from "../../util/ThousandsSeperator";

const CompleteCheck = () => {
  const {data} = useRemittanceStore();
  console.log(data)
  return <div>
    <strong>{data.payee}께 <br /> {ThousandsSeperator(data.amount)}원을 보냅니다.</strong>
    <span>{data.bank + '은행 ' + data.account || data.tel}</span>
    <span>받는 분 통장 표시: 이수경</span>
  </div>
}
export default CompleteCheck;