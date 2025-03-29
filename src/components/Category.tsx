import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Code,
  BookOpen,
  Briefcase,
  DollarSign,
  Building,
  HeartPulse,
  Activity,
  Home,
  Gamepad2,
  Paintbrush,
  Users,
  Globe,
  Plane,
  Lightbulb,
} from "lucide-react";
import { Button } from "./ui/button";
const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);
const categories = [
  {
    group: "Technology & Science",
    items: [
      { name: "Technology & Programming", icon: <Code /> },
      { name: "Science & Education", icon: <BookOpen /> },
    ],
  },
  {
    group: "Career & Finance",
    items: [
      { name: "Career & Jobs", icon: <Briefcase /> },
      { name: "Finance & Investments", icon: <DollarSign /> },
      { name: "Business & Entrepreneurship", icon: <Building /> },
    ],
  },
  {
    group: "Lifestyle & Well-being",
    items: [
      { name: "Health & Wellness", icon: <HeartPulse /> },
      { name: "Lifestyle & Hobbies", icon: <Activity /> },
      { name: "Home & Garden", icon: <Home /> },
    ],
  },
  {
    group: "Entertainment & Creativity",
    items: [
      { name: "Gaming & Entertainment", icon: <Gamepad2 /> },
      { name: "Art & Creativity", icon: <Paintbrush /> },
    ],
  },
  {
    group: "Social & Community",
    items: [
      { name: "Relationships & Life Advice", icon: <Users /> },
      { name: "Community & Social Issues", icon: <Globe /> },
    ],
  },
  {
    group: "Travel & Learning",
    items: [
      { name: "Travel & Adventure", icon: <Plane /> },
      { name: "Learning & Personal Development", icon: <Lightbulb /> },
    ],
  },
];
export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-96 w-full rounded-md border">
      {categories.map((category) => (
        <div className="p-4" key={category.group}>
          <h4 className="mb-4 text-base font-semibold leading-none">
            {category.group}
          </h4>
          {category.items.map((tag) => (
            <div key={tag.name}>
              <Button variant="link" key={tag.name} className="text-sm">
                {tag.name}
              </Button>
              <Separator className="my-2" />
            </div>
          ))}
        </div>
      ))}
      {/* <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div> */}
    </ScrollArea>
  );
}
