import { useState, useEffect } from "react";

// ─── TRANSLATIONS ───────────────────────────────────────────────────────────
const T = {
  en: {
    appTitle: "Baby Sleep Trainer",
    appSub: "21-day gentle method",
    week: "Week",
    dayMode: "Day",
    nightMode: "Night",
    tab1: "Tonight's Steps",
    tab2: "Night Log",
    tab3: "Daily Routine",
    weekFocus: "Focus",
    weekReminder: "Week reminder",
    whatToDo: "What to do tonight",
    nightLog: "Night Log",
    save: "Save night log",
    saved: "✓ Saved",
    babyAge: "Baby's age in months",
    sampleSchedule: "Sample schedule",
    stimTitle: "Stimulation activities",
    progress: "21-day progress",
    nightsLogged: "nights logged",
    fields: {
      bedtime: "Bedtime",
      settleTime: "Mins to settle",
      pupdRounds: "PUPD rounds",
      nightWakes: "Night wakes",
      feeds: "Night feeds",
      wakeTime: "Wake-up time",
      notes: "Notes / mood",
    },
    placeholders: {
      settleTime: "e.g. 35",
      pupdRounds: "e.g. 6",
      nightWakes: "e.g. 2",
      feeds: "e.g. 1",
      notes: "How did it go?",
    },
    freeTag: "Free tool by",
    guidePromo: "Want the full sleep guide?",
    guideBtn: "Get the Sleep Guide →",
  },
  es: {
    appTitle: "Entrenador de Sueño",
    appSub: "Método suave de 21 días",
    week: "Semana",
    dayMode: "Día",
    nightMode: "Noche",
    tab1: "Pasos de hoy",
    tab2: "Registro nocturno",
    tab3: "Rutina diaria",
    weekFocus: "Enfoque",
    weekReminder: "Recordatorio de la semana",
    whatToDo: "Qué hacer esta noche",
    nightLog: "Registro nocturno",
    save: "Guardar registro",
    saved: "✓ Guardado",
    babyAge: "Edad del bebé en meses",
    sampleSchedule: "Horario de ejemplo",
    stimTitle: "Actividades de estimulación",
    progress: "Progreso — 21 días",
    nightsLogged: "noches registradas",
    fields: {
      bedtime: "Hora de dormir",
      settleTime: "Min. en calmarse",
      pupdRounds: "Rondas PUPD",
      nightWakes: "Despertares",
      feeds: "Tomas nocturnas",
      wakeTime: "Hora de despertar",
      notes: "Notas / estado",
    },
    placeholders: {
      settleTime: "ej. 35",
      pupdRounds: "ej. 6",
      nightWakes: "ej. 2",
      feeds: "ej. 1",
      notes: "¿Cómo fue?",
    },
    freeTag: "Herramienta gratuita de",
    guidePromo: "¿Quieres la guía completa de sueño?",
    guideBtn: "Ver la Guía de Sueño →",
  },
};

