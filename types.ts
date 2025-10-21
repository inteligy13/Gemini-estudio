export interface Jersey {
  id: number;
  teamName: string;
  year: number;
  type: 'home' | 'away' | 'third';
  price: number;
  imageUrl: string;
  description: string;
}
