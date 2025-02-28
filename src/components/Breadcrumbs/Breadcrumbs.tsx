import React from "react";

import "./breadcrumbs.css";

export interface BreadcrumbsProps {
  /* the accessible name of the breadcrumb navigation */
  label: string;

  /** Breadcrumb contents */
  items: { label: string; href: string }[];
}

/** Primary UI component for user interaction */
export const Breadcrumbs = ({ label, items, ...props }: BreadcrumbsProps) => {
  return (
    <nav aria-label={label} className={``} {...props}>
      <ol className="breadcrumbs__list">
        {items.map((item, index) => {
          return (
            <li>
              <a
                href={item.href}
                aria-current={index + 1 === items.length ? "page" : undefined}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
