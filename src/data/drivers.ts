export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Driver {
  id: string;
  name: string;
  fullName: string;
  birthDate: string;
  birthPlace: string;
  nationality: string;
  number: string;
  championships: number;
  wins: number;
  poles: number;
  quote: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
    textGradient: string;
  };
  biography: string;
  timeline: TimelineEvent[];
  opinions: {
    byFans: string;
    byExperts: string;
    legacy: string;
  };
  emoji: string;
}

export const drivers: Driver[] = [
  {
    id: "senna",
    name: "Ayrton Senna",
    fullName: "Ayrton Senna da Silva",
    birthDate: "21 de Março, 1960",
    birthPlace: "São Paulo, Brasil",
    nationality: "Brasileiro",
    number: "12",
    championships: 3,
    wins: 41,
    poles: 65,
    quote: '"Se você não vai à luta pelo segundo lugar, então não arrange desculpas para não vencer."',
    colors: {
      primary: "#FFD700",
      secondary: "#009C3B",
      accent: "#FF6B00",
      bg: "#0a0a0a",
      textGradient: "from-yellow-400 to-green-400",
    },
    biography:
      "Ayrton Senna da Silva nasceu em São Paulo em 1960 e desde cedo mostrou um talento excepcional pelo automobilismo. Aos 4 anos já pilotava karts, e aos 13 começou a competir oficialmente. Sua carreira foi marcada por uma determinação incomparável, uma espiritualidade profunda e um talento sobrenatural, especialmente em pistas molhadas. Senna transcendeu o esporte e tornou-se um símbolo de excelência, paixão e generosidade, deixando um legado que inspira gerações até hoje.",
    timeline: [
      {
        year: "1960",
        title: "Nascimento",
        description:
          "Nasce em 21 de março em São Paulo, Brasil. Desde criança demonstra fascínio por automóveis.",
      },
      {
        year: "1973",
        title: "Início no Kart",
        description:
          "Começa a competir oficialmente no kartismo aos 13 anos, vencendo o Sul-Americano de Kart.",
      },
      {
        year: "1981",
        title: "Europa e Fórmula Ford",
        description:
          "Muda-se para a Inglaterra para competir na Fórmula Ford 1600, dominando a categoria.",
      },
      {
        year: "1984",
        title: "Estreia na F1",
        description:
          "Estreia na Fórmula 1 pela equipe Toleth. No GP de Mônaco, sob chuva, mostra seu genial talento ao quase vencer.",
      },
      {
        year: "1985",
        title: "Primeira Vitória",
        description:
          "Conquista sua primeira vitória na F1 no GP de Portugal em Estoril, sob chuva intensa, demonstrando seu domínio em condições adversas.",
      },
      {
        year: "1988",
        title: "Primeiro Título Mundial",
        description:
          "Vence seu primeiro Campeonato Mundial com a McLaren, iniciando uma era dominante ao lado de Alain Prost.",
      },
      {
        year: "1990",
        title: "Bicampeão",
        description:
          "Conquista o segundo título mundial em uma temporada intensa, com a rivalidade com Prost no auge.",
      },
      {
        year: "1991",
        title: "Tricampeão",
        description:
          "Vence o terceiro título mundial com uma vitória épica no GP do Brasil, em Interlagos, com apenas uma marcha funcionando.",
      },
      {
        year: "1994",
        title: "O Adeus",
        description:
          "Em 1º de maio, durante o GP de San Marino em Ímola, Senna sofre um acidente fatal. O mundo perde um dos maiores atletas de todos os tempos.",
      },
    ],
    opinions: {
      byFans:
        "Para os fãs, Senna não foi apenas um piloto — foi um herói nacional. Sua garra, determinação e emoção dentro e fora das pistas conquistaram corações no mundo inteiro. O brasileiro o carrega como símbolo de orgulho e superação.",
      byExperts:
        "Especialistas consideram Senna como um dos maiores talentos da história da F1. Sua capacidade de extrair velocidade em condições extremas, especialmente na chuva, era sobrenatural. Sua técnica de qualificação era impecável e seu ritmo de corrida, implacável.",
      legacy:
        "O legado de Senna vai muito além das pistas. O Instituto Ayrton Senna, fundado por sua família, já beneficiou milhões de crianças no Brasil. Ele mostrou que um atleta pode ser competitivo e generoso ao mesmo tempo.",
    },
    emoji: "🇧🇷",
  },
  {
    id: "hamilton",
    name: "Lewis Hamilton",
    fullName: "Lewis Carl Davidson Hamilton",
    birthDate: "7 de Janeiro, 1985",
    birthPlace: "Stevenage, Inglaterra",
    nationality: "Britânico",
    number: "44",
    championships: 7,
    wins: 105,
    poles: 104,
    quote: '"Ainda estou subindo. Ainda tenho muito a provar. Ainda tenho fogo por dentro."',
    colors: {
      primary: "#00D2BE",
      secondary: "#C0C0C0",
      accent: "#6F42C1",
      bg: "#0a0a0a",
      textGradient: "from-teal-400 to-purple-400",
    },
    biography:
      "Lewis Hamilton nasceu em Stevenage, Inglaterra, e desde muito jovem demonstrou um talento raro. Aos 8 anos começou no kart, e aos 13 foi contratado pelo programa de desenvolvimento da McLaren. Sua ascensão meteórica o levou a quebrar praticamente todos os recordes da Fórmula 1. Sete títulos mundiais, mais de 100 vitórias e um impacto cultural que transcende o esporte fazem de Hamilton um dos atletas mais influentes do século XXI.",
    timeline: [
      {
        year: "1985",
        title: "Nascimento",
        description:
          "Nasce em 7 de janeiro em Stevenage, Hertfordshire. Filho de um pai grenadino e uma mãe britânica.",
      },
      {
        year: "1993",
        title: "Início no Kart",
        description:
          "Começa no kartismo aos 8 anos. Rapidamente se destaca, vencendo campeonatos nacionais e internacionais.",
      },
      {
        year: "1998",
        title: "Contratado pela McLaren",
        description:
          "Aos 13 anos, assina com o programa de desenvolvimento de jovens pilotos da McLaren, um feito histórico.",
      },
      {
        year: "2007",
        title: "Estreia na F1",
        description:
          "Estreia pela McLaren e termina sua primeira temporada empatado em pontos com o companheiro Fernando Alonso, perdendo o título por um ponto.",
      },
      {
        year: "2008",
        title: "Primeiro Título",
        description:
          "Conquista seu primeiro campeonato mundial aos 23 anos, tornando-se o mais jovem campeão da época, com uma ultrapassagem dramática na última volta do GP do Brasil.",
      },
      {
        year: "2013",
        title: "Mudança para Mercedes",
        description:
          "Surpreende o mundo ao deixar a McLaren e juntar-se à Mercedes, uma decisão que mudaria a história da F1.",
      },
      {
        year: "2014-2015",
        title: "Domição da Era Híbrida",
        description:
          "Vence os campeonatos de 2014 e 2015, estabelecendo a Mercedes como a força dominante da era dos motores turbo-híbridos.",
      },
      {
        year: "2017-2020",
        title: "Quatro Títulos Consecutivos",
        description:
          "Vence quatro campeonatos consecutivos, igualando os recordes de Michael Schumacher de 7 títulos e 91 vitórias.",
      },
      {
        year: "2021",
        title: "Controvérsia em Abu Dhabi",
        description:
          "Perde o título de forma controversa na última corrida em Abu Dhabi, após uma decisão polêmica do diretor de prova. Uma das temporadas mais dramáticas da história.",
      },
      {
        year: "2024",
        title: "Mudança para Ferrari",
        description:
          "Anuncia sua transferência para a Ferrari a partir de 2025, realizando o sonho de vestir o vermelho e buscando o 8º título.",
      },
    ],
    opinions: {
      byFans:
        "Hamilton é polarizador: idolatrado por milhões como um pioneiro e quebrador de barreiras, e criticado por outros. Seus fãs o veem como o maior de todos os tempos, não apenas pelos números, mas pela forma como transformou a F1 em uma plataforma para mudança social.",
      byExperts:
        "Especialistas reconhecem Hamilton como um dos pilotos mais completos da história. Sua consistência, velocidade em qualificação e capacidade de gerenciar corridas são excepcionais. O recorde de vitórias e poles fala por si.",
      legacy:
        "O impacto de Hamilton vai além das pistas. Ele abriu portas para a diversidade na F1, lutou contra o racismo e tornou-se um ícone cultural. Sua voz sobre questões ambientais e sociais redifiniu o papel do atleta moderno.",
    },
    emoji: "🇬🇧",
  },
  {
    id: "leclerc",
    name: "Charles Leclerc",
    fullName: "Charles Marc Hervé Perceval Leclerc",
    birthDate: "16 de Outubro, 1997",
    birthPlace: "Monte Carlo, Mônaco",
    nationality: "Monegasco",
    number: "16",
    championships: 0,
    wins: 8,
    poles: 26,
    quote: '"Acredito nos meus sonhos e luto por eles todos os dias. É isso que me faz ir mais rápido."',
    colors: {
      primary: "#DC0000",
      secondary: "#FFF200",
      accent: "#270000",
      bg: "#0a0a0a",
      textGradient: "from-red-500 to-yellow-400",
    },
    biography:
      "Charles Leclerc nasceu em Monte Carlo, no Principado de Mônaco, em 1997. Cresceu nas ruas que abrigam o circuito mais famoso da Fórmula 1. Desde cedo mostrou um talento refinado e uma maturidade impressionante. Sua trajetória foi marcada pela tragédia com a perda do padrinho Jules Bianchi e do pai Hervé, mas Charles transformou a dor em motivação. Hoje é a grande esperança da Ferrari e um dos talentos mais brilhantes da nova geração.",
    timeline: [
      {
        year: "1997",
        title: "Nascimento",
        description:
          "Nasce em 16 de outubro em Monte Carlo, Mônaco. Cresce rodeado pelo glamour e pela paixão do automobilismo monegasco.",
      },
      {
        year: "2005",
        title: "Início no Kart",
        description:
          "Começa a competir no kartismo aos 8 anos, rapidamente chamando atenção pelo talento natural e precisão nas curvas.",
      },
      {
        year: "2014",
        title: "Tragédia e Motivação",
        description:
          "Seu padrinho e mentor Jules Bianchi sofre um acidente fatal durante o GP do Japão. Charles promete honrar seu legado.",
      },
      {
        year: "2016",
        title: "Campeão da GP3",
        description:
          "Vence o campeonato de GP3 com Prema Racing, mostrando dominância na categoria de acesso à F1.",
      },
      {
        year: "2017",
        title: "Campeão da F2",
        description:
          "Sagra-se campeão da Fórmula 2 no ano de estreia, confirmando seu status como um dos maiores talentos jovens.",
      },
      {
        year: "2018",
        title: "Estreia na F1",
        description:
          "Estreia pela Sauber (Alfa Romeo) e impressiona com atuações destacadas, marcando pontos regularmente.",
      },
      {
        year: "2019",
        title: "Ferrari e Primeira Vitória",
        description:
          "É promovido à Ferrari, substituindo Kimi Räikkönen. Vence seu primeiro GP na Bélgica, seguido pela vitória emocionante em Monza diante da torcida italiana.",
      },
      {
        year: "2019",
        title: "Vitória em Monza",
        description:
          "Vence o GP da Itália em Monza, quebrando um jejum de 9 anos sem vitória da Ferrari em sua casa. Momento histórico.",
      },
      {
        year: "2022",
        title: "Luta pelo Título",
        description:
          "Começa a temporada como líder do campeonato, vencendo corridas como Bahrain e Austrália, mas a Ferrari perde o rumo estratégico.",
      },
      {
        year: "2024",
        title: "Vitória em Mônaco",
        description:
          "Conquista a vitória mais especial de sua carreira: o GP de Mônaco, em casa, realizando o sonho de infância. Uma vitória emocionante que define sua carreira.",
      },
    ],
    opinions: {
      byFans:
        "Leclerc é adorado pela torcida da Ferrari — a 'tifoseria' — que o vê como o piloto perfeito para devolver a equipe ao topo. Sua juventude, carisma e velocidade fizeram dele um dos favoritos dos fãs da nova geração.",
      byExperts:
        "Especialistas consideram Leclerc um dos melhores qualificadores da atualidade. Sua velocidade em uma volta rápida é comparável à de Senna e Hamilton. O desafio é transformar essa velocidade em consistência durante as corridas.",
      legacy:
        "Ainda no auge de sua carreira, Leclerc já é visto como o futuro da Ferrari. Sua capacidade de extrair o máximo de carros nem sempre competitivos demonstra um talento raro. Se conquistar um título mundial, pode entrar para a história como um dos maiores.",
    },
    emoji: "🇲🇨",
  },
];
