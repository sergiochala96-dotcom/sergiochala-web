// Temas que todavía no están escritos. Se muestran como tarjetas "Próximamente"
// en el blog solo para previsualizar cómo se va a ver la cuadrícula llena.
// No son artículos reales: no tienen ruta propia y no se indexan.
export type UpcomingTopic = {
  title: string;
  pillar: 'hotmart' | 'skool' | 'claude';
};

export const upcomingTopics: UpcomingTopic[] = [];
