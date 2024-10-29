"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MapPinIcon, BuildingIcon, DollarSignIcon } from "lucide-react";

const featuredJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salary: "$120k - $160k",
    type: "Full-time",
    skills: ["React", "TypeScript", "Next.js"],
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=128&h=128&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Product Designer",
    company: "DesignHub",
    location: "Remote",
    salary: "$90k - $120k",
    type: "Full-time",
    skills: ["Figma", "UI/UX", "Prototyping"],
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=128&h=128&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "CloudScale",
    location: "New York, NY",
    salary: "$130k - $170k",
    type: "Full-time",
    skills: ["AWS", "Kubernetes", "CI/CD"],
    logo: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=128&h=128&fit=crop&auto=format",
  },
];

export default function FeaturedJobs() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featuredJobs.map((job, index) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="h-full cursor-pointer transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <img
                src={job.logo}
                alt={job.company}
                className="h-12 w-12 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold">{job.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BuildingIcon className="h-4 w-4" />
                  {job.company}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPinIcon className="h-4 w-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <DollarSignIcon className="h-4 w-4" />
                  {job.salary}
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{job.type}</Badge>
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}