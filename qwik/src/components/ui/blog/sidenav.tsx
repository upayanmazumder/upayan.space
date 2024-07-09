import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Upayan from "~/media/upayan.svg";
import { NavLinks } from "./nav-links";
import "./nav.css";

export const SideNav = component$(() => {
  return (
    <div class="side-nav">
      <Link>
        <div>
          <Upayan />
        </div>
      </Link>
      <div class="nav-links-container">
        <NavLinks />
        <div class="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
});
