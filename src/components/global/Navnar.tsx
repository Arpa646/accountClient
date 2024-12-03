"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useUser } from "@/services";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation"; // Use this for navigation
import { logout } from "@/GlobalRedux/Features/auth/authSlice"; // Import your logout action

export default function NavBar() {
  const dispatch = useDispatch();
  const router = useRouter(); // Next.js router for navigation

  const routeMap: Record<string, string> = {
    user: "/dashboard",
    admin: "/admin-dashboard",
  };

  // Get userId, role, and token from the useUser hook
  const { role, token } = useUser();
  console.log(role, "role");
  console.log("token:", token); // Log the token for debugging

  // Logout handler
  const handleLogout = () => {
    dispatch(logout()); // Call the logout action from the auth slice
    router.push("/"); // Redirect to login page
  };

  return (
    <Navbar maxWidth="2xl">
      {/* Always display the title */}
      <NavbarBrand>

        

       
      <Image src="https://validthemes.net/site-template/foodu/assets/img/logo-light.png" 
              alt="Recipe"
              width={220}
              height={220}
              className="  mb-4transform hover:scale-105 transition-transform duration-300"
            />

      </NavbarBrand>

      {/* Only show the content if token is available */}
      {token && (
        <>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem isActive>
              <Link color="foreground" href="/" aria-current="page">
                Recipie
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/dashboard/getpremiumuser">getPremium</Link>
            </NavbarItem>
            <NavbarItem>
              {/* Conditional rendering of dashboard link based on user role */}
              <Link href={role === "admin" ? routeMap.admin : routeMap.user}>
                Dashboard
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent justify="end">
            <NavbarItem>
              <button
                className="h-12 px-10 bg-[#6CA12B] text-white rounded-lg"
                color="primary"
                onClick={handleLogout} // Call the logout handler on click
              >
                Logout
              </button>
            </NavbarItem>
          </NavbarContent>
        </>
      )}
      <NavbarItem>
        <ThemeSwitcher />
      </NavbarItem>
    </Navbar>
  );
}
