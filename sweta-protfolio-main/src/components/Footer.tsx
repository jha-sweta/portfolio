import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 text-destructive" /> by Sweta Kumari Jha
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/jha-sweta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jhasweta/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:swetajha.work@gmail.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
