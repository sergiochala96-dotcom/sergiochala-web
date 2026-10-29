# Marca personal de Sergio Chala — sitio web con blog

Proyecto propio de Sergio Chala. Está **separado** de `neobrand-pages` (la academia en neobrandclub.com), de InfoTools, de Skooly y de los proyectos de clientes (Acordes Melódicos y otros). No mezcles archivos, repos ni cuentas entre proyectos.

## Qué se está construyendo
Un sitio web de marca personal con:
- **Inicio** (página principal) y **página de ventas** de la marca personal.
- **Cursos** (sección que presenta los productos de la academia).
- **Blog** de artículos: es la parte más importante. El objetivo es captar **tráfico orgánico** desde Google a 12–24 meses (Sergio tiene experiencia en SEO y cree poder posicionar en menos de 6 meses; no se prometen resultados).
- **Recursos descargables** (lead magnets).

Contexto: en 2020 Sergio lo hizo a mano con WordPress (cada blog 1 hora, cada recurso 3 horas, plantillas limitadas). Ahora el trabajo mecánico (maquetar, redactar, estructurar el SEO) lo hace Claude; Sergio aporta experiencia, historias y capturas.

## Los 3 pilares de contenido
1. **Skool** (y conectarlo con **Skooly**, su aplicación).
2. **Hotmart**.
3. **Claude** — el pilar **más importante**.

## De dónde sale la información
- Help centers y documentación oficial de cada plataforma: **solo como fuente para verificar datos**, no para copiar ni reformular.
- La **experiencia propia** de Sergio (lo que hizo, lo que le funcionó, errores, resultados).
- **Storytelling**: contar el artículo como una historia real.
- **Tutorial** paso a paso con **capturas de pantalla de la cuenta de Sergio** cuando haga falta.
- **Llamados a la acción** a sus productos y servicios, de forma honesta.

## Tono (provisional: validar con Sergio)
Español cercano y directo, en primera persona, como quien explica a un amigo. Práctico, claro y honesto, sin humo ni promesas exageradas. Con anécdotas reales. Sin tecnicismos innecesarios. Si Sergio da ejemplos de textos que le gusten, ajustar este apartado.

## Reglas de calidad (obligatorias)
Evitar contenido duplicado o "copiar y pegar" y cumplir lo que Google premia (experiencia propia, utilidad real, información correcta).
1. **Todo artículo lleva un aporte propio** de Sergio que nadie más tiene: historia real, resultado, error, dato o captura de su cuenta. Si falta, **pedírselo antes de redactar o publicar**. No inventar experiencias ni resultados.
2. **Nada de copiar ni parafrasear superficialmente** un help center. Se sintetiza, se explica con otras palabras y otra estructura, y se añade valor.
3. **Verificar los datos** (precios, funciones, pasos, límites) contra la fuente oficial vigente, **citar la fuente** y anotar la fecha de verificación. Si no se puede confirmar, decirlo; no suponer.
4. **Capturas propias**, nunca copiadas del help center ni de otros sitios.
5. **Cada artículo responde una intención de búsqueda concreta** y es distinto de los demás. Nada de producir en serie contenido sin valor.
6. **Sin promesas de ingresos ni resultados garantizados.** Sin afirmaciones que no se puedan respaldar.
7. **Independencia de marca:** Sergio no es empleado ni representante de Skool, Hotmart ni Anthropic (Claude). Incluir el aviso correspondiente donde aplique.
8. **Sergio da el visto bueno** antes de publicar cualquier cosa.
9. **Mantenimiento:** los artículos con datos que cambian se revisan y se actualizan con fecha.

## Estructura de cada artículo (plantilla base)
- Título (H1) con la palabra clave principal y una promesa clara.
- Introducción con gancho o mini historia.
- Respuesta rápida al inicio (resumen).
- Tutorial paso a paso, con capturas.
- Sección **"Mi experiencia"** (obligatoria).
- Errores comunes y consejos.
- Preguntas frecuentes (con datos estructurados).
- Llamado a la acción a un producto o recurso relacionado.
- Enlaces internos a artículos y cursos relacionados.
- Fuentes consultadas y fecha de verificación.

## SEO técnico (base)
Páginas rápidas y livianas (Core Web Vitals), buen móvil, sitemap y robots, etiquetas canónicas, título y descripción únicos por página, Open Graph, datos estructurados (artículo, migas de pan, preguntas frecuentes), URLs limpias, enlaces internos y categorías por pilar, imágenes optimizadas con texto alternativo. Conectar Google Search Console y analítica cuando Sergio lo decida.

## Método de SEO de Sergio (pendiente: Sergio lo aportará)
> Aquí se documenta su estrategia: cómo elige palabras clave, cómo estructura los artículos, cómo enlaza internamente, cadencia de publicación, etc. **Seguir este método por encima de reglas genéricas.**

## Decisión técnica (propuesta, confirmar al inicio)
**Astro**: sitio estático donde cada artículo es un archivo de texto (Markdown). El menú, el pie y los metadatos viven en un solo lugar; el listado del blog, el sitemap, las categorías y los artículos relacionados se generan solos. Todo el diseño (HTML/CSS) lo define Sergio con Claude, sin plantillas impuestas. Se publicaría en Vercel con GitHub. No hay panel visual: Claude escribe y publica los archivos y Sergio revisa en vista previa.

## Pendiente: las 6 preguntas iniciales (Sergio las responde en el chat nuevo)
1. **Dominio:** hoy `www.sergiochala.com` está en Systeme.io (da 404 en la raíz) y sus DNS están en un servicio de "parking". No está conectado a Vercel ni a GitHub. Decidir: pasarlo a Vercel, usar un subdominio o usar otro dominio.
2. **Página de ventas:** qué vende exactamente la marca personal (mentoría, cursos, servicios) y a quién.
3. **Su historia:** cómo empezó, qué pasó en 2020 y qué ha logrado desde entonces.
4. **Identidad:** logo, colores, tipografías y fotos.
5. **Captura de correos:** si los recursos descargables van a Systeme (como en Acordes) u otro sistema.
6. **Medición:** Google Search Console y analítica.

## Reglas de trabajo con Sergio
- **Ir a lo simple.** Hacer lo que se pide con la configuración más sencilla. Si no se puede de forma simple, decirlo y no hacerlo.
- **No crear infraestructura nueva sin preguntar:** bases de datos, hojas de cálculo, scripts, cuentas, contraseñas ni integraciones.
- **No tocar los servicios personales de Sergio sin necesidad** (Supabase es solo para InfoTools y Skooly). Antes de usar cualquier servicio externo, preguntar.
- Pedir confirmación antes de acciones irreversibles o públicas (publicar, borrar, enviar, cambiar DNS).
- Probar siempre en navegador (PC y celular) antes de dar algo por terminado, y reportar con honestidad lo que no se pudo verificar.
- Idioma de trabajo: español.

## Ecosistema de Sergio (contexto, no tocar desde aquí)
- **Academia:** neobrandclub.com (repo `neobrand-pages`, proyecto en Vercel, equipo `neobrandclub`).
- **InfoTools** y **Skooly:** aplicaciones propias; sus dominios los comprará más adelante.
- Usa **Vercel**, **GitHub** (cuenta `sergiochala96-dotcom`), **Systeme.io**, **Hotmart**, **Skool** y **Claude**.
