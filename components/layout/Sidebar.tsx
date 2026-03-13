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
    <aside className="w-64 border-r bg-card h-[calc(100vh-4rem)] sticky top-16 hidden lg:block">
      <div className="p-4 space-y-4">
        {/* Home link */}
        <div className="space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold rounded-md text-foreground/80 hover:text-foreground hover:bg-accent transition-all duration-200"
          >
            <Home className="w-4 h-4 text-primary" />
            Home
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-2" />

        {/* Categories */}
        <div>
          <h3 className="px-3 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
            Categories
          </h3>
          <div className="space-y-1">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/categories/${category.toLowerCase()}`}
                className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md text-foreground/70 hover:text-foreground hover:bg-accent transition-all duration-200 group"
              >
                <LayoutGrid className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
