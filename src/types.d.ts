import { ComponentProps, ReactNode } from "react";

export type Value = string | number;
export type Dictionary<T = Value> = Record<string, T>;
export interface Dictionaries extends Array<Dictionary> {}

// group:list

export interface ListProps extends ComponentProps<"ul"> {
  children: string | ReactNode;
  label: string;
  zebra?: boolean;
}
export interface ListItemProps extends ComponentProps<"li"> {
  children: string | ReactNode;
  description?: string;
  start?: ReactNode;
  end?: ReactNode;
}

// group:panel

const HTMLPanelTags = ["article", "aside", "li", "div", "form"] as const;
type HTMLPanelTagsType = typeof HTMLPanelTags[number];

export interface PanelProps {
  children: ReactNode;
  id: string;
  as: HTMLPanelTagsType;
  className?: string;
}

// group:card

const HTMLCardTags = ["section", "article", "li", "div", "form"] as const;
type HTMLCardTagsType = typeof HTMLCardTags[number];

const CardRatio = ["square", "portrait", "landscape"] as const;
export type CardRatios = typeof CardRatio[number];

export interface CardProps {
  ratio: CardRatios;
  children: ReactNode;
  DONOTUse?: {
    DONOTStyle: Dictionary;
  };
  className?: string;
  as: HTMLCardTagsType;
}
