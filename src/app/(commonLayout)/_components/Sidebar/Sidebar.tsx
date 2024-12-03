import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <h1 className="text-2xl font-bold p-4">User Management</h1>
      <nav className="flex flex-col">
        <Link href="/create-user">
          <p className="p-4 hover:bg-gray-700 text-2xl">Create User</p>
        </Link>
        <Link href="/add-balance">
          <p className="p-4 hover:bg-gray-700 text-2xl">Add Balance</p>
        </Link>
        <Link href="/transfer-balance">
          <p className="p-4 hover:bg-gray-700 text-2xl">Transfer Balance</p>
        </Link>
        <Link href="/user-list">
          <p className="p-4 hover:bg-gray-700 text-2xl">All User</p>
        </Link>
      </nav>
    </div>
  );
}
