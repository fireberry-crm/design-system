/** A single entry in a Breadcrumb trail. */
export interface BreadcrumbItem {
  /** Visible label. */
  label: string;
  /** Identifier for the item. Defaults to `label`. */
  key?: string;
  /** Optional URL. The last item is rendered as the current page (non-interactive). */
  href?: string;
}

/** Props for the Breadcrumb component. */
export interface BreadcrumbProps {
  /** Items in the trail, in order from root to current page. */
  items: BreadcrumbItem[];
  /** Called when an item is clicked. */
  onItemClick?: (item: BreadcrumbItem, index: number) => void;
}
