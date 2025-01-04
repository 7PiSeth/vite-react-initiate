import ToggleTheme from "../common/ToggleTheme";

const Header = () => {
  return (
    <div className="h-[50px] flex items-center justify-center sticky top-0">
      <ToggleTheme />
    </div>
  )
}

export default Header