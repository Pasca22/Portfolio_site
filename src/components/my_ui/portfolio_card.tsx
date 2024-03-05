import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

function PortfolioCard() {
  return (
    <>
      <Card className="mt-10 border-8">
        <CardHeader>
          <CardTitle className="pb-4">Portfolio site</CardTitle>
          <CardDescription>
            This website is really special for me. First of all, it lets me
            present my story to the world, so I can take everybody who reads it
            on my life journey. After this personal touch that i left here,
            anybody can start learning about my second passion, which is coding.
            I developed this website from scratch, so I can improve my front-end
            development skills and to prove everybody that anything can be done
            if you really want it.
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex justify-between">
          <p>Technologies used: HTML, CSS, TypeScript, React, Tailwind CSS</p>
          <Button className="px-10 mb-4">GitHub</Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default PortfolioCard;
