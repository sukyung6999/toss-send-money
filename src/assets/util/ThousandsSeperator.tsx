const ThousandsSeperator = (str: string) => {
  return Number(str).toLocaleString('ko-KR')
}
export default ThousandsSeperator;