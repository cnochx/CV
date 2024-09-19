
export interface FrlHeader {
  title: string;
  content: JSX.Element;
  showSpacer: boolean;
}

export interface Freelance {
  stack: Item[];
  content: JSX.Element;
  highlight: string;
}

export interface Item {
  iKey: number;
  text: string;
}