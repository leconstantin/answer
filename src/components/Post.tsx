import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { formatDistanceToNow } from "date-fns";
import {
  Atom,
  Bookmark,
  Calendar,
  HeartIcon,
  MessageCircleIcon,
} from "lucide-react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Button } from "./ui/button";
import { DeleteAlertDialog } from "./DeleteAlertDialog";

export default function Post() {
  return (
    <Card className="overflow-hidden ring-secondary hover:ring-2 ease-in-out  cursor-pointer">
      <CardHeader className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className="flex w-full items-center gap-2 overflow-hidden rounded-md  text-left text-sm outline-none">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage
                src="/avatars/shadcn.jpg"
                alt="shadcn"
                className="rounded-full"
              />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">shadcn</span>
              <span className="truncate text-xs">shadcn@gmail.com</span>
            </div>
          </div>
          <div className="flex justify-end items-start gap-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-1">
              <Calendar className="text-sm size-4" />
              <span className="text-nowrap">
                {formatDistanceToNow(new Date(2024, 7, 9))} ago
              </span>
            </div>
            <div className="flex items-start gap-1">
              <Atom className="text-sm size-4" />
              <span className="text-nowrap">Science</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-4">
          <p className="text-base text-card-foreground line-clamp-2">
            Our platform is your go-to place for asking questions and getting
            reliable answers from a vibrant community of experts and
            enthusiasts. Whether you&apos;re stuck on a coding problem, curious
            about a new topic, or seeking advice, just post your question and
            let the community help you out!
          </p>
          <div className="rounded-lg  overflow-hidden opacity-75 hover:opacity-100 ease-linear duration-300">
            <Image
              src="/posts/bbb.jpg"
              alt="Post content"
              className="h-auto w-full rounded object-cover" //md:w-[590px]
              width={594.667}
              height={333.271}
              priority
            />
          </div>
          {/* Bottom section: Post actions */}
          {/* Like and Comment buttons */}
          <div className="flex items-center pt-2 space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className={`text-muted-foreground gap-2 text-red-500 hover:text-red-600 
                }`}
            >
              <HeartIcon className="size-5" />

              <span>590</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground gap-2 hover:text-blue-500"
            >
              <MessageCircleIcon
                className={`size-5  text-blue-500
                }`}
              />
              <span>110</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground gap-2 hover:green-500"
            >
              <Bookmark
                className={`size-5  text-green-500
                }`}
              />
            </Button>
            {/* TODO: made isDeleting and onDelete option */}
            <DeleteAlertDialog />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function PostTwo() {
  const calculatorCode = `
  function calculator(a, b, operation) {
      if (operation === "add") {
          return a + b;
      } else if (operation === "subtract") {
          return a - b;
      } else if (operation === "multiply") {
          return a * b;
      } else if (operation === "divide") {
          return a / b;
      }
      return "Invalid operation";
  }
  
  console.log(calculator(5, 10, "add")); // Correct output: 15
  console.log(calculator(5, 10, "addition")); // Correct output: "Invalid operation"
    `;
  return (
    <Card className="overflow-hidden ring-secondary hover:ring-2 ease-in-out  cursor-pointer">
      <CardHeader className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className="flex w-full items-center gap-2 overflow-hidden rounded-md  text-left text-sm outline-none">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage
                src="/avatars/shadcn.jpg"
                alt="shadcn"
                className="rounded-full"
              />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">shadcn</span>
              <span className="truncate text-xs">shadcn@gmail.com</span>
            </div>
          </div>
          <div className="flex justify-end items-start gap-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-1">
              <Calendar className="text-sm size-4" />
              <span className="text-nowrap">
                {formatDistanceToNow(new Date(2024, 7, 9))} ago
              </span>
            </div>
            <div className="flex items-start gap-1">
              <Atom className="text-sm size-4" />
              <span className="text-nowrap">Science</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-4">
          <h2 className="text-base text-card-foreground line-clamp-2">
            Is this JavaScript code for a simple calculator correct?
          </h2>
          <div className="w-full max-w-4xl rounded-lg shadow-md p-2">
            <pre>
              <code>{calculatorCode}</code>
            </pre>
          </div>

          {/* Bottom section: Post actions */}
          {/* Like and Comment buttons */}
          <div className="flex items-center pt-2 space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className={`text-muted-foreground gap-2 text-red-500 hover:text-red-600 
                }`}
            >
              <HeartIcon className="size-5" />

              <span>590</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground gap-2 hover:text-blue-500"
            >
              <MessageCircleIcon
                className={`size-5  text-blue-500
                }`}
              />
              <span>110</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground gap-2 hover:green-500"
            >
              <Bookmark
                className={`size-5  text-green-500
                }`}
              />
            </Button>
            {/* TODO: made isDeleting and onDelete option */}
            <DeleteAlertDialog />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
