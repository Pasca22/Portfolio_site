import BlackJackCard from "@/components/my_ui/blackjack_card";
import F1MinigameCard from "@/components/my_ui/f1minigame_card";
import MinesweeperCard from "@/components/my_ui/minesweeper_card";
import MyNavBar from "@/components/my_ui/my_navbar";
import PortfolioCard from "@/components/my_ui/portfolio_card";
import { Fade } from "react-awesome-reveal";

export default function Projects(): JSX.Element {
  return (
    <>
      <Fade cascade triggerOnce damping={0} direction="down">
        <MyNavBar />
      </Fade>
      <Fade cascade triggerOnce fraction={0.3} damping={0} direction="up">
        <PortfolioCard />
        <BlackJackCard />
        <MinesweeperCard />
        <F1MinigameCard />
      </Fade>
    </>
  );
}
