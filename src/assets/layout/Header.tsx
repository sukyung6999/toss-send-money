import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <header className="font-bold relative">
      <Button onClick={() => navigate(-1)} className="absolute left-[20px] top-0">뒤로가기</Button>
      <h1 className="inline-block">{title}</h1>
    </header>
  );
};

export default Header;