import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";

function MinesweeperCard() {
  return (
    <>
      <Card className="mt-20 border-8">
        <CardHeader>
          <CardTitle className="pb-4">Minesweeper</CardTitle>
          <CardDescription>
            I cannot believe I've played this game for almost 15 years now. I
            started playing it on my first PC because it came with Windows XP
            and at that age it gave me a real headache trying to understand it's
            rules. Now I play it every other day probably and it's the best
            medicine for me against boredom and that's the reason I started
            developing it. I wanted to feel even better when i click the last
            square and I win a game.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img src="src/assets/minesweeper/intro.jpg"></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      First option: Just press "START" and the game will start
                      in Easy mode.
                    </CardDescription>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img src="src/assets/minesweeper/intro_medium.jpg"></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      Second option: Select one of the three difficulties: Easy,
                      Medium or Hard.
                    </CardDescription>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img src="src/assets/minesweeper/intro_custom.jpg"></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      Third option: Introduce your own difficulty and start your
                      own custom game.
                    </CardDescription>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img
                        src="src/assets/minesweeper/main.jpg"
                        className="max-w-64"
                      ></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      You will arrive to the main window where you can start
                      playing and enjoying the game.
                    </CardDescription>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img
                        src="src/assets/minesweeper/midgame.jpg"
                        className="max-w-64"
                      ></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      The rules are the same as usual: click the empty spaces
                      and right-click the bombs so you put down the flags on
                      them and they can't be clicked anymore.
                    </CardDescription>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img
                        src="src/assets/minesweeper/win.jpg"
                        className="max-w-64"
                      ></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      After you win, the game will congratulate and notify you
                      with your time. Try to beat that and become better.
                    </CardDescription>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img
                        src="src/assets/minesweeper/lose.jpg"
                        className="max-w-64"
                      ></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      If you click a bomb, the game will stop and reveal you all
                      the other ones. I advise you to try again and don't give
                      up.
                    </CardDescription>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p>Technologies used: C#, Console Application in Visual Studio</p>
          <a href="https://github.com/Pasca22/Minesweeper">
            <Button className="px-10 mb-4">GitHub</Button>
          </a>
        </CardFooter>
      </Card>
    </>
  );
}

export default MinesweeperCard;
