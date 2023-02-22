export interface GenericObject {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hasOwnProperty: any;
}
export interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}
