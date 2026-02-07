import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="mb-6 inline-block rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
          👋 Welcome to my portfolio
        </div>
        
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          Hi, I'm <span className="text-primary">Sweta Kumari Jha</span>
        </h1>
        
        <p className="mx-auto mb-4 max-w-xl text-xl text-muted-foreground md:text-2xl">
          Your Next <span className="font-semibold text-foreground">Information Technology Engineer</span>
        </p>
        
        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
          Results-driven IT Engineering student with proven expertise in web development, Python, Java, and data analytics. 
          Strong problem-solver with excellent adaptability and a track record of delivering quality solutions.
        </p>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild className="gap-2">
            <a href="#projects">
              View Projects
              <ArrowDown className="h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button size="lg" variant="secondary" asChild className="gap-2">
            <a href="/resume.pdf" download="Sweta_Kumari_Jha_Resume.pdf">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <a href="https://github.com/jha-sweta" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <a href="https://www.linkedin.com/in/jhasweta/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <a href="mailto:sweta@example.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
