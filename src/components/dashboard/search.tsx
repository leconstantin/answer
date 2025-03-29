import { Input } from "../ui/input";

export function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[200px] lg:w-[400px]"
      />
    </div>
  )
}