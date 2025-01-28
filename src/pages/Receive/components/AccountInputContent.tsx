import { useQuery } from '@tanstack/react-query';
import { getBanksList } from '../../../api/receive.api';
import { BankCodeType, ReceiveContentProps } from '../../../types/receive';
import { SubmitHandler, useForm } from 'react-hook-form';

type AccountFormProps = {
  bank: string;
  accountNum: number;
};

const AccountInputContent = ({ onSubmitAccount }: ReceiveContentProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountFormProps>();
  const onSubmit: SubmitHandler<AccountFormProps> = (data) => {
    onSubmitAccount(data);
  };
  const { data } = useQuery({
    queryKey: ['bank'],
    queryFn: () => getBanksList(),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select
        id="bankList"
        {...register('bank', {
          required: '은행을 선택해주세요.',
          validate: (value) => {
            if (value === '은행 선택') {
              return '은행을 선택해주세요.';
            }
            return true;
          },
        })}
      >
        <option value="은행 선택">은행 선택</option>
        {data?.map((ele: BankCodeType) => (
          <option key={ele.code} value={ele.code}>
            {ele.name}
          </option>
        ))}
      </select>
      <p>{errors.bank?.message}</p>
      <input
        type="tel"
        id="accountNum"
        placeholder="계좌번호 입력"
        inputMode="numeric"
        {...register('accountNum', {
          required: '계좌번호를 입력해주세요.',
          minLength: { value: 11, message: '계좌번호를 올바르게 입력해주세요.' },
        })}
      />
      <p>{errors.accountNum?.message}</p>
      <button>확인</button>
    </form>
  );
};
export default AccountInputContent;
