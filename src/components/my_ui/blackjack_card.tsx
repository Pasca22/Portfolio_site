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

function BlackJackCard() {
  return (
    <>
      <Card className="mt-20 border-8">
        <CardHeader>
          <CardTitle className="pb-4">BlackJack</CardTitle>
          <CardDescription>
            Damn, this project was way more fun then expected. I started by
            challenging myself to finish it in one day and I accomplished that.
            I wanted to start this project only because I find it very
            interesting how this casino game isn't all about luck. Anybody can
            with at this game, with a little knowledge of mathematics and
            probabilities, just by counting the cards and that's why this game
            is more special for me then the other ones.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img src="/assets/blackjack/intro1.jpg"></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      When you will open the game, this will be the first window
                      that you are going to see.
                    </CardDescription>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img src="/assets/blackjack/intro2.jpg"></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      After you introduced the amount of money you want to play,
                      you are free to press the "START" button and enjoy the
                      game.
                    </CardDescription>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img
                        src="/assets/blackjack/bet.jpg"
                        className="w-8/12"
                      ></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      You will get introduced to the main window of the
                      application. After you introduce the betting amount, press
                      the "CHOOSE YOUR BET" button to lock in your bet.
                    </CardDescription>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img
                        src="/assets/blackjack/start.jpg"
                        className="w-8/12"
                      ></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      After that, just press the "START THE HAND" button and the
                      game will begin.
                    </CardDescription>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img
                        src="/assets/blackjack/main.JPG"
                        className="w-8/12"
                      ></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      You will arrive here, where you can start playing by
                      pressing one of the 2 buttons: "HIT" or "STAND".
                    </CardDescription>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img
                        src="/assets/blackjack/win.JPG"
                        className="w-8/12"
                      ></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      Congratulation! You've won this hand and you can continue
                      playing by pressing the "START THE HAND" button again.
                    </CardDescription>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img
                        src="/assets/blackjack/lose.JPG"
                        className="w-8/12"
                      ></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      Unfortunately you've lost this hand, but don't quit! You
                      can play again by pressing the "START THE HAND" button so
                      you can win your money back.
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
          <p>Technologies used: C#, Windows Forms in Visual Studio</p>
          <a href="https://github.com/Pasca22/Blackjack">
            <Button className="px-10 mb-4">GitHub</Button>
          </a>
        </CardFooter>
      </Card>
    </>
  );
}

export default BlackJackCard;
