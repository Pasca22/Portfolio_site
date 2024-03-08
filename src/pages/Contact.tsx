import MyNavBar from "@/components/my_ui/my_navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Fade } from "react-awesome-reveal";

export default function Contact(): JSX.Element {
  return (
    <>
      <Fade cascade triggerOnce damping={0} direction="down">
        <MyNavBar />
      </Fade>
      <div className="grid grid-cols-2 gap-44 place-content-center h-screen">
        <Fade triggerOnce damping={0} direction="left">
          <a
            href="https://www.linkedin.com/in/alex-pasca-3422b522b/"
            target="_blank"
          >
            <Card>
              <CardHeader>
                <CardTitle>LinkedIn</CardTitle>
                <CardDescription>Alex Pasca</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <img
                  src="https://www.transparentpng.com/thumb/linkedin/linkedin-icon-png-4.png"
                  alt="LinkedIn"
                  className="h-24"
                />
              </CardContent>
            </Card>
          </a>
        </Fade>

        <Fade triggerOnce damping={0} direction="right">
          <a href="https://github.com/Pasca22" target="_blank">
            <Card>
              <CardHeader>
                <CardTitle>GitHub</CardTitle>
                <CardDescription>Pasca22</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <img
                  src="/assets/contact_page/github.png"
                  alt="GitHub"
                  className="h-24"
                />
              </CardContent>
            </Card>
          </a>
        </Fade>

        <Fade triggerOnce damping={0} direction="left">
          <a href="https://mail.google.com/" target="_blank">
            <Card>
              <CardHeader>
                <CardTitle>Mail</CardTitle>
                <CardDescription>alexpasca1122@gmail.com</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <img
                  src="https://www.transparentpng.com/thumb/email-logo/new-email-logo-transparent-background-WBnBfu.png"
                  alt="Email"
                  className="h-24"
                />
              </CardContent>
            </Card>
          </a>
        </Fade>

        <Fade triggerOnce damping={0} direction="right">
          <a href="https://web.whatsapp.com/" target="_blank">
            <Card>
              <CardHeader>
                <CardTitle>Phone</CardTitle>
                <CardDescription>+40 746 499 110</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <img
                  src="https://www.transparentpng.com/thumb/telephone/metroui-other-phone-alt-icon-pictures-10.png"
                  alt="Phone"
                  className="h-24"
                />
              </CardContent>
            </Card>
          </a>
        </Fade>
      </div>
    </>
  );
}
