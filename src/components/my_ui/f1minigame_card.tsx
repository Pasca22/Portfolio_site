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

function F1MinigameCard() {
  return (
    <>
      <Card className="mt-20 border-8">
        <CardHeader>
          <CardTitle className="pb-4">F1 Minigame</CardTitle>
          <CardDescription>
            This project was my first one but i will never forget it. I started
            it as a tutorial for C#, but I didn't like the game that teacher
            wanted to create so I wanted to be innovative. I've decided to
            change it totally and make it a Formula One game, because F1 is my
            passion for some time now and I taught this project would be easier
            to complete if I make it fun for me and it was.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img
                        src="src/assets/f1-minigame/intro.jpg"
                        className="w-8/12"
                      ></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      This is the first window that you are going to see and you
                      will have 2 options to choose from: "START" and "QUIT".
                    </CardDescription>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img
                        src="src/assets/f1-minigame/select_driver.jpg"
                        className="w-8/12"
                      ></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      Here you will get to select one of the 20 drivers that
                      lined up for the 2021 F1 Season.
                    </CardDescription>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img
                        src="src/assets/f1-minigame/select_track.jpg"
                        className="w-8/12"
                      ></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      After you select your driver, a new checklist will pop up
                      so you can choose one of the 21 F1 circuits from the 2021
                      F1 Season.
                    </CardDescription>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img
                        src="src/assets/f1-minigame/start.jpg"
                        className="max-w-96"
                      ></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      At the start of the game, the instructions will be
                      presented to you and after you read them, you are free to
                      start the game.
                    </CardDescription>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img
                        src="src/assets/f1-minigame/main.jpg"
                        className="max-w-96"
                      ></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      You will start the race and your goal is to overtake all
                      the cars so you finish P1. Watch out, because one crash
                      will get you out of the race.
                    </CardDescription>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img
                        src="src/assets/f1-minigame/win.jpg"
                        className="max-w-96"
                      ></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      Congratulation!!! You overtook all the cars and finished
                      the race P1. I hope you will get this result every race!
                    </CardDescription>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex items-center justify-center p-6">
                      <img
                        src="src/assets/f1-minigame/crash.jpg"
                        className="max-w-96"
                      ></img>
                    </CardContent>
                    <CardDescription className="pb-3">
                      Ohh... Unfortunately you've crashed and you are out of the
                      race. Maybe the next Grand Prix will be luckier for you.
                      Keep your head up PILOT!
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
          <a href="https://github.com/Pasca22/f1-minigame">
            <Button className="px-10 mb-4">GitHub</Button>
          </a>
        </CardFooter>
      </Card>
    </>
  );
}

export default F1MinigameCard;
