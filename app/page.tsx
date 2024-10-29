import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import FeaturedJobs from "@/components/featured-jobs";
import { SearchIcon, MapPinIcon, BriefcaseIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative py-20 text-center">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <h1 className="text-4xl font-bold md:text-6xl">
          Find Your Dream Job Today
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Discover opportunities that match your skills and aspirations
        </p>

        {/* Search Form */}
        <div className="mx-auto mt-8 flex max-w-4xl flex-col gap-4 rounded-lg border bg-card p-4 shadow-lg md:flex-row md:items-center md:p-6">
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
      </section>

      {/* Job Categories */}
      <section className="mt-20">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Popular Job Categories
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            "Technology",
            "Healthcare",
            "Finance",
            "Education",
            "Marketing",
            "Design",
            "Sales",
            "Engineering",
          ].map((category) => (
            <Card
              key={category}
              className="flex cursor-pointer items-center gap-3 p-4 transition-colors hover:bg-muted"
            >
              <BriefcaseIcon className="h-6 w-6" />
              <span className="font-medium">{category}</span>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="mt-20">
        <h2 className="mb-8 text-center text-3xl font-bold">Featured Jobs</h2>
        <FeaturedJobs />
      </section>
    </div>
  );
}