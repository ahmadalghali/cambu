export interface ShoeType {
  id: number;
  name: string;
  price: string;
  image: string;
  category: CategoryEnum;
  details: ShoeSizeStockType[];
}

export enum CategoryEnum {
  ALL = "All",
  TRAINERS = "Trainers",
  RUNNING = "Running",
  WALKING = "Walking",
  FORMAL = "Formal",
  BASKETBALL = "Basketball",
  FOOTBALL = "Football",
  HIKING = "Hiking",
  CASUAL = "Casual",
  SLIPPERS = "Slippers",
  SANDALS = "Sandals",
}

export interface ShoeSizeStockType {
  size: SizeType;
  stock: number;
}

export interface BagItemType {
  shoe: ShoeType;
  size: SizeType;
  quantity: number;
}

export enum SizeNameEnum {
  UK_5 = "UK 5",
  UK_5_5 = "UK 5.5",
  UK_6 = "UK 6",
  UK_6_5 = "UK 6.5",
  UK_7 = "UK 7",
  UK_7_5 = "UK 7.5",
  UK_8 = "UK 8",
  UK_8_5 = "UK 8.5",
  UK_9 = "UK 9",
  UK_9_5 = "UK 9.5",
  UK_10 = "UK 10",
  UK_10_5 = "UK 10.5",
  UK_11 = "UK 11",
}
export interface SizeType {
  id: number;
  name: SizeNameEnum;
}

export interface DefaultShoeSizeType {
  id: number;
  name: string;
}

// export type { ShoeType, DefaultShoeSizeType };
