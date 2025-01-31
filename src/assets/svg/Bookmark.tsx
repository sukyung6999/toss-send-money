type BookMarkSVGProps = {
  isFilled: boolean;
};

const BookMarkSVG = ({ isFilled }: BookMarkSVGProps) => {
  return (
    <svg
      className="w-6 h-6 text-blue-600 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill={isFilled ? 'currentColor' : 'none'}
      viewBox="0 0 14 20"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
        d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"
      ></path>
    </svg>
  );
};
export default BookMarkSVG;
