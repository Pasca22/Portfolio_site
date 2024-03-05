import MyNavBar from "@/components/my_ui/my_navbar";
import { Fade } from "react-awesome-reveal";

export default function Home(): JSX.Element {
  return (
    <>
      <Fade cascade triggerOnce damping={0} direction="down">
        <MyNavBar />
      </Fade>
      <div>
        <Fade cascade triggerOnce fraction={0.4} damping={0} direction="up">
          <h1 className="font-mono font-semibold mt-20 mb-5 text-6xl">
            Was a Basketball Player
          </h1>

          <h1 className="font-mono font-semibold text-6xl">
            Now a Software Developer
          </h1>

          <p className="mt-20 text-xl">
            Hi there! My name is Alex and I'm not your typical programmer.
            Firstly, let me tell you a little bit about myself and my journey. I
            was just a kid from Cluj-Napoca, Romania who started playing
            basketball at the age of 7 because his parents realized he is
            getting a little too chubby.
          </p>

          <div className="flex justify-around">
            <img
              src="src/assets/home_pics/seniori-individual.jpeg"
              alt="Alex"
              className="mt-20 w-5/12 rounded-lg ease-in duration-300"
            />
            <img
              src="src/assets/home_pics/u13-individual.JPG"
              alt="Alex"
              className="mt-20 w-1/3 rounded-lg"
            />
          </div>

          <p className="mt-20 text-xl">
            In parallel with basketball, I was doing my best in school because
            my dad told me that one bad grade could mean a week without my new
            favorite sport. After a few years of playing basketball, I had a
            massive growth spurt which changed my life. I got really good at the
            game, became one of the best in the country and started being
            obsessed with it.
          </p>

          <div className="flex justify-around">
            <img
              src="src/assets/home_pics/u13-grup.JPG"
              alt="Alex"
              className="mt-20 w-2/3 rounded-lg"
            />
          </div>

          <p className="mt-20 text-xl">
            Every day in the summer I was out, playing pickups or practicing to
            become the best player I could be and that hard work payed of. Some
            of my teammates started telling me that they look up to me or that
            they consider me an example, even some of them told me that I have a
            leader attitude. When I heard this from them, I started to take
            everything I do more seriously, including school which was still a
            big priority for me, and I adopted a winning mentality in everything
            that I did. We, as a group, were at least a top 2 team in Romania,
            if not the best and our goal was the same every year: to win the
            championship, which we actually ended up accomplishing 4 times, but
            that could've been 5 if covid never came.
          </p>

          <div className="flex justify-around">
            <img
              src="src/assets/home_pics/u16.jpeg"
              alt="Alex"
              className="mt-20 w-2/3 rounded-lg"
            />
          </div>

          <p className="mt-20 text-xl">
            After my 3rd championship, I was offered a contract for the senior
            team at my club which of course, I signed. That season as a
            professional was an incredible one. We had the best run in the
            history of the club in an european competition and we won the
            domestic championship too. It was a dream come true. Meanwhile, in
            highschool, I had a programming class which I enjoyed very much and
            made me realize this is my second passion. We didn't do much stuff,
            only some basic concepts of programming in C++, C# and databases,
            but that was enough for me to start digging for more information
            about the IT world. I started to learn about front-end and back-end
            technologies and developed mini-projects to deepen the knowledge
            that I researched.{" "}
          </p>

          <div className="flex justify-around">
            <img
              src="src/assets/home_pics/seniori-grup.jpeg"
              alt="Alex"
              className="mt-20 w-2/3 rounded-lg"
            />
          </div>
          <p className="my-20 text-xl">
            When the season and school ended, I went and took a MRI scan for my
            lower back because in the middle of the season I experienced some
            horrible pain. The results said that the problem that I have is not
            severe, but it's not a good sign either, so I decided to not risk
            any injuries and gave up on my basketball dream. After that, I
            decided to invest all my time into coding. Now, I am studing
            Computer Science at Babes-Bolyai University and every day I try my
            best to become the best in what I do. When I look back, I realize
            basketball taught me so many things and I'm very grateful for every
            single one of them. It made me realize that time management is very
            important, that good teamwork and communication can lead to success
            and the fact that hard work will always beat talent, if talent
            doesn't work hard. So, that's my story, I hope you enjoyed it and we
            can team up for some amazing projects together.
          </p>
        </Fade>
      </div>
    </>
  );
}