// ─── WEEKS DATA ──────────────────────────────────────────────────────────────
const WEEKS_DATA = {
  en: [
    {
      week: 1,
      title: "Move the Drowsy Point",
      focus: "Put down drowsy but awake. Rock to calm, crib to sleep.",
      colorDark: "#f4a7b9", colorLight: "#c4506a",
      tip: "Expect 30–60 min and many PUPD rounds. This is normal — you're not doing it wrong.",
      days: [
        { label: "Day 1", steps: ["Do full bedtime routine: bath, feed, dim lights, white noise ON (loud).", "Rock until very drowsy — eyes heavy, body limp, still slightly fluttering.", "Place in crib. If he fusses within 2 min, pick up immediately and calm to drowsy again.", "Repeat PUPD as many times as needed. Tonight may take 45–60 min. That is okay.", "Count your rounds — write it down. You'll watch this number drop."] },
        { label: "Day 2", steps: ["Same routine. Start timing from when you begin the bedtime feed.", "Try putting down slightly less drowsy than yesterday — just 5% less.", "If he cries within 30 sec of being put down, wait 60 seconds before picking up.", "Your goal: fewer PUPD rounds than Day 1.", "After each wake in the night: wait 2–3 min before going in."] },
        { label: "Day 3", steps: ["Try putting down at 'drowsy but eyes still open' — this is the target state.", "When he fusses, try your hand on his chest first before picking up.", "If chest touch doesn't calm within 60 sec, pick up. No guilt.", "Track: how long did settling take vs Day 1? Most see first improvement tonight.", "Night wakes: try PUPD before offering a feed if it's been under 3 hrs."] },
        { label: "Day 4", steps: ["Consistency is the job today. Same routine, same sequence, same timing.", "Put down at 'drowsy, eyes open.' Try hand-on-chest more before full pickup.", "If he escalates to full cry: pick up, calm, try again. Never leave at full cry.", "You may notice shorter settling time tonight — celebrate that.", "Note any pattern in what time his first night waking happens."] },
        { label: "Day 5", steps: ["Tonight try putting down just slightly less drowsy — eyes open, less glazed.", "Reduce rocking time by ~1 minute before putting down.", "Use shushing + hand on chest as first response before pickup.", "If he stirs between cycles at night, wait 3–4 min — he may settle alone.", "Log his longest independent stretch tonight. You'll want this data."] },
        { label: "Day 6", steps: ["You're past the hardest days. Routine should feel more familiar to him now.", "Try putting him down when he's calm but clearly sleepy, not yet drowsy.", "Sit next to the crib after putting down — your presence helps regulate him.", "Use white noise as a consistent sleep cue from now on, every single nap and night.", "Notice: is he resettling after night wakings faster than Day 1?"] },
        { label: "Day 7", steps: ["End of Week 1. Review your logs: PUPD rounds should be fewer, settling faster.", "Tonight aim to put him down calm + sleepy. Rock briefly just to calm, not to sleep.", "Sit beside crib with hand available but don't initiate touch unless he fusses.", "If he's consistently settling in under 30 min, you're ready for Week 2.", "If nights are still very rough, repeat Day 5–6 approach before moving forward."] },
      ],
    },
    {
      week: 2,
      title: "Reduce the Motion",
      focus: "Gentle sway → still hold → sitting in chair. Fade the rocking.",
      colorDark: "#b5d5f5", colorLight: "#2060b0",
      tip: "Settling should start improving to 20–30 min. Stay consistent even on hard nights.",
      days: [
        { label: "Day 8", steps: ["This week: reduce the rocking motion itself, not just the drowsy point.", "Rock for 2 min max, then transition to gentle swaying standing still.", "After sway, hold still for 1–2 min, then put in crib drowsy-awake.", "If he fusses, sway (not rock) to calm — this is a subtle but important shift.", "White noise loud. Hand on chest available when in crib."] },
        { label: "Day 9", steps: ["Reduce rocking to 1 minute, then move to sway-in-arms.", "When he's calm but awake, slow the sway to almost still.", "Place in crib. Sit beside with hand on chest ready.", "Try removing hand after 60 sec if he's calm — see if he holds.", "Night wakes: try patting in crib before any pickup tonight."] },
        { label: "Day 10", steps: ["No rocking tonight — start with gentle sway only from the beginning.", "Hold still after 2 min of sway, wait for body to relax.", "Place in crib. Your presence is the comfort now, not the motion.", "If he escalates: pick up, hold still (no sway), calm, put down.", "Track: how many times did he need pickup vs patting only?"] },
        { label: "Day 11", steps: ["Sway for 2 min, then sit in a chair holding him still.", "Let him feel the transition from movement to stillness in your arms.", "When his breathing slows, transfer to crib.", "Stay seated beside crib. Don't hover — let him try.", "Shush rhythmically if he fusses before reaching for him."] },
        { label: "Day 12", steps: ["Brief sway to calm, then sit in chair with him. Reduce sway to nearly zero.", "After 2 min seated still, place in crib.", "Tonight try sitting back slightly from crib — a little more space.", "Pat crib mattress beside him as a comfort sound if he stirs.", "Most babies take their longest independent stretch this week — log it."] },
        { label: "Day 13", steps: ["Sway 1 min → sit still in chair → crib. That's the full sequence now.", "Try not touching him during the seated still phase — just hold.", "In crib: hand available but wait for a fuss before using it.", "Night wakes: try sitting beside crib with shushing before any intervention.", "You're building his confidence. He's learning you're nearby, not gone."] },
        { label: "Day 14", steps: ["End of Week 2. Motion is now minimal. You've done the hardest part.", "Tonight: brief hold, sit still in chair 1–2 min, crib.", "Try sitting an arm's length from crib after putting down.", "Review logs: settling time should be under 20 min most nights.", "If he's having a regression night, go back one step — that's not failure."] },
      ],
    },
    {
      week: 3,
      title: "The Chair Shift",
      focus: "Hand on chest → hand nearby → sitting without touching.",
      colorDark: "#b8e0c8", colorLight: "#1e8050",
      tip: "Night wakings should start consolidating. Most nights under 15 min to settle.",
      days: [
        { label: "Day 15", steps: ["This week: fade your physical presence from the crib.", "Put down awake-calm. Sit right beside crib, hand on his chest.", "After 60 sec of calm, slide hand to crib rail — nearby but not touching.", "If he fusses: hand back on chest for 30 sec, then remove again.", "Goal: he falls asleep with hand nearby, not on him."] },
        { label: "Day 16", steps: ["Put down. Hand on chest for 30 sec only, then move to crib rail.", "After 2 min with hand on rail, try resting hand in your own lap.", "Stay seated right beside crib — your presence is the security.", "If he stirs: shush first, hand second, pickup last resort.", "Night wakes: go in, sit beside crib, shush — try no touch first."] },
        { label: "Day 17", steps: ["Put down. Brief hand on chest (15 sec), then hand in your lap.", "Sit quietly at crib level. Soft shushing only.", "Try moving your chair 6 inches from the crib tonight.", "He may look for you — make eye contact, say 'shhh, mama's here.'", "Some babies settle faster now. Some have one hard night here. Both normal."] },
        { label: "Day 18", steps: ["Put down awake. No hand on chest unless he fusses.", "Sit beside crib, slightly back. Shush if needed.", "If calm: stay still, no intervention. Let him do the work.", "Move chair 1 foot back from last night's position.", "Night wakes: wait 4–5 min before going in. He may resettle alone."] },
        { label: "Day 19", steps: ["Put down awake. Sit at chair, now 2 feet from crib.", "Minimal shushing — only if escalating.", "If he fusses: verbal reassurance first ('shhh, you're okay') before moving.", "Stay until he's asleep, but from a little further each night.", "Log: did he have any wake windows where he resettled without you?"] },
        { label: "Day 20", steps: ["Put down awake. Move chair to middle of room.", "No shushing unless truly needed. Your calm presence is the cue.", "He knows you're there. He knows how to sleep. Trust the process.", "Night wakes: most babies this week start having one long stretch of 4–6 hrs.", "If he wakes and resettles alone — that is the skill. He did it."] },
        { label: "Day 21", steps: ["Final night. Chair near the door.", "Put down awake. Sit. Let him fall asleep independently.", "You can leave once he's settled if he's comfortable.", "Over the next few nights: move chair to just outside the door.", "You built this. 21 nights of consistency. He has the skill now — and so do you."] },
      ],
    },
  ],
  es: [
    {
      week: 1,
      title: "Mover el punto de somnolencia",
      focus: "Acostar somnoliento pero despierto. Mecer para calmar, cuna para dormir.",
      colorDark: "#f4a7b9", colorLight: "#c4506a",
      tip: "Espera 30–60 min y muchas rondas PUPD. Esto es normal — no lo estás haciendo mal.",
      days: [
        { label: "Día 1", steps: ["Haz la rutina completa: baño, toma, luz tenue, ruido blanco FUERTE.", "Mece hasta somnolencia profunda — ojos pesados, cuerpo flácido, párpados temblando.", "Acuesta en la cuna. Si se queja en 2 min, cógelo y cálmalo hasta somnolencia de nuevo.", "Repite PUPD las veces que haga falta. Esta noche puede tomar 45–60 min. Está bien.", "Cuenta las rondas — anótalas. Verás cómo ese número baja."] },
        { label: "Día 2", steps: ["Misma rutina. Empieza a cronometrar desde la toma de antes de dormir.", "Intenta acostar un poco menos somnoliento que ayer — solo un 5% menos.", "Si llora a los 30 seg de ser acostado, espera 60 seg antes de cogerlo.", "Tu meta: menos rondas PUPD que el Día 1.", "Cada vez que se despierte de noche: espera 2–3 min antes de entrar."] },
        { label: "Día 3", steps: ["Intenta acostar en estado 'somnoliento pero con ojos abiertos' — este es el objetivo.", "Cuando se queje, prueba primero la mano en el pecho antes de cogerlo.", "Si la mano no lo calma en 60 seg, cógelo. Sin culpa.", "¿Cuánto tardó en calmarse vs el Día 1? La mayoría ve mejoría esta noche.", "Despertares nocturnos: prueba PUPD antes de ofrecer toma si han pasado menos de 3 hrs."] },
        { label: "Día 4", steps: ["La consistencia es el trabajo de hoy. Misma rutina, misma secuencia, mismo tiempo.", "Acuesta con 'ojos abiertos, somnoliento.' Usa más la mano en el pecho antes de coger.", "Si escala a llanto pleno: coge, calma, inténtalo de nuevo. Nunca dejes llorar sin respuesta.", "Puede que notes menos tiempo para calmarse esta noche — celébralo.", "Fíjate en qué hora es el primer despertar nocturno — busca patrones."] },
        { label: "Día 5", steps: ["Esta noche intenta acostar un poco menos somnoliento — ojos abiertos, menos vidriosos.", "Reduce el tiempo de mecido en ~1 minuto antes de acostar.", "Usa susurros + mano en el pecho como primera respuesta antes de coger.", "Si se mueve entre ciclos de noche, espera 3–4 min — puede calmarse solo.", "Anota su tramo independiente más largo esta noche. Necesitarás ese dato."] },
        { label: "Día 6", steps: ["Ya pasaste los días más difíciles. La rutina le debería resultar familiar.", "Intenta acostarlo cuando esté tranquilo pero claramente soñoliento, no somnoliento aún.", "Siéntate junto a la cuna después de acostarlo — tu presencia lo ayuda a regularse.", "Usa el ruido blanco como señal de sueño consistente a partir de ahora, en cada siesta y noche.", "¿Se está calmando más rápido después de los despertares nocturnos que el Día 1?"] },
        { label: "Día 7", steps: ["Fin de la Semana 1. Revisa tus registros: las rondas PUPD deberían ser menos.", "Esta noche acuéstalo tranquilo + soñoliento. Mece brevemente solo para calmar.", "Siéntate junto a la cuna con la mano disponible pero sin tocarlo salvo que se queje.", "Si se calma en menos de 30 min de forma consistente, estás lista para la Semana 2.", "Si las noches siguen muy difíciles, repite el enfoque del Día 5–6 antes de avanzar."] },
      ],
    },
    {
      week: 2,
      title: "Reducir el movimiento",
      focus: "Balanceo suave → quieto en brazos → sentada en silla. Elimina el mecido.",
      colorDark: "#b5d5f5", colorLight: "#2060b0",
      tip: "El tiempo para calmarse debería mejorar a 20–30 min. Sé consistente aunque la noche sea difícil.",
      days: [
        { label: "Día 8", steps: ["Esta semana: reduce el movimiento de mecido en sí, no solo el punto de somnolencia.", "Mece máximo 2 min, luego pasa a balanceo suave de pie.", "Tras el balanceo, quédate quieta 1–2 min, luego acuesta en la cuna somnoliento-despierto.", "Si se queja, balancea (no mezcas) para calmar — es un cambio sutil pero importante.", "Ruido blanco fuerte. Mano en el pecho disponible cuando esté en la cuna."] },
        { label: "Día 9", steps: ["Reduce el mecido a 1 minuto, luego pasa a balanceo en brazos.", "Cuando esté tranquilo pero despierto, ralentiza el balanceo hasta casi parar.", "Acuesta en la cuna. Siéntate al lado con la mano en el pecho lista.", "Prueba a retirar la mano después de 60 seg si está tranquilo — a ver si aguanta.", "Despertares nocturnos: prueba palmaditas en la cuna antes de cogerlo esta noche."] },
        { label: "Día 10", steps: ["Sin mecido esta noche — empieza solo con balanceo suave desde el principio.", "Quédate quieta después de 2 min de balanceo, espera a que el cuerpo se relaje.", "Acuesta en la cuna. Tu presencia es el consuelo ahora, no el movimiento.", "Si escala: coge, quédate quieta (sin balanceo), calma, acuesta.", "¿Cuántas veces necesitó que lo cogieras vs solo palmaditas?"] },
        { label: "Día 11", steps: ["Balancea 2 min, luego siéntate en una silla sosteniéndolo quieto.", "Deja que sienta la transición de movimiento a quietud en tus brazos.", "Cuando su respiración se ralentice, transfiérelo a la cuna.", "Quédate sentada junto a la cuna. No te inclines — déjalo intentarlo.", "Susurra rítmicamente si se queja antes de alcanzarlo."] },
        { label: "Día 12", steps: ["Balanceo breve para calmar, luego siéntate con él en la silla. Reduce el balanceo a casi cero.", "Después de 2 min sentada quieta, acuesta en la cuna.", "Esta noche prueba a sentarte un poco más lejos de la cuna — un poco más de espacio.", "Palmea el colchón de la cuna junto a él como sonido de consuelo si se mueve.", "La mayoría de bebés tienen su tramo independiente más largo esta semana — anótalo."] },
        { label: "Día 13", steps: ["Balanceo 1 min → sentada quieta en silla → cuna. Esa es la secuencia completa ahora.", "Intenta no tocarlo durante la fase de quietud sentada — solo sostenlo.", "En la cuna: mano disponible pero espera a que se queje antes de usarla.", "Despertares nocturnos: prueba sentarte junto a la cuna susurrando antes de intervenir.", "Estás construyendo su confianza. Está aprendiendo que estás cerca, no que te has ido."] },
        { label: "Día 14", steps: ["Fin de la Semana 2. El movimiento es mínimo ahora. Has hecho la parte más difícil.", "Esta noche: sostén brevemente, sentada quieta 1–2 min en silla, cuna.", "Prueba a sentarte a un brazo de distancia de la cuna después de acostar.", "Revisa los registros: el tiempo para calmarse debería ser menos de 20 min la mayoría de noches.", "Si tiene una noche de regresión, retrocede un paso — eso no es fracaso."] },
      ],
    },
    {
      week: 3,
      title: "El desplazamiento de la silla",
      focus: "Mano en el pecho → mano cerca → sentada sin tocar.",
      colorDark: "#b8e0c8", colorLight: "#1e8050",
      tip: "Los despertares nocturnos deberían empezar a consolidarse. La mayoría de noches menos de 15 min para calmarse.",
      days: [
        { label: "Día 15", steps: ["Esta semana: aleja tu presencia física de la cuna.", "Acuesta despierto-tranquilo. Siéntate justo junto a la cuna, mano en su pecho.", "Después de 60 seg tranquilo, desliza la mano a la baranda — cerca pero sin tocar.", "Si se queja: mano en el pecho 30 seg, luego retírala de nuevo.", "Meta: que se duerma con la mano cerca, no encima."] },
        { label: "Día 16", steps: ["Acuesta. Mano en el pecho solo 30 seg, luego pasa a la baranda.", "Después de 2 min con la mano en la baranda, prueba a apoyarla en tu regazo.", "Quédate sentada junto a la cuna — tu presencia es la seguridad.", "Si se mueve: susurra primero, mano segundo, coger como último recurso.", "Despertares nocturnos: entra, siéntate junto a la cuna, susurra — prueba sin tocar primero."] },
        { label: "Día 17", steps: ["Acuesta. Mano breve en el pecho (15 seg), luego mano en tu regazo.", "Siéntate quieta a nivel de la cuna. Solo susurros suaves.", "Prueba a mover tu silla 15 cm de la cuna esta noche.", "Puede que te busque con la mirada — haz contacto visual, di 'shhh, mamá está aquí.'", "Algunos bebés se calman más rápido ahora. Algunos tienen una noche difícil aquí. Ambos son normales."] },
        { label: "Día 18", steps: ["Acuesta despierto. Sin mano en el pecho salvo que se queje.", "Siéntate junto a la cuna, ligeramente hacia atrás. Susurra si hace falta.", "Si está tranquilo: quédate quieta, sin intervenir. Deja que haga el trabajo.", "Mueve la silla 30 cm más atrás de la posición de anoche.", "Despertares nocturnos: espera 4–5 min antes de entrar. Puede calmarse solo."] },
        { label: "Día 19", steps: ["Acuesta despierto. Siéntate en la silla, ahora a 60 cm de la cuna.", "Susurros mínimos — solo si escala.", "Si se queja: tranquilización verbal primero ('shhh, estás bien') antes de moverte.", "Quédate hasta que se duerma, pero cada noche un poco más lejos.", "¿Hubo algún momento en que se calmó sin que intervieras?"] },
        { label: "Día 20", steps: ["Acuesta despierto. Mueve la silla al centro de la habitación.", "Sin susurros salvo que sea realmente necesario. Tu presencia tranquila es la señal.", "Él sabe que estás ahí. Él sabe dormir. Confía en el proceso.", "Despertares nocturnos: la mayoría de bebés esta semana empiezan a tener un tramo largo de 4–6 hrs.", "Si se despierta y se calma solo — esa es la habilidad. Lo hizo él."] },
        { label: "Día 21", steps: ["Última noche. Silla cerca de la puerta.", "Acuesta despierto. Siéntate. Deja que se duerma de forma independiente.", "Puedes salir una vez que esté calmado si está cómodo.", "Las próximas noches: mueve la silla justo fuera de la puerta.", "Lo construiste tú. 21 noches de consistencia. Él tiene la habilidad ahora — y tú también."] },
      ],
    },
  ],
};

