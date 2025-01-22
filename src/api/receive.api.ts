export const getRecentAccountList = (id: number) => {
  return fetch(`http://localhost:3000/receive/recent?id=${id}`).then(res => {
    if (!res.ok) throw new Error('최근 송금한 계좌 목록을 불러오는데 실패했습니다')

    return res.json();
  })
}