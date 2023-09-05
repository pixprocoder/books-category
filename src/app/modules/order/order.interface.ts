export type IOrder = {
  id: string;
  userId: string;
  orderedBooks: JSON;
  status: "pending" | "shipped" | "delivered";
};
