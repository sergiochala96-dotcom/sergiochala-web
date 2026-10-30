// Temas que todavía no están escritos. Se muestran como tarjetas "Próximamente"
// en el blog solo para previsualizar cómo se va a ver la cuadrícula llena.
// No son artículos reales: no tienen ruta propia y no se indexan.
export type UpcomingTopic = {
  title: string;
  pillar: 'hotmart' | 'skool' | 'claude';
};

export const upcomingTopics: UpcomingTopic[] = [
  { title: 'Cómo crear tu primer producto digital en Hotmart', pillar: 'hotmart' },
  { title: 'Hotmart vs. Skool: cuál elegir para tu negocio', pillar: 'hotmart' },
  { title: 'Cómo uso Claude para escribir mis artículos', pillar: 'claude' },
  { title: 'Claude Code: mi flujo de trabajo para crear contenido', pillar: 'claude' },
  { title: 'Cómo configurar tu comunidad en Skool paso a paso', pillar: 'skool' },
];
