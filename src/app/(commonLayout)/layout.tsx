import type { Metadata } from "next";

import Sidebar from "../(commonLayout)/_components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Apollo Gears",
  description: "Next Level Riding Sharing Service",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
    <Sidebar />
    <main className="flex-1 p-4 bg-gray-100">{children}</main>
  </div>
  );
}
