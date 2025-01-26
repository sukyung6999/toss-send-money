export type RecentAccountType = {
  id: string,
  name: string,
  bank: string,
  account: string,
  bookmark: boolean
}

export type ContactAccountType = {
  id: string,
  name: string,
  tel: string
}

export type BankCodeType = {
  code: string,
  name: string
}

export type RemittanceType = {
  amount: string,
  payee: string,
  account: string,
  bank: string,
  tel: string
}

export interface ReceiveContentProps {
  onSubmitAccount: (data: Partial<RemittanceType>) => void
}