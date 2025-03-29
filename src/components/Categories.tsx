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
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

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

function CategoryList() {
  return (
    <Card>
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-4">
          {categories.map((group) => (
            <div key={group.group}>
              <h2 className="text- font-semibold mb-2">{group.group}</h2>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <Button
                    size="sm"
                    variant="outline"
                    key={item.name}
                    className="flex items-center gap-1"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Button>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default CategoryList;
