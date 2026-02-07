import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    institution: "A.C Patil College of Engineering",
    location: "Navi Mumbai",
    year: "2023 – 2026",
    grade: "SGPA: 8.68",
    current: true,
  },
  {
    degree: "Diploma",
    field: "Computer Engineering",
    institution: "Abdul Razzak Kalsekar Polytechnic",
    location: "Navi Mumbai",
    year: "2020 – 2023",
    grade: "80.17%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    field: "Maharashtra State Board",
    institution: "New English School",
    location: "Navi Mumbai",
    year: "2020",
    grade: "79.40%",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            <span className="text-primary">Education</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            My academic journey and qualifications.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

          {education.map((edu, index) => (
            <div
              key={edu.degree + edu.institution}
              className={`relative mb-8 flex w-full ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-4 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2"
              />

              {/* Card */}
              <Card
                className={`ml-10 w-full border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <CardContent className="p-6">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {edu.grade}
                    </span>
                    {"current" in edu && edu.current && (
                      <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="mb-1 text-lg font-semibold">{edu.degree}</h3>
                  <p className="mb-2 text-sm text-primary">{edu.field}</p>
                  <p className="mb-2 text-sm font-medium text-foreground">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {edu.year}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
