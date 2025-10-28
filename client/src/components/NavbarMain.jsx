import { UserIcon } from "lucide-react";

const NavbarMain = () => {
  return (
    <nav className="font-medium text-lg p-4 shadow-sm flex justify-between items-center px-12">
      <div className="flex items-center gap-12">
        <a
          className="text-4xl font-bold bg-gradient-to-r from-[#7F22FE] to-[#155DFC] bg-clip-text text-transparent"
          href="/"
        >
          Pinn
        </a>
        <ul className="flex space-x-12">
          <li className="inline-block">
            <a href="/dashboard" className="hover:text-blue-500">
              Dashboard
            </a>
          </li>
          <li className="inline-block">
            <a href="/skills" className="hover:text-blue-500">
              Skills
            </a>
          </li>
          <li className="inline-block">
            <a href="/challenges" className="hover:text-blue-500">
              Challenges
            </a>
          </li>
          <li className="inline-block">
            <a href="/leaderboard" className="hover:text-blue-500">
              Leaderboard
            </a>
          </li>
        </ul>
      </div>
      <div>
        <UserIcon size={32} className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default NavbarMain;
