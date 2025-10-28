import NavbarLandingPage from "../components/NavbarLandingPage";
import Footer from "../components/Footer";
import {
  Zap,
  Flame,
  Trophy,
  UsersRound,
  Network,
  BookOpen,
  Star,
} from "lucide-react";
import {useNavigate} from "react-router-dom";

const Card = ({ title, description, icon: Icon, iconColor }) => {
  return (
    <div className="p-4 rounded-lg shadow-md bg-white w-64 flex flex-col gap-2 hover:scale-105 transform transition-transform duration-300">
      <Icon className={`h-9 w-9 mb-2 ${iconColor}`} />
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <NavbarLandingPage />
      <main className="p-4 bg-[#F5F3FF] flex flex-col items-center min-h-screen">
        <div className="text-center mt-15 bg-[#EDE9FE] w-[250px] mx-auto px-10 py-2 rounded-4xl text-[#7F22FE] flex font-semibold hover:scale-105 transform transition-transform duration-300">
          <Zap className="inline-block mr-2 text-[#7F22FE]" />
          <h1>Level up your skills</h1>
        </div>
        <div className="flex text-center flex-col mt-8 font-bold text-7xl gap-y-4">
          <h1>Learn Programming Through</h1>
          <h1 className=" bg-gradient-to-r from-[#7F22FE] to-[#155DFC] bg-clip-text text-transparent h-auto">
            Epic Quests
          </h1>
        </div>
        <div className="text-center mt-8 text-xl text-gray-600 px-20">
          <h3 className="mx-auto max-w-[640px]">
            Transform your coding journey into an adventure. Earn XP, maintain
            streaks, unlock achievements, and compete with developers worldwide.
          </h3>
        </div>
        <div className="flex justify-center mt-8">
          <button onClick={() => navigate("/dashboard")} className="bg-gradient-to-r from-[#7F22FE] to-[#155DFC] text-white px-6 py-3 rounded-full font-semibold hover:from-[#155DFC] hover:to-[#7F22FE] transition-colors duration-300">
            Get Started
          </button>
          <button className="bg-white text-[#7F22FE] border border-[#7F22FE] px-6 py-3 rounded-full font-semibold hover:bg-[#7F22FE] hover:text-white transition-colors duration-300 ml-4">
            Learn More
          </button>
        </div>
        <div className="text-center mt-36 flex flex-col gap-y-4">
          <h1 className="text-5xl font-bold">Gamification That Works</h1>
          <h3 className="text-lg text-gray-600">
            Features designed to keep you motivated and engaged
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-12 px-4 max-w-5xl" id="features">
          <Card
            title="Daily Streaks"
            description="Maintain a daily coding streak to build consistency and earn rewards."
            icon={Flame}
            iconColor="text-yellow-500"
          />
          <Card
            title="Experience Points (XP)"
            description="Earn XP for completing coding challenges and quests."
            icon={Zap}
            iconColor="text-blue-500"
          />
          <Card
            title="Achievements"
            description="Unlock badges and achievements as you reach coding milestones."
            icon={Trophy}
            iconColor="text-red-500"
          />
          <Card
            title="Leaderboards"
            description="Compete with developers worldwide and climb the ranks."
            icon={UsersRound}
            iconColor="text-green-500"
          />
          <Card
            title="Community Challenges"
            description="Participate in community challenges to earn extra rewards."
            icon={Network}
            iconColor="text-purple-500"
          />
          <Card
            title="Skill Trees"
            description="Follow structured learning paths to master new skills."
            icon={BookOpen}
            iconColor="text-orange-500"
          />
        </div>
        <div className="mt-12 bg-[#155DFC] px-36 flex flex-col items-center py-12 rounded-3xl">
          <div className="flex gap-6">
            <Star className="h-12 w-12 mb-4" color="#FFD700" />
            <Star className="h-12 w-12 mb-4" color="#FFD700" />
            <Star className="h-12 w-12 mb-4" color="#FFD700" />
          </div>
          <h2 className="text-3xl font-bold text-white">
            Ready to Start Your Quest?
          </h2>
          <p className="text-white mt-4 text-center max-w-2xl">
            Join us and transform your coding journey into an epic adventure.
          </p>
          <button onClick={() => navigate("/dashboard")} className="mt-6 bg-white text-[#155DFC] px-6 py-3 rounded-full font-semibold hover:bg-[#E0E7FF] transition-colors duration-300">
            Get Started
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
