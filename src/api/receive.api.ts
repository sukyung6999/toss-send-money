const baseURL = import.meta.env.VITE_API_BASE_URL;

export const getRecentAccountList = (id: number) => {
  return fetch(`${baseURL}/receive/recent?id=${id}`).then((res) => {
    if (!res.ok) throw new Error('최근 송금한 계좌 목록을 불러오는데 실패했습니다');

    return res.json();
  });
};

export const getContactAccountList = (id: number) => {
  return fetch(`${baseURL}/receive/contact?id=${id}`).then((res) => {
    if (!res.ok) throw new Error('나의 연락처 목록을 불러오는데 실패했습니다');

    return res.json();
  });
};

export const getBanksList = () => {
  return fetch(`${baseURL}/banks`).then((res) => {
    if (!res.ok) throw new Error('은행 목록을 불러오는데 실패했습니다');
    return res.json();
  });
};

export const getAccountHolder = (bankCode: string, accountNumber: string) => {
  return fetch(`${baseURL}/account/verify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ bankCode, accountNumber }),
  }).then((res) => {
    if (!res.ok) throw new Error('계좌 실명 조회에 실패했습니다');

    return res.json();
  });
};
