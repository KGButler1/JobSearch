"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LayoutGridIcon,
  LayoutListIcon,
  SearchIcon,
  MapPinIcon,
  BuildingIcon,
  DollarSignIcon,
  FilterIcon,
} from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salary: "$120k - $160k",
    type: "Full-time",
    posted: "2 days ago",
    deadline: "2024-04-30",
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
    posted: "1 day ago",
    deadline: "2024-04-25",
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
    posted: "3 days ago",
    deadline: "2024-05-15",
    skills: ["AWS", "Kubernetes", "CI/CD"],
    logo: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=128&h=128&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "StartupX",
    location: "Remote",
    salary: "$100k - $140k",
    type: "Full-time",
    posted: "Just now",
    deadline: "2024-05-01",
    skills: ["Node.js", "React", "PostgreSQL"],
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=128&h=128&fit=crop&auto=format",
  },
];

export default function JobsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Section */}
      <div className="mb-8 flex flex-col gap-4 rounded-lg border bg-card p-4 shadow-lg md:flex-row md:items-center md:p-6">
        <div className="flex flex-1 items-center gap-2 rounded-md border bg-background px-3 py-2">
          <SearchIcon className="h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Job title or keyword"
            className="border-0 bg-transparent focus-visible:ring-0"
          />
        </div>
        <div className="flex flex-1 items-center gap-2 rounded-md border bg-background px-3 py-2">
          <MapPinIcon className="h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Location"
            className="border-0 bg-transparent focus-visible:ring-0"
          />
        </div>
        <Button size="lg" className="w-full md:w-auto">
          Search Jobs
        </Button>
      </div>

      {/* Filters and View Toggle */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Select defaultValue="relevance">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Most Relevant</SelectItem>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="salary-high">Highest Salary</SelectItem>
              <SelectItem value="salary-low">Lowest Salary</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <FilterIcon className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Toggle
            pressed={viewMode === "grid"}
            onPressedChange={() => setViewMode("grid")}
            aria-label="Grid view"
          >
            <LayoutGridIcon className="h-4 w-4" />
          </Toggle>
          <Toggle
            pressed={viewMode === "list"}
            onPressedChange={() => setViewMode("list")}
            aria-label="List view"
          >
            <LayoutListIcon className="h-4 w-4" />
          </Toggle>
        </div>
      </div>

      {/* Job Listings */}
      <div
        className={
          viewMode === "grid"
            ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            : "flex flex-col gap-4"
        }
      >
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card
              className={`h-full cursor-pointer transition-all hover:shadow-lg ${
                viewMode === "list" ? "flex flex-col md:flex-row" : ""
              }`}
            >
              <CardHeader
                className={`flex ${
                  viewMode === "list"
                    ? "flex-row items-center md:w-1/3"
                    : "flex-row items-center"
                } gap-4`}
              >
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
              <CardContent
                className={viewMode === "list" ? "md:w-2/3" : undefined}
              >
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
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Posted {job.posted}</span>
                    <span>Apply by {job.deadline}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}