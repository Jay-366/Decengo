// src/app/product/service/layout.tsx
import "../../globals.css";

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100 ">{children}</main>
    </div>
  );
}

  