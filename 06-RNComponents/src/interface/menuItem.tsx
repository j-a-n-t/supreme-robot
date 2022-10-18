export interface MenuItem {
  id: number,
  title: string,
  icon?: string,
  component: string,
}

export interface ListMenu {
  menuItem:MenuItem
}
