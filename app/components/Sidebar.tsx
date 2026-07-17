"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  IconHome,
  IconFingerprint,
  IconTerminal,
  IconInventory,
  IconConnect,
  IconSettings,
  IconLogout,
  IconUser,
} from "./icons";

const NAV_ITEMS = [
  { href: "/", label: "INIT.sys", icon: <IconHome /> },
  { href: "/identity", label: "IDENTITY.md", icon: <IconFingerprint /> },
  { href: "/commits", label: "COMMITS.git", icon: <IconTerminal /> },
  { href: "/modules", label: "MODULES.bin", icon: <IconInventory /> },
  { href: "/connect", label: "CONNECT.sh", icon: <IconConnect /> },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const handleReboot = () => {
    window.location.reload();
  };

  return (
    <>
      {isOpen && (
        <div className="sidebar-backdrop show-mobile" onClick={onClose} />
      )}
      <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        {/* Profile */}
        <div className="sidebar-profile">
          <div className="sidebar-avatar">
            <IconUser />
          </div>
          <div className="sidebar-username">ROOT_USER</div>
          <div className="sidebar-version">v2.4.0-stable</div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`sidebar-link ${isActive ? "active" : ""}`}
                onClick={onClose}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <button className="sidebar-reboot-btn" onClick={handleReboot}>
            EXECUTE_REBOOT
          </button>
          <div
            style={{
              borderTop: "1px solid var(--outline-variant)",
              paddingTop: 8,
              marginTop: 8,
            }}
          >
            <a href="#" className="sidebar-bottom-link">
              <IconSettings />
              SETTINGS
            </a>
            <a href="#" className="sidebar-bottom-link">
              <IconLogout />
              LOGOUT
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
