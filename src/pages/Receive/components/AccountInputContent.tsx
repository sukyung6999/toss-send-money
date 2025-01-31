import { useMutation } from '@tanstack/react-query';
import { getAccountHolder } from '../../../api/receive.api';
import { BankCodeType, ReceiveContentProps } from '../../../types/receive';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useBankList } from '../../../hooks/useBankList';
import LoadingSpinner from '../../../components/LoadingSpinner';
import Alert from '../../../components/Alert';

type AccountFormProps = {
  bank: string;
  accountNum: string;
};

const AccountInputContent = ({ onSubmitAccount }: ReceiveContentProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountFormProps>();

  const onSubmit: SubmitHandler<AccountFormProps> = async (data) => {
    verifyAccountMutation.mutate({ bank: data.bank, accountNum: data.accountNum });
  };

  const { data: bankList } = useBankList();

  const verifyAccountMutation = useMutation({
    mutationFn: ({ bank, accountNum }: AccountFormProps) => getAccountHolder(bank, accountNum),
    onSuccess: (data, variables) => {
      onSubmitAccount({
        accountHolder: data.accountHolder,
        bankCode: variables.bank,
        account: variables.accountNum,
      });
    },
  });

  return (
    <div className="relative">
      <form onSubmit={handleSubmit(onSubmit)} className="text-[20px]">
        {verifyAccountMutation.isPending && <LoadingSpinner loadingTxt="송금 계좌 조회중" />}
        <select
          className="w-full"
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
          {bankList?.map((ele: BankCodeType) => (
            <option key={ele.code} value={ele.code}>
              {ele.name}
            </option>
          ))}
        </select>
        <p className="my-[15px] text-red-500 text-[15px] text-left font-bold">
          {errors.bank?.message}
        </p>
        <input
          type="tel"
          id="accountNum"
          placeholder="계좌번호 입력"
          inputMode="numeric"
          className="block w-full"
          {...register('accountNum', {
            required: '계좌번호를 입력해주세요.',
            minLength: { value: 11, message: '계좌번호를 올바르게 입력해주세요.' },
          })}
        />
        <p className="my-[15px] text-red-500 text-[15px] text-left font-bold">
          {errors.accountNum?.message}
        </p>
        <button className="fixed bottom-0 left-0 w-full py-[20px] bg-blue-600 text-white font-bold">
          확인
        </button>
      </form>
      {verifyAccountMutation.isError && (
        <Alert tit="계좌 조회 실패!" txt="입력하신 계좌는 존재하지 않습니다." />
      )}
    </div>
  );
};
export default AccountInputContent;
