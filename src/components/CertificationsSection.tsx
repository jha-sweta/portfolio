import { Award, ExternalLink, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Certificates
import nasscomDataAnalytics from "@/assets/certificates/nasscom-data-analytics.jpg";
import nptelPython from "@/assets/certificates/nptel-python.jpg";
import simplilearnPowerbi from "@/assets/certificates/simplilearn-powerbi.jpg";
import adverkAi from "@/assets/certificates/adverk-ai.jpg";
import machineLearning from "@/assets/certificates/machine-learning.jpg";
import dataAnalyticsIbm from "@/assets/certificates/data-analytics-ibm.jpg";
import deloitteCyber from "@/assets/certificates/deloitte-cyber.png";
import pythonBootcamp from "@/assets/certificates/python-bootcamp.jpg";
import basicPython from "@/assets/certificates/basic-python.jpeg";

// Achievements
import miniProject from "@/assets/certificates/mini-project.jpg";
import creativeHeadCsi from "@/assets/certificates/creative-head-csi.png";
import mumbaihacks from "@/assets/certificates/mumbaihacks.jpg";

type Certification = {
  title: string;
  issuer: string;
  image: string;
  date: string;
  rotate?: "right" | "left";
};

const certifications: Certification[] = [
  {
    title: "Data Science and Analytics",
    issuer: "NASSCOM (IT-ITeS Sector Skills Council)",
    image: nasscomDataAnalytics,
    date: "Jan 2026",
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL Online Certification",
    image: nptelPython,
    date: "Jan–Feb 2025",
  },
  {
    title: "Power BI for Beginners",
    issuer: "Simplilearn (Powered by Microsoft)",
    image: simplilearnPowerbi,
    date: "June 2025",
  },
  {
    title: "Artificial Intelligence Course",
    issuer: "Adverk Education",
    image: adverkAi,
    date: "July 2025",
    rotate: "right",
  },
  {
    title: "Machine Learning Course",
    issuer: "Adverk Education",
    image: machineLearning,
    date: "June 2025",
    rotate: "right",
  },
  {
    title: "Data Analytics",
    issuer: "IBM SkillsBuild",
    image: dataAnalyticsIbm,
    date: "Dec 2024 – Jan 2025",
  },
  {
    title: "Python Training",
    issuer: "Besant Technologies",
    image: deloitteCyber,
    date: "Nov 2025",
  },
  {
    title: "5 Days Python Bootcamp",
    issuer: "Yash Chaudhary (AI Engineer)",
    image: pythonBootcamp,
    date: "2024",
  },
  {
    title: "Basic Python Certificate",
    issuer: "Online Certification",
    image: basicPython,
    date: "2024",
  },
];

const achievements = [
  {
    title: "3rd Place – Mini Project Competition",
    issuer: "A. C. Patil College of Engineering",
    image: miniProject,
    description: "AgriBot AI – Smart Farmer Support System",
    date: "Oct 2025",
  },
  {
    title: "Creative Head – CSI IT Committee",
    issuer: "A. C. Patil College of Engineering",
    image: creativeHeadCsi,
    description: "Academic Year 2024–2025",
    date: "2024–2025",
  },
  {
    title: "MumbaiHacks 2025 – Hackathon Participant",
    issuer: "Tech Entrepreneurs Association of Mumbai",
    image: mumbaihacks,
    description: "National-level hackathon participation",
    date: "Nov 2025",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Certifications & <span className="text-primary">Achievements</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Professional certifications and achievements that showcase my skills.
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="mb-6 flex items-center justify-center gap-2 text-xl font-semibold">
            <Award className="h-5 w-5 text-primary" />
            Achievements
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {achievements.map((item) => (
              <Dialog key={item.title}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer border-primary/20 bg-gradient-to-br from-primary/10 to-transparent transition-all hover:scale-105 hover:shadow-xl">
                    <CardContent className="p-6">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="mb-4 h-48 w-full rounded-lg object-cover"
                      />
                      <div className="flex gap-2">
                        <Star className="h-4 w-4 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.issuer}</p>
                          <p className="mt-1 text-sm text-primary">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-2xl">
                  <img src={item.image} alt={item.title} className="w-full rounded-lg" />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <h3 className="mb-6 text-center text-xl font-semibold">Certifications</h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <Dialog key={cert.title}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className={`h-full w-full transition-transform duration-300 group-hover:scale-110 ${
                          cert.rotate === "right"
                            ? "rotate-90 object-contain"
                            : cert.rotate === "left"
                            ? "-rotate-90 object-contain"
                            : "object-cover"
                        }`}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100">
                        <ExternalLink className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <div className="p-4">
                      <h4 className="font-semibold">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <p className="mt-1 text-xs text-primary">{cert.date}</p>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-2xl flex justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-[80vh] rounded-lg"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};
