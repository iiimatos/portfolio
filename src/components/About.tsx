import { Avatar, Button } from "./ui";
import { Lucide, Simple } from "./icons";

export default () => {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      <div className="flex flex-row items-center gap-4">
        <Avatar draggable={false} src="/my-image.jpg" alt="profile-picture">
          <Lucide.IconUser className="size-2/3" />
        </Avatar>

        <div className="flex flex-col items-start gap-2">
          <h1 className="font-medium text-lg lg:text-xl">
            Ivan Matos{" "}
            <span className="opacity-80 ml-2 text-xs lg:text-base">
              +2 Years of experience
            </span>
          </h1>
          <h2 className="font-medium opacity-80 text-2xl lg:text-3xl">
            Software Engineer
          </h2>
        </div>
      </div>

      <div>
        Self-taught developer, passionate about excellence, collaborative, open
        to emerging technologies, committed to learning and continuous
        improvement, adaptable to change.{" "}
      </div>

      <div className="flex self-stretch justify-end gap-x-2">
        <Button
          as="a"
          href="https://github.com/iiimatos"
          target="_blank"
          aria-label="GitHub"
        >
          <Simple.IconGitHub />
          GitHub
        </Button>
        <Button
          as="a"
          href="ivan-matos-cv.pdf"
          target="_blank"
          aria-label="Download my CV"
        >
          <Simple.IconDownload />
          Download my CV
        </Button>
      </div>
    </div>
  );
};
