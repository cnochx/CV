
export interface FrlHeader {
  title: string;
  content: JSX.Element;
  showSpacer: boolean;
}

export interface Freelance {
  title: string;
  stack: Item[];
  content: JSX.Element;
  highlight: string;
}

export interface Item {
  iKey: number;
  text: string;
}