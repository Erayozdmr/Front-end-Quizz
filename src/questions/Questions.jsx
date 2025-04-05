const Questions = [
  {
    tag: "HTML",
    id: 1,
    question: "HTML de BOŞLUK bırakmak için kullanılan  etiket hangisidir ?",
    reply: ["<div>", "<p>", "<br>", "<h1>"],
    sucsess: "<br>",
  },
  {
    tag: "HTML",
    id: 2,
    question:
      "HTML5 ile gelen yeni semantik elementlerden hangisi doğru değildir?",
    reply: ["<article>", "<section>", "<footer>", "<font>"],
    sucsess: "<font>",
  },
  {
    tag: "HTML",
    id: 3,
    question:
      "HTML'de hangi etiket, bir bağlantının sayfa dışında bir kaynağa işaret etmesini sağlar?",
    reply: ["<a>", "<link>", "<img>", "<button>"],
    sucsess: "<a>",
  },
  {
    tag: "HTML",
    id: 4,
    question:
      "HTML'de form elementleri içinde hangi etiketi kullanarak kullanıcıdan gizli bilgi alırsınız?",
    reply: [
      "<input type=password>",
      "<input type=text>",
      "<textarea>",
      "<input type=email>",
    ],
    sucsess: "<input type=password>",
  },
  {
    tag: "HTML",
    id: 5,
    question:
      "HTML'de, sayfada bir bağlantıyı yeni bir sekmede açmak için hangi özellik kullanılır?",
    reply: ["target=_new", "target=_blank", "target=new", "target=_top"],
    sucsess: "target=_blank",
  },
  {
    tag: "CSS",
    id: 6,
    question:
      "CSS'de bir öğeye, tüm kenarları için 1px genişliğinde ve siyah renkli bir kenarlık vermek için hangi stil yazılır?",
    reply: [
      "border: 1px solid black;",
      "border-width: 1px; border-color: black;",
      "border-style: solid; border-width: 1px;",
      "border: 1px dashed black;",
    ],
    sucsess: "border: 1px solid black;",
  },
  {
    tag: "CSS",
    id: 7,
    question: "CSS'de z-index özelliği neyi kontrol eder?",
    reply: [
      " Bir öğenin boyutlarını",
      "Bir öğenin animasyon hızını",
      "Bir öğenin yığılma sırasını",
      "Bir öğenin renk geçişlerini",
    ],
    sucsess: "Bir öğenin yığılma sırasını",
  },
  {
    tag: "CSS",
    id: 8,
    question:
      "CSS'de, belirli bir öğenin yalnızca içeriğini değil, çevresindeki boşluğu da hizalamak için hangi özelliği kullanırsınız?",
    reply: ["text-align", "margin", "padding", "position"],
    sucsess: "margin",
  },
  {
    tag: "CSS",
    id: 9,
    question:
      "CSS Flexbox'ta, öğelerin satırlar halinde sıralanmasını sağlamak için hangi değeri kullanırsınız?",
    reply: [
      "flex-direction: column;",
      "flex-direction: row;",
      "align-items: center;",
      "justify-content: space-between;",
    ],
    sucsess: "flex-direction: row;",
  },
  {
    tag: "CSS",
    id: 10,
    question:
      "CSS'de animasyon gerçekleşme sürecini ayarladığımız kod hangisidir?",
    reply: ["transition", "duration", "color", "scale"],
    sucsess: "transition",
  },
  {
    tag: "JS",
    id: 11,
    question: "let a = 5 let b = 5 console.log(a == b)",

    reply: ["ture", "false", "undefined", "NaN"],
    sucsess: "true",
  },
  {
    tag: "JS",
    id: 12,
    question:
      "function sayHello(name) { return Hello, ${name}!} console.log(sayHello(John))",
    reply: [
      "Hello, John!",
      "Hello, undefined!",
      "Hello, ${name}!",
      "undefined",
    ],
    sucsess: "Hello, John!",
  },
  {
    tag: "JS",
    id: 13,
    question: " let x = Hello World; console.log(typeof x);",
    reply: ["string", "object", "number", "undefined"],
    sucsess: "string",
  },
  {
    tag: "JS",
    id: 14,
    question:
      "JavaScript'te hangi operatör, nesnelerin eşitliğini karşılaştırırken referans eşitliğine bakar?",
    reply: ["==", "===", "!=", "!=="],
    sucsess: "===",
  },
  {
    tag: "JS",
    id: 15,
    question:
      "let a = 10 let b = 5; function add() {  a = a + b; } add(); console.log(a);",
    reply: ["15", "5", "10", "undefined"],
    sucsess: "15",
  },

  {
    tag: "REACT",
    id: 16,
    question:
      "Bir React uygulamasında, App.js dosyası genellikle hangi amaçla kullanılır?",
    reply: [
      "Uygulamanın başlatılmasını sağlamak",
      "Veritabanı bağlantısı kurmak",
      "Uygulama stil dosyalarını yönetmek",
      "Uygulamanın ana bileşenini tanımlamak",
    ],
    sucsess: "Uygulamanın ana bileşenini tanımlamak",
  },
  {
    tag: "REACT",
    id: 17,
    question:
      "Aşağıdaki dosya yapılarından hangisi, modern bir front-end React uygulamasına en uygun yapıyı temsil eder?",
    reply: [
      "index.html, index.js, styles.css",
      "src/components/App.js, src/styles/App.css, public/index.html",
      "app.js, components/index.js, assets/style.css",
      "index.html, app.js, images/logo.png",
    ],
    sucsess: "src/components/App.js, src/styles/App.css, public/index.html",
  },
  {
    tag: "REACT",
    id: 18,
    question:
      "Bir front-end projesinde, genellikle hangi dosya türü komponentlerin görsel ve işlevsel stilini tanımlamak için kullanılır?",
    reply: [".html", ".js", ".scss veya .css", ".json"],
    sucsess: ".scss veya .css",
  },
  {
    tag: "REACT",
    id: 19,
    question:
      "Bir front-end projede, componentler arasındaki veri iletimini sağlamak için en yaygın kullanılan yöntem nedir?",
    reply: [
      "Veritabanı sorguları",
      " JavaScript event listenerları",
      "Props ve State kullanımı",
      "Doğrudan global değişkenler",
    ],
    sucsess: "Props ve State kullanımı",
  },
  {
    tag: "REACT",
    id: 20,
    question:
      "Aşağıdakilerden hangisi front-end uygulamalarında doğru dosya yapılarını yönetmek için yaygın bir uygulamadır?",
    reply: [
      "Her komponenti tek bir dosya içinde yazmak",
      "Görsel ve stil dosyalarını JavaScript dosyalarından ayrı tutmak",
      "Componentleri ve stil dosyalarını aynı dosyada birleştirmek",
      "Componentleri her sayfa için ayrı bir dosyaya koymak",
    ],
    sucsess: "Görsel ve stil dosyalarını JavaScript dosyalarından ayrı tutmak",
  },
];
export default Questions;
