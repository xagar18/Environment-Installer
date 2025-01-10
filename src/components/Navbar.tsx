import { Github } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";

export const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <span className="font-semibold">DevSetup Magic</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};
