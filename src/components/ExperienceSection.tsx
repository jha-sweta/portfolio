import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Java Developer Intern",
    company: "Tech IT Research",
    period: "Mar 2025 - Aug 2025",
    description: [
      "Developed and maintained Java-based applications using Spring Boot framework",
      "Collaborated with cross-functional teams to design scalable backend solutions",
      "Implemented RESTful APIs and integrated third-party services",
      "Participated in code reviews applying best practices for clean code",
    ],
    skills: ["Java", "Spring Boot", "REST APIs", "Backend Development"],
  },
  {
    title: "Data Analysis Intern",
    company: "Cognifyz Technologies",
    period: "Jul 2025 - Aug 2025",
    description: [
      "Conducted comprehensive data analysis using Python (Pandas, NumPy)",
      "Created interactive visualizations and dashboards using Power BI",
      "Cleaned and preprocessed large datasets improving data quality",
    ],
    skills: ["Python", "Pandas", "NumPy", "Power BI"],
  },
  {
    title: "AI & Machine Learning Intern",
    company: "Adverk Technologies",
    period: "Feb 2025 - Apr 2025",
    description: [
      "Implemented ML algorithms including regression, classification, and clustering",
      "Developed predictive models and performed feature engineering",
      "Gained hands-on experience with scikit-learn and TensorFlow",
    ],
    skills: ["Machine Learning", "Scikit-learn", "TensorFlow", "Python"],
  },
  {
    title: "Web Development Intern",
    company: "Ihaan Technologies",
    period: "Jul 2022 - Aug 2022",
    description: [
      "Designed and developed responsive web pages using HTML, CSS, and JavaScript",
      "Collaborated with design team to implement user-friendly interfaces",
      "Assisted in debugging and optimizing web applications",
    ],
    skills: ["HTML", "CSS", "JavaScript", "UI/UX"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            My professional journey through various internships and roles in tech.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2 md:block" />

                <div className="w-full md:w-1/2 md:px-8">
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <Briefcase className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <CardTitle className="text-lg">{exp.title}</CardTitle>
                      <CardDescription className="font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="mb-4 space-y-2 text-sm text-muted-foreground">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-primary">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