// ─── ROUTINES ────────────────────────────────────────────────────────────────
const ROUTINES = {
  en: {
    1: { wakeWindows: "45–60 min", naps: "4–5 naps/day", totalSleep: "~16 hrs/day", schedule: [{time:"7:00 AM",activity:"Wake + feed"},{time:"7:45 AM",activity:"Nap 1 (45–60 min)"},{time:"9:00 AM",activity:"Feed + awake time"},{time:"9:45 AM",activity:"Nap 2"},{time:"11:00 AM",activity:"Feed + awake time"},{time:"12:00 PM",activity:"Nap 3"},{time:"1:30 PM",activity:"Feed + awake time"},{time:"2:15 PM",activity:"Nap 4"},{time:"3:30 PM",activity:"Feed + awake time"},{time:"4:15 PM",activity:"Nap 5 (catnap)"},{time:"5:00 PM",activity:"Feed"},{time:"6:30 PM",activity:"Bedtime feed + sleep"}], stimulation: ["Skin-to-skin contact — calms nervous system and builds attachment","Black & white high-contrast cards held 20–30cm from face","Gentle talking and singing — your voice is their favourite stimulus","Tummy time on your chest (not floor yet)","Gentle leg bicycles during nappy changes","Soft mobiles with contrasting patterns above eye level"] },
    2: { wakeWindows: "60–90 min", naps: "4–5 naps/day", totalSleep: "~15–16 hrs/day", schedule: [{time:"7:00 AM",activity:"Wake + feed"},{time:"8:15 AM",activity:"Nap 1"},{time:"9:30 AM",activity:"Feed + awake time"},{time:"11:00 AM",activity:"Nap 2"},{time:"12:30 PM",activity:"Feed + awake time"},{time:"2:00 PM",activity:"Nap 3"},{time:"3:30 PM",activity:"Feed + awake time"},{time:"4:45 PM",activity:"Nap 4 (catnap)"},{time:"5:30 PM",activity:"Feed"},{time:"7:00 PM",activity:"Bedtime routine + sleep"}], stimulation: ["Floor tummy time 2–3x per day, 3–5 min sessions","Track a slow-moving colourful toy side to side","Rattles and gentle sound-making objects","Face-to-face conversations — wait for coos, respond","Baby gym with hanging toys to bat at","Gentle infant massage after bath"] },
    3: { wakeWindows: "75–90 min", naps: "4 naps/day", totalSleep: "~15 hrs/day", schedule: [{time:"7:00 AM",activity:"Wake + feed"},{time:"8:15 AM",activity:"Nap 1 (45–60 min)"},{time:"9:30 AM",activity:"Feed + awake time"},{time:"11:15 AM",activity:"Nap 2"},{time:"12:45 PM",activity:"Feed + awake time"},{time:"2:30 PM",activity:"Nap 3"},{time:"4:00 PM",activity:"Feed + awake time"},{time:"5:15 PM",activity:"Catnap"},{time:"6:00 PM",activity:"Feed"},{time:"7:00 PM",activity:"Bedtime routine + sleep"}], stimulation: ["Extended tummy time — 10 min sessions, rolled towel under chest","Mirror play — babies love their own reflection","Reach and bat: dangle toys just within reach","Blow raspberries — he'll start to copy","Reading board books with simple faces and colours","Introduce a sensory ball with different textures"] },
    4: { wakeWindows: "90 min–2 hrs", naps: "3–4 naps/day", totalSleep: "~14–15 hrs/day", schedule: [{time:"7:00 AM",activity:"Wake + feed"},{time:"8:30 AM",activity:"Nap 1 (1–1.5 hrs)"},{time:"10:00 AM",activity:"Feed + awake time"},{time:"12:00 PM",activity:"Nap 2 (1–1.5 hrs)"},{time:"1:30 PM",activity:"Feed + awake time"},{time:"3:30 PM",activity:"Nap 3 (45 min)"},{time:"4:30 PM",activity:"Feed + awake time"},{time:"5:30 PM",activity:"Catnap optional"},{time:"7:00 PM",activity:"Bedtime routine + sleep"}], stimulation: ["4-month regression is brain development, not setback","Supported sitting with pillow props","Peek-a-boo beginnings — cover your face, reveal slowly","Cause-and-effect toys: press a button, something happens","Outdoor time — natural light, textures like grass and wind","Gentle bouncing on your knee with songs"] },
    5: { wakeWindows: "2–2.5 hrs", naps: "3 naps/day", totalSleep: "~14–15 hrs/day", schedule: [{time:"7:00 AM",activity:"Wake + feed"},{time:"9:00 AM",activity:"Nap 1 (1–1.5 hrs)"},{time:"10:30 AM",activity:"Feed + awake time"},{time:"12:30 PM",activity:"Nap 2 (1–1.5 hrs)"},{time:"2:00 PM",activity:"Feed + awake time"},{time:"4:00 PM",activity:"Catnap (30–45 min)"},{time:"5:00 PM",activity:"Feed + quiet awake time"},{time:"7:00 PM",activity:"Bedtime routine + sleep"}], stimulation: ["Roll a soft ball back and forth — builds tracking and anticipation","Sit-supported play on floor with toys to reach for","Songs with actions: Itsy Bitsy Spider, Pat-a-Cake","Exersaucer or activity centre (max 15–20 min sessions)","High-contrast books — name what you see","Nature walks in pram — narrate everything","Tummy time with toys just out of reach to encourage rolling","Water play with different temperature water on hands"] },
    6: { wakeWindows: "2–2.5 hrs", naps: "3 naps/day", totalSleep: "~14 hrs/day", schedule: [{time:"7:00 AM",activity:"Wake + feed"},{time:"9:00 AM",activity:"Nap 1 (1–1.5 hrs)"},{time:"10:30 AM",activity:"Feed + awake time"},{time:"12:30 PM",activity:"Nap 2 (1–1.5 hrs)"},{time:"2:00 PM",activity:"Feed + solids intro"},{time:"4:00 PM",activity:"Catnap (30–45 min)"},{time:"5:00 PM",activity:"Feed + play"},{time:"7:00 PM",activity:"Bedtime routine + sleep"}], stimulation: ["Introduce first purees or baby-led weaning","Sit unsupported practice — surround with pillows","Peek-a-boo full version — builds object permanence","Sensory bins: rice, pasta, safe textured items","Baby sign language: 'more', 'milk', 'all done'","Bubbles — tracking builds eye development","Floor mirror for self-exploration"] },
    7: { wakeWindows: "2.5–3 hrs", naps: "2–3 naps/day", totalSleep: "~13–14 hrs/day", schedule: [{time:"7:00 AM",activity:"Wake + feed"},{time:"9:30 AM",activity:"Nap 1 (1–1.5 hrs)"},{time:"11:00 AM",activity:"Feed + solids"},{time:"1:00 PM",activity:"Nap 2 (1–1.5 hrs)"},{time:"2:30 PM",activity:"Feed + awake time"},{time:"4:30 PM",activity:"Catnap optional"},{time:"5:30 PM",activity:"Feed + quiet play"},{time:"7:00 PM",activity:"Bedtime routine + sleep"}], stimulation: ["Crawling prep: place toy just out of reach during tummy time","Bang objects together — rhythm and cause-and-effect","Name body parts during dressing","Simple shape sorters with 1–2 shapes","Board books with flaps and textures","Encourage standing with support","Stacking cups — nest, stack, knock down"] },
    8: { wakeWindows: "2.5–3.5 hrs", naps: "2 naps/day", totalSleep: "~13–14 hrs/day", schedule: [{time:"7:00 AM",activity:"Wake + feed + solids"},{time:"9:30 AM",activity:"Nap 1 (1–1.5 hrs)"},{time:"11:00 AM",activity:"Feed + awake time"},{time:"2:00 PM",activity:"Nap 2 (1–1.5 hrs)"},{time:"3:30 PM",activity:"Feed + solids + play"},{time:"6:00 PM",activity:"Feed"},{time:"7:00 PM",activity:"Bedtime routine + sleep"}], stimulation: ["Crawling encouragement: tunnels, floor chasing games","Musical instruments: drum, xylophone, shakers","Drop and retrieve games","Copy games: clap, wave","Hide a toy under a cloth — full object permanence","Outdoor sandpit or grass exploration","Simple puzzles with large knob pieces"] },
    9: { wakeWindows: "3–3.5 hrs", naps: "2 naps/day", totalSleep: "~13 hrs/day", schedule: [{time:"7:00 AM",activity:"Wake + feed + solids"},{time:"9:30 AM",activity:"Nap 1 (1–1.5 hrs)"},{time:"11:00 AM",activity:"Awake time + solids"},{time:"2:00 PM",activity:"Nap 2 (1 hr)"},{time:"3:00 PM",activity:"Feed + play"},{time:"5:30 PM",activity:"Solids dinner"},{time:"6:30 PM",activity:"Feed"},{time:"7:00 PM",activity:"Bedtime routine + sleep"}], stimulation: ["Cruising along furniture","Ball rolling back and forth — turn-taking","Stacking and knocking towers","Books with animals + sounds","Sensory play: safe finger painting","Imitation games: brushing hair, stirring","Dance to music — rhythm is excellent brain development"] },
    10: { wakeWindows: "3–4 hrs", naps: "2 naps/day", totalSleep: "~12–13 hrs/day", schedule: [{time:"7:00 AM",activity:"Wake + feed + solids"},{time:"9:30 AM",activity:"Nap 1 (1–1.5 hrs)"},{time:"11:30 AM",activity:"Awake + solids"},{time:"2:00 PM",activity:"Nap 2 (1 hr)"},{time:"3:00 PM",activity:"Play + feed"},{time:"5:30 PM",activity:"Solids dinner"},{time:"6:30 PM",activity:"Feed"},{time:"7:00 PM",activity:"Bedtime routine + sleep"}], stimulation: ["Shape sorter and simple puzzles","Introduce pretend play: feeding dolly","Outdoor exploration — leaves, rocks, water, sand","Name and point: 'where's the ball?'","Building block towers to knock over","Simple books they can 'read' themselves","Freeze dance, nursery rhymes with actions"] },
    11: { wakeWindows: "3.5–4 hrs", naps: "2 naps/day (may transition to 1)", totalSleep: "~12–13 hrs/day", schedule: [{time:"7:00 AM",activity:"Wake + feed + solids"},{time:"9:30 AM",activity:"Nap 1 (1–1.5 hrs)"},{time:"11:30 AM",activity:"Awake + solids lunch"},{time:"2:30 PM",activity:"Nap 2 (1 hr)"},{time:"3:30 PM",activity:"Feed + active play"},{time:"5:30 PM",activity:"Solids dinner"},{time:"6:30 PM",activity:"Feed"},{time:"7:00 PM",activity:"Bedtime routine + sleep"}], stimulation: ["Walk holding both hands — preparing for first steps","Introduce crayons and large paper","Play in mirror: name body parts","Outdoor play daily — different surfaces","Ball skills: kick, throw, roll","Simple sorting games","Pretend play: tea party, cooking, shopping"] },
    12: { wakeWindows: "4–5 hrs", naps: "1–2 naps/day", totalSleep: "~12–13 hrs/day", schedule: [{time:"7:00 AM",activity:"Wake + milk + solids breakfast"},{time:"9:30 AM",activity:"Nap 1 (1–1.5 hrs) if 2-nap schedule"},{time:"12:00 PM",activity:"Solids lunch + milk"},{time:"2:00 PM",activity:"Nap (1.5–2 hrs if 1-nap schedule)"},{time:"4:00 PM",activity:"Milk + active play"},{time:"5:30 PM",activity:"Solids dinner"},{time:"6:30 PM",activity:"Milk"},{time:"7:00 PM",activity:"Bedtime routine + sleep"}], stimulation: ["First steps practice — push walker, hands-free standing","Simple shape sorter and nesting cups","Introduce playdough (edible recipe)","Books with one word per page","Cause-and-effect toys with buttons, levers","Singing with actions all day long","Playground: slide, swings, climbing","Ball sports: kick, catch, roll"] },
  },
  es: {
    1: { wakeWindows: "45–60 min", naps: "4–5 siestas/día", totalSleep: "~16 hrs/día", schedule: [{time:"7:00",activity:"Despertar + toma"},{time:"7:45",activity:"Siesta 1 (45–60 min)"},{time:"9:00",activity:"Toma + tiempo despierto"},{time:"9:45",activity:"Siesta 2"},{time:"11:00",activity:"Toma + tiempo despierto"},{time:"12:00",activity:"Siesta 3"},{time:"13:30",activity:"Toma + tiempo despierto"},{time:"14:15",activity:"Siesta 4"},{time:"15:30",activity:"Toma + tiempo despierto"},{time:"16:15",activity:"Siesta 5 (cabezada)"},{time:"17:00",activity:"Toma"},{time:"18:30",activity:"Toma de dormir + sueño"}], stimulation: ["Piel con piel — calma el sistema nervioso y construye apego","Tarjetas blanco y negro de alto contraste a 20–30cm de la cara","Hablarle y cantarle suavemente — tu voz es su estímulo favorito","Tiempo boca abajo sobre tu pecho (no en el suelo aún)","Bicicleta suave con las piernas en cambios de pañal","Móviles suaves con patrones contrastantes a nivel de los ojos"] },
    2: { wakeWindows: "60–90 min", naps: "4–5 siestas/día", totalSleep: "~15–16 hrs/día", schedule: [{time:"7:00",activity:"Despertar + toma"},{time:"8:15",activity:"Siesta 1"},{time:"9:30",activity:"Toma + tiempo despierto"},{time:"11:00",activity:"Siesta 2"},{time:"12:30",activity:"Toma + tiempo despierto"},{time:"14:00",activity:"Siesta 3"},{time:"15:30",activity:"Toma + tiempo despierto"},{time:"16:45",activity:"Siesta 4 (cabezada)"},{time:"17:30",activity:"Toma"},{time:"19:00",activity:"Rutina de dormir + sueño"}], stimulation: ["Tiempo boca abajo en el suelo 2–3 veces/día, sesiones de 3–5 min","Sigue un juguete de colores que se mueve lentamente de lado a lado","Sonajeros y objetos que hacen sonidos suaves","Conversaciones cara a cara — espera los gorjeos y responde","Gimnasio para bebé con juguetes colgantes para golpear","Masaje infantil suave después del baño"] },
    3: { wakeWindows: "75–90 min", naps: "4 siestas/día", totalSleep: "~15 hrs/día", schedule: [{time:"7:00",activity:"Despertar + toma"},{time:"8:15",activity:"Siesta 1 (45–60 min)"},{time:"9:30",activity:"Toma + tiempo despierto"},{time:"11:15",activity:"Siesta 2"},{time:"12:45",activity:"Toma + tiempo despierto"},{time:"14:30",activity:"Siesta 3"},{time:"16:00",activity:"Toma + tiempo despierto"},{time:"17:15",activity:"Cabezada"},{time:"18:00",activity:"Toma"},{time:"19:00",activity:"Rutina de dormir + sueño"}], stimulation: ["Tiempo boca abajo extendido — sesiones de 10 min, toalla enrollada bajo el pecho","Juego con espejo — los bebés adoran su propio reflejo","Alcanzar y golpear: cuelga juguetes justo a su alcance","Sopla pedorretas — empezará a copiar","Libros de cartón con caras y colores simples","Introduce una pelota sensorial con diferentes texturas"] },
    4: { wakeWindows: "90 min–2 hrs", naps: "3–4 siestas/día", totalSleep: "~14–15 hrs/día", schedule: [{time:"7:00",activity:"Despertar + toma"},{time:"8:30",activity:"Siesta 1 (1–1.5 hrs)"},{time:"10:00",activity:"Toma + tiempo despierto"},{time:"12:00",activity:"Siesta 2 (1–1.5 hrs)"},{time:"13:30",activity:"Toma + tiempo despierto"},{time:"15:30",activity:"Siesta 3 (45 min)"},{time:"16:30",activity:"Toma + tiempo despierto"},{time:"17:30",activity:"Cabezada opcional"},{time:"19:00",activity:"Rutina de dormir + sueño"}], stimulation: ["La regresión de 4 meses es desarrollo cerebral, no retroceso","Sentado con apoyo de almohadas — desarrolla core y conciencia espacial","Inicio del cucú-trás — cubre tu cara con un paño, revela lentamente","Juguetes causa-efecto: presiona un botón, pasa algo","Tiempo al aire libre — luz natural, texturas como hierba y viento","Rebote suave en tu rodilla con canciones"] },
    5: { wakeWindows: "2–2.5 hrs", naps: "3 siestas/día", totalSleep: "~14–15 hrs/día", schedule: [{time:"7:00",activity:"Despertar + toma"},{time:"9:00",activity:"Siesta 1 (1–1.5 hrs)"},{time:"10:30",activity:"Toma + tiempo despierto"},{time:"12:30",activity:"Siesta 2 (1–1.5 hrs)"},{time:"14:00",activity:"Toma + tiempo despierto"},{time:"16:00",activity:"Cabezada (30–45 min)"},{time:"17:00",activity:"Toma + tiempo tranquilo despierto"},{time:"19:00",activity:"Rutina de dormir + sueño"}], stimulation: ["Rueda una pelota blanda hacia él — desarrolla seguimiento visual y anticipación","Sentado con apoyo en el suelo con juguetes a alcanzar","Canciones con acciones: Incy Wincy Spider, Pito Pito","Saltador o centro de actividades (máx 15–20 min)","Libros de alto contraste — nombra lo que ves","Paseos en carrito — narra todo lo que ves","Tiempo boca abajo con juguetes justo fuera de alcance para estimular el giro","Juego de agua con agua a diferentes temperaturas en las manos"] },
    6: { wakeWindows: "2–2.5 hrs", naps: "3 siestas/día", totalSleep: "~14 hrs/día", schedule: [{time:"7:00",activity:"Despertar + toma"},{time:"9:00",activity:"Siesta 1 (1–1.5 hrs)"},{time:"10:30",activity:"Toma + tiempo despierto"},{time:"12:30",activity:"Siesta 2 (1–1.5 hrs)"},{time:"14:00",activity:"Toma + introducción sólidos"},{time:"16:00",activity:"Cabezada (30–45 min)"},{time:"17:00",activity:"Toma + juego"},{time:"19:00",activity:"Rutina de dormir + sueño"}], stimulation: ["Introduce primeros purés o baby-led weaning — todo un mundo sensorial nuevo","Práctica de sentarse sin apoyo — rodéalo de almohadas","Cucú-trás completo — desarrolla permanencia del objeto","Bandejas sensoriales: arroz, pasta, texturas seguras","Lengua de signos para bebés: 'más', 'leche', 'ya terminé'","Burbujas — el seguimiento visual desarrolla los ojos","Espejo en el suelo para exploración"] },
    7: { wakeWindows: "2.5–3 hrs", naps: "2–3 siestas/día", totalSleep: "~13–14 hrs/día", schedule: [{time:"7:00",activity:"Despertar + toma"},{time:"9:30",activity:"Siesta 1 (1–1.5 hrs)"},{time:"11:00",activity:"Toma + sólidos"},{time:"13:00",activity:"Siesta 2 (1–1.5 hrs)"},{time:"14:30",activity:"Toma + tiempo despierto"},{time:"16:30",activity:"Cabezada opcional"},{time:"17:30",activity:"Toma + juego tranquilo"},{time:"19:00",activity:"Rutina de dormir + sueño"}], stimulation: ["Preparación para gatear: juguete justo fuera de alcance en tiempo boca abajo","Golpear objetos juntos — ritmo y causa-efecto","Nombrar partes del cuerpo al vestirlo","Clasificadores de formas simples con 1–2 formas","Libros con solapas y texturas","Animar a ponerse de pie con apoyo","Vasos apilables — apilar, meter, tirar"] },
    8: { wakeWindows: "2.5–3.5 hrs", naps: "2 siestas/día", totalSleep: "~13–14 hrs/día", schedule: [{time:"7:00",activity:"Despertar + toma + sólidos"},{time:"9:30",activity:"Siesta 1 (1–1.5 hrs)"},{time:"11:00",activity:"Toma + tiempo despierto"},{time:"14:00",activity:"Siesta 2 (1–1.5 hrs)"},{time:"15:30",activity:"Toma + sólidos + juego"},{time:"18:00",activity:"Toma"},{time:"19:00",activity:"Rutina de dormir + sueño"}], stimulation: ["Gateo: túneles, juegos de persecución en el suelo","Instrumentos musicales: tambor, xilófono, sonajeros","Juego de tirar y recuperar","Juegos de imitación: palmadas, adiós","Esconder un juguete bajo un paño — permanencia del objeto completa","Exploración en arena o hierba","Puzzles simples con piezas grandes"] },
    9: { wakeWindows: "3–3.5 hrs", naps: "2 siestas/día", totalSleep: "~13 hrs/día", schedule: [{time:"7:00",activity:"Despertar + toma + sólidos"},{time:"9:30",activity:"Siesta 1 (1–1.5 hrs)"},{time:"11:00",activity:"Tiempo despierto + sólidos"},{time:"14:00",activity:"Siesta 2 (1 hr)"},{time:"15:00",activity:"Toma + juego"},{time:"17:30",activity:"Cena sólidos"},{time:"18:30",activity:"Toma"},{time:"19:00",activity:"Rutina de dormir + sueño"}], stimulation: ["Desplazarse por los muebles","Rodar la pelota de un lado al otro — turnos","Apilar y tirar torres","Libros con animales + sonidos: 'el perro dice guau'","Juego sensorial: pintura con dedos segura","Juegos de imitación: cepillarse el pelo, remover, teléfono de juguete","Bailar con música — el ritmo es excelente para el desarrollo cerebral"] },
    10: { wakeWindows: "3–4 hrs", naps: "2 siestas/día", totalSleep: "~12–13 hrs/día", schedule: [{time:"7:00",activity:"Despertar + toma + sólidos"},{time:"9:30",activity:"Siesta 1 (1–1.5 hrs)"},{time:"11:30",activity:"Despierto + sólidos"},{time:"14:00",activity:"Siesta 2 (1 hr)"},{time:"15:00",activity:"Juego + toma"},{time:"17:30",activity:"Cena sólidos"},{time:"18:30",activity:"Toma"},{time:"19:00",activity:"Rutina de dormir + sueño"}], stimulation: ["Clasificador de formas y puzzles simples","Introducir juego simbólico: darle de comer al muñeco","Exploración exterior — hojas, piedras, agua, arena","Señalar y nombrar: '¿dónde está la pelota?'","Torres de bloques para tirar","Libros que puede 'leer' él solo — pasar páginas","Canciones con movimiento, baile congelado"] },
    11: { wakeWindows: "3.5–4 hrs", naps: "2 siestas/día (puede pasar a 1)", totalSleep: "~12–13 hrs/día", schedule: [{time:"7:00",activity:"Despertar + toma + sólidos"},{time:"9:30",activity:"Siesta 1 (1–1.5 hrs)"},{time:"11:30",activity:"Despierto + sólidos almuerzo"},{time:"14:30",activity:"Siesta 2 (1 hr)"},{time:"15:30",activity:"Toma + juego activo"},{time:"17:30",activity:"Cena sólidos"},{time:"18:30",activity:"Toma"},{time:"19:00",activity:"Rutina de dormir + sueño"}], stimulation: ["Caminar de la mano — preparación para primeros pasos","Introduce ceras y papel grande — primeros trazos","Juego frente al espejo: nombrar partes del cuerpo","Juego al aire libre diario — diferentes superficies","Habilidades con pelota: patear, lanzar, rodar","Clasificación simple: 'pon los rojos aquí'","Juego simbólico: té, cocina, compras"] },
    12: { wakeWindows: "4–5 hrs", naps: "1–2 siestas/día", totalSleep: "~12–13 hrs/día", schedule: [{time:"7:00",activity:"Despertar + leche + sólidos desayuno"},{time:"9:30",activity:"Siesta 1 (1–1.5 hrs) si 2 siestas"},{time:"12:00",activity:"Sólidos almuerzo + leche"},{time:"14:00",activity:"Siesta (1.5–2 hrs si 1 siesta)"},{time:"16:00",activity:"Leche + juego activo"},{time:"17:30",activity:"Cena sólidos"},{time:"18:30",activity:"Leche"},{time:"19:00",activity:"Rutina de dormir + sueño"}], stimulation: ["Práctica de primeros pasos — carrito de empuje, de pie sin apoyo","Clasificador de formas y vasos anidables","Introduce plastilina (receta comestible para seguridad)","Libros con una palabra por página — puede empezar a señalar","Juguetes causa-efecto con botones y palancas","Cantar con acciones todo el día","Parque: tobogán, columpio, trepar","Deportes con pelota: patear, atrapar, rodar"] },
  },
};

