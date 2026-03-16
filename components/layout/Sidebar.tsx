import Link from "next/link";
import { Home, LayoutGrid } from "lucide-react";

const categories = [
  "UPSC",
  "SSC",
  "Banking",
  "Railways",
  "Engineering",
  "Medical",
  "Teaching",
  "Defence",
];

export function Sidebar() {
  return (
    <div className="w-fit min-w-[200px] min-h-[calc(100vh-4rem)] border-r border-border py-4 px-6 space-y-4">
      {/* Home link */}
      <div className="space-y-1">
        <Link
          href="/"
          className="group flex w-full items-center justify-start gap-3 px-4 py-2.5 text-sm font-semibold rounded-md text-foreground/90 hover:bg-primary hover:text-primary-foreground hover:rounded-full hover:scale-[1.07] hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300"
        >
          <Home className="w-4 h-4 text-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all" />
          <span className="group-hover:scale-110 transition-all">Home</span>
        </Link>
      </div>

      {/* Divider */}
      <div className="h-px bg-border my-2" />

      {/* Categories */}
      <div className="w-full">
        <h3 className="px-5 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
          Categories
        </h3>
        <div className="space-y-1 flex flex-col items-start">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/categories/${category.toLowerCase()}`}
              className="group flex w-full items-center justify-start gap-3 px-4 py-2.5 text-sm font-medium rounded-md text-foreground/80 hover:bg-primary hover:text-primary-foreground hover:rounded-full hover:scale-[1.07] hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300"
            >
              <LayoutGrid className="w-4 h-4 text-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all" />
              <span className="group-hover:scale-110 transition-all">{category}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
