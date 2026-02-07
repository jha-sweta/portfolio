import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjectCard = ({ title, description, techStack, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl dark:hover:shadow-primary/5">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <CardHeader className="relative">
        <CardTitle className="text-xl font-bold tracking-tight">{title}</CardTitle>
        <CardDescription className="mt-2 line-clamp-3 text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-secondary/80 text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="relative flex gap-3">
        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="gap-2 transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button
            size="sm"
            asChild
            className="gap-2"
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
