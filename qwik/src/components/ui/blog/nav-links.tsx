import { component$ } from "@builder.io/qwik";
import { HiUserGroupOutline, HiHomeOutline, HiDocumentDuplicateOutline } from "@qwikest/icons/heroicons";

const links = [
  { name: "Home", href: "/blog", icon: HiHomeOutline },
  { name: "Invoices", href: "/dashboard/invoices", icon: HiDocumentDuplicateOutline },
  { name: "Customers", href: "/dashboard/customers", icon: HiUserGroupOutline },
];

export const NavLinks = component$(() => {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a key={link.name} href={link.href} class="nav-link">
            <LinkIcon class="w-6" />
            <p class="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
});
