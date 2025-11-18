export interface BreadcrumbItem {
  label: string;
  key?: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onItemClick?: (item: BreadcrumbItem, index: number) => void;
}
