
export interface Jersey {
  id: number;
  teamName: string;
  year: number;
  type: 'Local' | 'Visitante' | 'Alternativa';
  price: number;
  imageUrl: string;
  description: string;
}
