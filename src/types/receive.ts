export type RecentAccountType = {
  id: string;
  name: string;
  bankCode: string;
  bankName: string;
  account: string;
  bookmark: boolean;
  tel: string;
};

export type ContactAccountType = {
  id: string;
  name: string;
  tel: string;
};

export type BankCodeType = {
  code: string;
  name: string;
};

export type RemittanceType = {
  amount: string;
  accountHolder: string;
  account: string;
  bankCode: string;
  tel: string;
};

export interface ReceiveContentProps {
  onSubmitAccount: (data: Partial<RemittanceType>) => void;
}
