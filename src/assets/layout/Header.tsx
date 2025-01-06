interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="font-bold">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;