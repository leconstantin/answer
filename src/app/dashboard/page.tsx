import CategoryList from "@/components/Categories";
import { ScrollAreaDemo } from "@/components/Category";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { Search } from "@/components/dashboard/search";
import { ModeToggle } from "@/components/ModeToggle";
import Post, { PostTwo } from "@/components/Post";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center justify-between w-full gap-2 px-4">
            <div className="flex items-center justify-center">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <div className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground hidden md:block">
                Got Questions? We&apos;ve Got Answers! 💡
              </div>
            </div>
            <Search />
            <ModeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 mt-6">
          <div className="grid relative auto-rows-min gap-4 md:grid-cols-3">
            <div className="col-span-3 lg:col-span-2 rounded-xl">
              <div className="space-y-6">
                <Post />
                <PostTwo />
              </div>
            </div>
            <div className="hidden sticky top-6 lg:flex rounded-xl h-fit">
              {/* <CategoryList /> */}
              <ScrollAreaDemo />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
