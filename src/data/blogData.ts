export interface Author {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  articles: number;
  tag: string;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  authorId: number;
  featured?: boolean;
  coverGradient: string;
}

export const authors: Author[] = [
  {
    id: 1,
    name: 'Александра Нова',
    role: 'Главный редактор',
    bio: 'Журналист с пятнадцатилетним опытом. Пишет о культуре, искусстве и городской среде. Верит, что каждый текст — это маленькая архитектура.',
    avatar: 'https://cdn.poehali.dev/projects/a0e31265-06a4-45ca-b9b1-285181e9c15c/files/97ccf219-4096-434a-bf10-aa3640276488.jpg',
    articles: 84,
    tag: 'Культура',
  },
  {
    id: 2,
    name: 'Илья Северов',
    role: 'Технический обозреватель',
    bio: 'Разработчик, ставший писателем. Рассказывает о технологиях так, чтобы их полюбил каждый — от инженера до домохозяйки.',
    avatar: 'https://cdn.poehali.dev/projects/a0e31265-06a4-45ca-b9b1-285181e9c15c/files/97ccf219-4096-434a-bf10-aa3640276488.jpg',
    articles: 62,
    tag: 'Технологии',
  },
  {
    id: 3,
    name: 'Мария Зенит',
    role: 'Колумнист',
    bio: 'Философ и путешественник. Три года жила в Токио, год — в Лиссабоне. Её тексты — это попытка понять мир через детали.',
    avatar: 'https://cdn.poehali.dev/projects/a0e31265-06a4-45ca-b9b1-285181e9c15c/files/97ccf219-4096-434a-bf10-aa3640276488.jpg',
    articles: 47,
    tag: 'Философия',
  },
  {
    id: 4,
    name: 'Роман Таль',
    role: 'Фотограф и автор',
    bio: 'Документалист. Его работы публиковались в National Geographic и Le Monde. Считает, что лучший текст — тот, который вы не написали.',
    avatar: 'https://cdn.poehali.dev/projects/a0e31265-06a4-45ca-b9b1-285181e9c15c/files/97ccf219-4096-434a-bf10-aa3640276488.jpg',
    articles: 31,
    tag: 'Документальное',
  },
];

export const articles: Article[] = [
  {
    id: 1,
    title: 'Архитектура тишины: как пустые пространства формируют нас',
    excerpt: 'Японцы называют это «ма» — промежуток между звуками, между словами, между движениями. Именно в этих паузах живёт смысл.',
    category: 'Культура',
    readTime: '7 мин',
    date: '28 апреля 2026',
    authorId: 1,
    featured: true,
    coverGradient: 'from-[#1a1a2e] via-[#16213e] to-[#0f3460]',
  },
  {
    id: 2,
    title: 'Почему искусственный интеллект не заменит редактора',
    excerpt: 'Машина может написать тысячу слов за секунду. Но она не знает, что значит сидеть ночью с чашкой остывшего кофе и искать единственное верное слово.',
    category: 'Технологии',
    readTime: '5 мин',
    date: '24 апреля 2026',
    authorId: 2,
    coverGradient: 'from-[#0d0d0d] via-[#1a0a2e] to-[#2d1b69]',
  },
  {
    id: 3,
    title: 'Токио в 5 утра: репортаж из города, который никогда не спит',
    excerpt: 'Мегаполис разный в зависимости от часа. Токийское утро — это особая реальность, где городские ритмы обнажаются.',
    category: 'Путешествия',
    readTime: '9 мин',
    date: '19 апреля 2026',
    authorId: 3,
    coverGradient: 'from-[#0a1628] via-[#0d2137] to-[#1a3a5c]',
  },
  {
    id: 4,
    title: 'Фотография как акт замедления',
    excerpt: 'В мире бесконечных Stories и Reels документальная фотография остаётся последним убежищем медленного взгляда.',
    category: 'Искусство',
    readTime: '6 мин',
    date: '15 апреля 2026',
    authorId: 4,
    coverGradient: 'from-[#1c0a00] via-[#2d1500] to-[#3d2000]',
  },
  {
    id: 5,
    title: 'Язык как дом: что теряется при переводе',
    excerpt: 'Некоторые слова непереводимы не потому, что у других языков нет эквивалента — а потому что за ними стоит целый мир.',
    category: 'Философия',
    readTime: '8 мин',
    date: '10 апреля 2026',
    authorId: 1,
    coverGradient: 'from-[#0a1a0a] via-[#0d2a0d] to-[#1a3d1a]',
  },
  {
    id: 6,
    title: 'Почему мы храним вещи, которые не используем',
    excerpt: 'Психология хранения — это психология идентичности. Каждый предмет на полке — это нарратив о том, кем мы хотим себя видеть.',
    category: 'Психология',
    readTime: '5 мин',
    date: '5 апреля 2026',
    authorId: 3,
    coverGradient: 'from-[#1a1a0a] via-[#2a2a0d] to-[#3d3d1a]',
  },
];
