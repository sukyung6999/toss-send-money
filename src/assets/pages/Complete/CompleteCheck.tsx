import { useRemittanceStore } from "../../../store/useRemittanceStore";

const CompleteCheck = () => {
  const {data} = useRemittanceStore();
  console.log(data)
  return <div></div>
}
export default CompleteCheck;