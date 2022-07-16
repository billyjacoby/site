declare module 'new-react-flexible-sliding-menu' {
  export class MenuProvider extends React.Component<> {
    MenuComponent: React.ComponentType<any>;
    direction: 'left' | 'right';
    width: number;
  }

  // export type MenuContext = {
  //   toggleMenu(): void;
  // };
}
