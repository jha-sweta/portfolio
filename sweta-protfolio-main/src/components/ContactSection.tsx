import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:swetajha.work@gmail.com" className="font-medium hover:text-primary">
                      swetajha.work@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Navi Mumbai, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/jhasweta/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary">
                      Connect with me
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center gap-4">
                <Button asChild size="lg" className="gap-2">
                  <a href="mailto:swetajha.work@gmail.com">
                    <Mail className="h-4 w-4" />
                    Send Email
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <a href="https://github.com/jha-sweta" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
