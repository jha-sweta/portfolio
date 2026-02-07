import { Code2, Database, Wrench, Brain, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "PHP", "JavaScript"],
  },
  {
    title: "Web Technologies",
    icon: Code2,
    skills: ["HTML", "CSS", "React", "RESTful APIs", "Streamlit"],
  },
  {
    title: "Data & AI",
    icon: Brain,
    skills: ["MySQL", "Power BI", "Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Google Gemini API", "Canva"],
  },
  {
    title: "Other",
    icon: Database,
    skills: ["DBMS", "Computer Networks", "AI/ML"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Communication", "Teamwork", "Critical Thinking", "Time Management"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Technologies and tools I work with to build innovative solutions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <category.icon className="h-5 w-5 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