const MOON = ["🌑","🌒","🌓","🌔","🌕","🌖","🌗"];
const SUN  = ["🌤","☀️","🌸","🌻","🌼","✨","🌿"];
const STORAGE_KEY = "mr_sleep_tracker_v2";

function loadStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}
function saveStorage(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
}

export default function SleepTracker() {
  const [lang, setLang]             = useState("en");
  const [isDayMode, setIsDayMode]   = useState(false);
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeDay, setActiveDay]   = useState(0);
  const [activeTab, setActiveTab]   = useState(0);
  const [babyMonth, setBabyMonth]   = useState(5);
  const [logData, setLogData]       = useState(loadStorage);

  // ─── MailerLite universal script ────────────────────────────────────────────


  // Small delay to ensure the DOM element is rendered
  const timer = setTimeout(initML, 500);
  return () => clearTimeout(timer);
}, []);

  const t      = T[lang];
  const weeks  = WEEKS_DATA[lang];
  const week   = weeks[activeWeek];
  const day    = week.days[activeDay];
  const globalDay = activeWeek * 7 + activeDay;
  const weekColor = isDayMode ? week.colorLight : week.colorDark;
  const routineMap = ROUTINES[lang];
  const routine    = routineMap[babyMonth] || routineMap[5];
  const logKey     = `${activeWeek}-${activeDay}`;
  const entry      = logData[logKey] || {};

  const updateField = (field, val) => {
    const updated = { ...logData, [logKey]: { ...entry, [field]: val } };
    setLogData(updated);
    saveStorage(updated);
  };

  const isComplete = (wi, di) => {
    const e = logData[`${wi}-${di}`] || {};
    return !!(e.settleTime || e.nightWakes || e.feeds);
  };

  const theme = isDayMode ? {
    bg: "#fdf8f2", bgCard: "#ffffff", bgInput: "#f8f2eb",
    border: "#e8d8c8", text: "#2d2016", textMuted: "#8a6e56",
    textSoft: "#6b5040", textBody: "#4a3828",
    progressEmpty: "rgba(0,0,0,0.07)",
    shadow: "0 2px 12px rgba(180,140,100,0.12)",
    weekBtn: "#f0e8df", icon: SUN[globalDay % 7],
  } : {
    bg: "#0f0e17", bgCard: "rgba(255,255,255,0.04)", bgInput: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.1)", text: "#fffbf5", textMuted: "#a89f8c",
    textSoft: "#c4b8a8", textBody: "#d4ccc0",
    progressEmpty: "rgba(255,255,255,0.06)",
    shadow: "none",
    weekBtn: "rgba(255,255,255,0.07)", icon: MOON[globalDay % 7],
  };

  const FIELDS = [
    { key: "bedtime",    label: t.fields.bedtime,    type: "time" },
    { key: "settleTime", label: t.fields.settleTime, type: "number", placeholder: t.placeholders.settleTime },
    { key: "pupdRounds", label: t.fields.pupdRounds, type: "number", placeholder: t.placeholders.pupdRounds },
    { key: "nightWakes", label: t.fields.nightWakes, type: "number", placeholder: t.placeholders.nightWakes },
    { key: "feeds",      label: t.fields.feeds,      type: "number", placeholder: t.placeholders.feeds },
    { key: "wakeTime",   label: t.fields.wakeTime,   type: "time" },
    { key: "notes",      label: t.fields.notes,      type: "text",   placeholder: t.placeholders.notes },
  ];

  const completedCount = Object.keys(logData).filter(k => {
    const [wi, di] = k.split("-").map(Number);
    return isComplete(wi, di);
  }).length;

  return (
    <div style={{ minHeight:"100vh", background:theme.bg, fontFamily:"'Georgia','Times New Roman',serif", color:theme.text, position:"relative", overflow:"hidden", transition:"background 0.4s ease" }}>

      {/* Background */}
      {isDayMode ? (
        <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", backgroundImage:`radial-gradient(ellipse at 80% 10%, ${weekColor}15 0%, transparent 50%), radial-gradient(ellipse at 10% 90%, ${weekColor}10 0%, transparent 50%)` }} />
      ) : (
        <>
          <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", backgroundImage:`radial-gradient(1.5px 1.5px at 10% 20%, rgba(255,251,245,0.6) 0%, transparent 100%), radial-gradient(1px 1px at 30% 60%, rgba(255,251,245,0.4) 0%, transparent 100%), radial-gradient(2px 2px at 55% 15%, rgba(255,251,245,0.5) 0%, transparent 100%), radial-gradient(1px 1px at 70% 75%, rgba(255,251,245,0.3) 0%, transparent 100%), radial-gradient(1.5px 1.5px at 85% 40%, rgba(255,251,245,0.6) 0%, transparent 100%)` }} />
          <div style={{ position:"fixed", top:"-120px", right:"-80px", width:"420px", height:"420px", background:`radial-gradient(circle, ${weekColor}22 0%, transparent 70%)`, borderRadius:"50%", zIndex:0, pointerEvents:"none" }} />
        </>
      )}

      <div style={{ position:"relative", zIndex:1, maxWidth:"520px", margin:"0 auto", padding:"28px 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:"24px", position:"relative" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"16px" }}>
            <div style={{ display:"flex", gap:"4px" }}>
              {["en","es"].map(l => (
                <button key={l} onClick={() => setLang(l)} style={{
                  padding:"5px 10px", border:"none", borderRadius:"8px", cursor:"pointer",
                  fontSize:"12px", fontFamily:"Georgia, serif", fontWeight: lang===l ? "700" : "400",
                  background: lang===l ? weekColor : theme.weekBtn,
                  color: lang===l ? (isDayMode ? "#fff" : "#0f0e17") : theme.textMuted,
                  transition:"all 0.2s",
                }}>{l.toUpperCase()}</button>
              ))}
            </div>
            <a href="https://mamaremoto.com/babysleeptracker" target="_blank" rel="noopener noreferrer" style={{ fontSize:"11px", color:theme.textMuted, textDecoration:"none", letterSpacing:"0.06em", opacity:0.8 }}>
              mamaremoto.com
            </a>
            <button onClick={() => setIsDayMode(!isDayMode)} style={{
              background: isDayMode ? "#fff8f0" : "rgba(255,255,255,0.1)",
              border: isDayMode ? "1px solid #e8d0b8" : "1px solid rgba(255,255,255,0.2)",
              borderRadius:"20px", padding:"5px 10px", cursor:"pointer",
              fontSize:"12px", color: isDayMode ? "#8a6e56" : "#fffbf5",
              transition:"all 0.3s ease",
            }}>
              {isDayMode ? `🌙 ${t.nightMode}` : `☀️ ${t.dayMode}`}
            </button>
          </div>
          <div style={{ fontSize:"44px", marginBottom:"4px", lineHeight:1 }}>{theme.icon}</div>
          <h1 style={{ fontSize:"24px", fontWeight:"400", letterSpacing:"0.04em", margin:"0 0 4px", fontStyle:"italic" }}>{t.appTitle}</h1>
          <p style={{ fontSize:"11px", color:theme.textMuted, margin:0, letterSpacing:"0.12em", textTransform:"uppercase" }}>{t.appSub}</p>
        </div>

        {/* Week tabs */}
        <div style={{ display:"flex", gap:"8px", marginBottom:"18px" }}>
          {weeks.map((w, wi) => {
            const wc = isDayMode ? w.colorLight : w.colorDark;
            return (
              <button key={wi} onClick={() => { setActiveWeek(wi); setActiveDay(0); }} style={{
                flex:1, padding:"9px 0", border:"none", cursor:"pointer",
                borderRadius:"12px", fontSize:"12px", fontFamily:"Georgia, serif",
                background: activeWeek===wi ? wc : theme.weekBtn,
                color: activeWeek===wi ? (isDayMode ? "#fff" : "#0f0e17") : theme.textMuted,
                fontWeight: activeWeek===wi ? "700" : "400",
                transition:"all 0.25s ease",
                boxShadow: activeWeek===wi && isDayMode ? `0 2px 8px ${wc}40` : "none",
              }}>{t.week} {w.week}</button>
            );
          })}
        </div>

        {/* Week focus */}
        <div style={{ background:`${weekColor}${isDayMode?"12":"18"}`, border:`1px solid ${weekColor}${isDayMode?"35":"40"}`, borderRadius:"16px", padding:"14px 18px", marginBottom:"18px", boxShadow:isDayMode?theme.shadow:"none" }}>
          <div style={{ fontSize:"11px", color:weekColor, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"3px" }}>{t.weekFocus} {week.week}</div>
          <div style={{ fontSize:"15px", fontStyle:"italic", marginBottom:"5px", color:theme.text }}>{week.title}</div>
          <div style={{ fontSize:"13px", color:theme.textSoft, lineHeight:1.6 }}>{week.focus}</div>
        </div>

        {/* Day selector */}
        <div style={{ display:"flex", gap:"6px", marginBottom:"18px", flexWrap:"wrap" }}>
          {week.days.map((d, di) => {
            const done = isComplete(activeWeek, di);
            const active = activeDay === di;
            return (
              <button key={di} onClick={() => setActiveDay(di)} style={{
                width:"46px", height:"46px", border:"none", cursor:"pointer",
                borderRadius:"12px", fontSize:"12px", fontFamily:"Georgia, serif",
                background: active ? weekColor : done ? `${weekColor}${isDayMode?"28":"35"}` : theme.weekBtn,
                color: active ? (isDayMode?"#fff":"#0f0e17") : theme.textMuted,
                fontWeight: active ? "700" : "400",
                position:"relative", transition:"all 0.2s ease",
                outline: active ? `2px solid ${weekColor}` : "none", outlineOffset:"2px",
                boxShadow: active && isDayMode ? `0 2px 8px ${weekColor}50` : "none",
              }}>
                {d.label.replace(/Day |Día /, "")}
                {done && !active && (
                  <span style={{ position:"absolute", top:"-4px", right:"-4px", width:"13px", height:"13px", borderRadius:"50%", background:weekColor, fontSize:"8px", display:"flex", alignItems:"center", justifyContent:"center", color:isDayMode?"#fff":"#0f0e17" }}>✓</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Inner tabs */}
        <div style={{ display:"flex", gap:"6px", marginBottom:"18px" }}>
          {[t.tab1, t.tab2, t.tab3].map((tb, i) => (
            <button key={i} onClick={() => setActiveTab(i)} style={{
              flex:1, padding:"8px 4px", border:"none", cursor:"pointer",
              borderRadius:"10px", fontSize:"10px", fontFamily:"Georgia, serif", letterSpacing:"0.03em",
              background: activeTab===i ? `${weekColor}${isDayMode?"18":"25"}` : isDayMode?"#f0e8df":"rgba(255,255,255,0.05)",
              color: activeTab===i ? weekColor : theme.textMuted,
              borderBottom: activeTab===i ? `2px solid ${weekColor}` : "2px solid transparent",
              transition:"all 0.2s",
            }}>{tb}</button>
          ))}
        </div>

        {/* TAB 1 */}
        {activeTab===0 && (
          <div style={{ background:theme.bgCard, borderRadius:"20px", border:`1px solid ${theme.border}`, padding:"22px", marginBottom:"18px", boxShadow:isDayMode?theme.shadow:"none" }}>
            <div style={{ fontSize:"17px", fontStyle:"italic", marginBottom:"18px", color:weekColor }}>{day.label} — {t.whatToDo}</div>
            <div style={{ display:"flex", flexDirection:"column", gap:"14px" }}>
              {day.steps.map((step, si) => (
                <div key={si} style={{ display:"flex", gap:"12px", alignItems:"flex-start" }}>
                  <div style={{ minWidth:"24px", height:"24px", borderRadius:"50%", background:`${weekColor}${isDayMode?"18":"25"}`, border:`1px solid ${weekColor}${isDayMode?"50":"60"}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"11px", color:weekColor, fontWeight:"700", flexShrink:0 }}>{si+1}</div>
                  <div style={{ fontSize:"13px", color:theme.textBody, lineHeight:1.75, paddingTop:"3px" }}>{step}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop:"20px", padding:"12px 14px", background:isDayMode?`${weekColor}0e`:"rgba(255,255,255,0.03)", borderRadius:"10px", borderLeft:`3px solid ${weekColor}` }}>
              <div style={{ fontSize:"10px", color:theme.textMuted, marginBottom:"3px", textTransform:"uppercase", letterSpacing:"0.1em" }}>{t.weekReminder}</div>
              <div style={{ fontSize:"12px", color:theme.textSoft, fontStyle:"italic", lineHeight:1.6 }}>"{week.tip}"</div>
            </div>
          </div>
        )}

        {/* TAB 2 */}
        {activeTab===1 && (
          <div style={{ background:theme.bgCard, borderRadius:"20px", border:`1px solid ${theme.border}`, padding:"22px", marginBottom:"18px", boxShadow:isDayMode?theme.shadow:"none" }}>
            <div style={{ fontSize:"17px", fontStyle:"italic", marginBottom:"6px", color:weekColor }}>{day.label} — {t.nightLog}</div>
            <div style={{ fontSize:"11px", color:theme.textMuted, marginBottom:"18px", letterSpacing:"0.06em" }}>✦ auto-saves as you type</div>
            <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
              {FIELDS.map(({ key:fk, label, type, placeholder }) => (
                <div key={fk} style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                  <label style={{ fontSize:"10px", color:theme.textMuted, textTransform:"uppercase", letterSpacing:"0.1em", minWidth:"96px" }}>{label}</label>
                  <input
                    type={type} value={entry[fk]||""} onChange={e => updateField(fk, e.target.value)}
                    placeholder={placeholder||""}
                    style={{ flex:1, background:theme.bgInput, border:`1px solid ${theme.border}`, borderRadius:"10px", padding:"9px 12px", color:theme.text, fontSize:"13px", fontFamily:"Georgia, serif", outline:"none" }}
                    onFocus={e => e.target.style.borderColor = weekColor}
                    onBlur={e => e.target.style.borderColor = theme.border}
                  />
                </div>
              ))}
            </div>
            <div style={{ marginTop:"16px", padding:"10px 12px", background:`${weekColor}10`, borderRadius:"10px", fontSize:"11px", color:weekColor, display:"flex", alignItems:"center", gap:"6px" }}>
              <span>✓</span> {t.saved} — data stored locally on this device
            </div>
          </div>
        )}

        {/* TAB 3 */}
        {activeTab===2 && (
          <div style={{ marginBottom:"18px" }}>
            <div style={{ background:theme.bgCard, borderRadius:"16px", border:`1px solid ${theme.border}`, padding:"16px 18px", marginBottom:"14px", boxShadow:isDayMode?theme.shadow:"none" }}>
              <div style={{ fontSize:"11px", color:theme.textMuted, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"10px" }}>{t.babyAge}</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"5px" }}>
                {Array.from({length:12},(_,i)=>i+1).map(m => (
                  <button key={m} onClick={() => setBabyMonth(m)} style={{ width:"36px", height:"36px", borderRadius:"10px", border:"none", cursor:"pointer", fontSize:"12px", fontFamily:"Georgia, serif", background: babyMonth===m ? weekColor : theme.weekBtn, color: babyMonth===m ? (isDayMode?"#fff":"#0f0e17") : theme.textMuted, fontWeight: babyMonth===m?"700":"400", transition:"all 0.2s", boxShadow: babyMonth===m && isDayMode ? `0 2px 8px ${weekColor}40` : "none" }}>{m}</button>
                ))}
              </div>
            </div>

            <div style={{ display:"flex", gap:"8px", marginBottom:"14px" }}>
              {[{label:"wake windows",value:routine.wakeWindows},{label:"naps",value:routine.naps},{label:"total sleep",value:routine.totalSleep}].map((stat,i) => (
                <div key={i} style={{ flex:1, background:theme.bgCard, borderRadius:"12px", border:`1px solid ${theme.border}`, padding:"10px 6px", textAlign:"center", boxShadow:isDayMode?theme.shadow:"none" }}>
                  <div style={{ fontSize:"11px", color:weekColor, fontWeight:"700", marginBottom:"3px" }}>{stat.value}</div>
                  <div style={{ fontSize:"9px", color:theme.textMuted, textTransform:"uppercase", letterSpacing:"0.06em", lineHeight:1.3 }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div style={{ background:theme.bgCard, borderRadius:"16px", border:`1px solid ${theme.border}`, padding:"18px", marginBottom:"14px", boxShadow:isDayMode?theme.shadow:"none" }}>
              <div style={{ fontSize:"13px", color:weekColor, marginBottom:"14px", fontStyle:"italic" }}>{t.sampleSchedule} — Month {babyMonth}</div>
              <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
                {routine.schedule.map((item,i) => (
                  <div key={i} style={{ display:"flex", gap:"10px", alignItems:"center" }}>
                    <div style={{ fontSize:"10px", color:weekColor, minWidth:"58px", fontWeight:"700", letterSpacing:"0.04em" }}>{item.time}</div>
                    <div style={{ width:"1px", height:"16px", background:`${weekColor}40`, flexShrink:0 }} />
                    <div style={{ fontSize:"12px", color:theme.textBody, lineHeight:1.5 }}>{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background:theme.bgCard, borderRadius:"16px", border:`1px solid ${theme.border}`, padding:"18px", boxShadow:isDayMode?theme.shadow:"none" }}>
              <div style={{ fontSize:"13px", color:weekColor, marginBottom:"14px", fontStyle:"italic" }}>{t.stimTitle} — Month {babyMonth}</div>
              <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
                {routine.stimulation.map((act,i) => (
                  <div key={i} style={{ display:"flex", gap:"10px", alignItems:"flex-start" }}>
                    <div style={{ fontSize:"12px", color:weekColor, marginTop:"2px", flexShrink:0 }}>✦</div>
                    <div style={{ fontSize:"12px", color:theme.textBody, lineHeight:1.7 }}>{act}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Progress */}
        <div style={{ marginTop:"6px", marginBottom:"20px" }}>
          <div style={{ fontSize:"10px", color:theme.textMuted, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"10px" }}>{t.progress}</div>
          <div style={{ display:"flex", gap:"4px", flexWrap:"wrap" }}>
            {weeks.map((w,wi) => w.days.map((_,di) => {
              const done = isComplete(wi,di);
              const isCurrent = wi===activeWeek && di===activeDay;
              const wc = isDayMode ? w.colorLight : w.colorDark;
              return <div key={`${wi}-${di}`} style={{ width:"18px", height:"18px", borderRadius:"5px", background: isCurrent?wc:done?`${wc}${isDayMode?"65":"80"}`:theme.progressEmpty, border:isCurrent?`2px solid ${wc}`:"none", transition:"all 0.2s" }} />;
            }))}
          </div>
          <div style={{ fontSize:"11px", color:theme.textMuted, marginTop:"8px" }}>{completedCount} of 21 {t.nightsLogged}</div>
        </div>

        {/* Mama Remoto promo — embedded MailerLite form */}
        <div style={{ background:isDayMode?"#fff8f2":"rgba(196,144,124,0.08)", border:`1px solid ${isDayMode?"#e8c8b0":"rgba(196,144,124,0.2)"}`, borderRadius:"16px", padding:"16px 18px", textAlign:"center" }}>
          <div style={{ fontSize:"11px", color:theme.textMuted, marginBottom:"4px" }}>{t.freeTag} <strong style={{ color:"#C4907C" }}>Mamá Remoto</strong></div>
          <div style={{ fontSize:"15px", fontFamily:"Georgia, serif", fontWeight:"600", color:"#C4907C", marginBottom:"4px" }}>
            🌙 The Sleep Guide is coming
          </div>
          <div style={{ fontSize:"12px", color:theme.textMuted, marginBottom:"14px" }}>
            Join the waitlist — early access + launch discount
          </div>
          <div className="ml-embedded" data-form="Nq1INH"></div>
        </div>

      </div>
    </div>
  );
}
