export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
  Onboarding: undefined;
  TradesmenList: { categoryId: string };
  TradesmanDetail: { tradesmanId: string };
  Category: undefined;
  Booking: { tradesmanId: string };
  BookingConfirmation: { bookingId: string };
  Messages: undefined;
  Chat: { tradesmanId: string };
  Profile: undefined;
  EditProfile: undefined;
  Orders: undefined;
  OrderDetail: { orderId: string };
};