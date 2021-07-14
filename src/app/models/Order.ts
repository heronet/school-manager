export interface Order {
  id: string;
  productId?: string;
  delivered: boolean;
  orderedItemsCount: number;
  deliveredItemsCount: number;
  availableItemsCount: number;
  totalPrice: number;
  productName: string;
  userId: string;
  username: string;
  deliveryMan?: string;
  createdAt: Date;
}
