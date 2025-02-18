import { Icons } from "../assets/icons";
import { Images } from "../assets/images";

export const GENRES = [
  {
    id: "genre_1",
    thumbnail: Images.Genre1,
    name: "Action",
  },
  {
    id: "genre_2",
    thumbnail: Images.Genre2,
    name: "Adventure",
  },
  {
    id: "genre_3",
    thumbnail: Images.Genre3,
    name: "Comedy",
  },
  {
    id: "genre_4",
    thumbnail: Images.Genre4,
    name: "Drama",
  },
  {
    id: "genre_5",
    thumbnail: Images.Genre5,
    name: "Horror",
  },
];

export const STREAM_DEVICES = [
  {
    id: "stream_dev_1",
    device_name: "Smartphone",
    icon: Icons.SmartphoneRed,
    description:
      "StreamVibe telah dioptimalkan untuk ponsel Android dan iOS. Unduh aplikasi kami dari Google Play Store atau Apple App Store.",
  },
  {
    id: "stream_dev_2",
    device_name: "Tablet",
    icon: Icons.TabletRed,
    description:
      "Dengan StreamVibe, tablet Anda menjadi pusat hiburan portabel yang siap menemani kapan saja.",
  },
  {
    id: "stream_dev_3",
    device_name: "Smart TV",
    icon: Icons.SmartTVRed,
    description:
      "StreamVibe dioptimalkan untuk Smart TV, memberikan pengalaman menonton layar lebar yang memukau.",
  },
  {
    id: "stream_dev_4",
    device_name: "Laptops",
    icon: Icons.LaptopRed,
    description:
      "StreamVibe hadir dengan dukungan penuh untuk laptop, memastikan kualitas streaming yang lancar dan jernih.",
  },
  {
    id: "stream_dev_5",
    device_name: "Gaming Console",
    icon: Icons.ConsoleRed,
    description:
      "Dengan StreamVibe, gaming console Anda tidak hanya untuk bermain game, tetapi juga menjadi pusat hiburan lengkap.",
  },
  {
    id: "stream_dev_6",
    device_name: "VR Headsets ",
    icon: Icons.VRSetsRed,
    description:
      "StreamVibe juga dioptimalkan untuk VR Headsets, memberikan pengalaman menonton yang imersif dan mendalam",
  },
];

export const FAQS = [
  {
    id: "faq_1",
    question: "Apa itu StreamVibe?",
    answer:
      "StreamVibe adalah layanan streaming yang memungkinkan Anda menonton film dan acara TV sesuai permintaan.",
  },
  {
    id: "faq_2",
    question: "Berapa biaya StreamVibe?",
    answer:
      "StreamVibe gratis selama 1 bulan pertama. Setelah itu, Anda dapat mengambil langganan tahunan dengan biaya hanya $200 per tahun. Ada juga layanan super premium yang memungkinkan hingga 5 pengguna berbeda dengan biaya hanya $359.",
  },
  {
    id: "faq_3",
    question: "Konten apa yang tersedia di StreamVibe?",
    answer:
      "StreamVibe adalah layanan streaming di mana Anda dapat menonton semua genre acara TV, dari Bollywood hingga Hollywood, dengan biaya minimal. Koleksi besar layanan streaming kami diharapkan dapat memenuhi selera Anda akan acara TV.",
  },
  {
    id: "faq_4",
    question: "Bagaimana cara menonton StreamVibe?",
    answer:
      "StreamVibe dapat ditonton menggunakan semua perangkat, mulai dari smartphone hingga TV atau layar beresolusi Full HD. Cukup login dengan ID dan kata sandi StreamVibe Anda, dan Anda akan memiliki akses penuh ke layanan streaming kami.",
  },
  {
    id: "faq_5",
    question: "Bagaimana cara mendaftar di StreamVibe?",
    answer:
      "StreamVibe sangat mudah dalam hal prosedur pendaftaran. Anda cukup mengisi formulir di halaman 'Hubungi Kami', dan tim layanan pelanggan kami akan menghubungi Anda dalam 3 hari kerja.",
  },
  {
    id: "faq_6",
    question: "Apa itu uji coba gratis StreamVibe?",
    answer:
      "Layanan uji coba gratis StreamVibe tersedia hanya selama 1 bulan. Setelah itu, Anda dapat mencoba layanan premium sesuai pilihan Anda.",
  },
  {
    id: "faq_7",
    question: "Bagaimana cara menghubungi dukungan pelanggan StreamVibe?",
    answer:
      "StreamVibe menyediakan layanan pelanggan 24/7. Anda dapat mengirim email ke stream@customer.gmail.com atau sv@support.gmail.com. Anda juga dapat mengobrol online melalui tautan berikut: www.streamvibe.com/inquiry/akdfQEF4",
  },
  {
    id: "faq_8",
    question: "Apa metode pembayaran yang diterima StreamVibe?",
    answer:
      "StreamVibe adalah layanan streaming global, sehingga kami menyediakan berbagai metode pembayaran seperti MasterCard, Visa, PayPal, American Express, dan metode pembayaran kartu lainnya yang dijelaskan lengkap di halaman 'Tentang Kami' di situs ini.",
  },
];

export const SUBSCRIPTIONS = [
  {
    id: "subs_1",
    plan: "Basic Plan",
    description:
      "Nikmati perpustakaan film dan acara TV yang luas, mencakup berbagai konten, termasuk judul yang baru dirilis.",
    monthly_price: 9.99,
    yearly_price: 89.99,
  },
  {
    id: "subs_2",
    plan: "Standard Plan",
    description:
      "Akses ke pilihan film dan acara TV yang lebih luas, termasuk sebagian besar rilis baru dan konten eksklusif.",
    monthly_price: 12.99,
    yearly_price: 105.99,
  },
  {
    id: "subs_3",
    plan: "Premium Plan",
    description:
      "Akses ke pilihan film dan acara TV terluas, termasuk semua rilis baru dan fitur Penontonan Offline.",
    monthly_price: 14.99,
    yearly_price: 130.99,
  },
];

export const FOOTER_LINKS = [
  {
    id: "home_links",
    link_title: "Home",
    link_type: "text",
    links: [
      {
        link_name: "categories",
        link_url: "/categories",
      },
      {
        link_name: "devices",
        link_url: "/devices",
      },
      {
        link_name: "pricing",
        link_url: "/pricing",
      },
      {
        link_name: "FAQ",
        link_url: "/faq",
      },
    ],
  },
  {
    id: "movies_links",
    link_title: "Movies",
    link_type: "text",
    links: [
      {
        link_name: "genres",
        link_url: "/genres",
      },
      {
        link_name: "trending",
        link_url: "/trending",
      },
      {
        link_name: "new release",
        link_url: "/new release",
      },
      {
        link_name: "popular",
        link_url: "/popular",
      },
    ],
  },
  {
    id: "shows_links",
    link_title: "shows",
    link_type: "text",
    links: [
      {
        link_name: "genres",
        link_url: "/genres",
      },
      {
        link_name: "trending",
        link_url: "/trending",
      },
      {
        link_name: "new release",
        link_url: "/new release",
      },
      {
        link_name: "popular",
        link_url: "/popular",
      },
    ],
  },
  {
    id: "support_links",
    link_title: "Support",
    link_type: "text",
    links: [
      {
        link_name: "contact us",
        link_url: "/contact",
      },
    ],
  },
  {
    id: "subs_links",
    link_title: "Subscription",
    link_type: "text",
    links: [
      {
        link_name: "plans",
        link_url: "/plans",
      },
      {
        link_name: "features",
        link_url: "/features",
      },
    ],
  },
  {
    id: "connect_links",
    link_title: "Hubungi Kami",
    link_type: "icon",
    links: [
      {
        link_name: "Facebook",
        link_url: "https://www.facebook.com",
        link_icon: Icons.Facebook,
      },
      {
        link_name: "Twitter",
        link_url: "https://www.twitter.com",
        link_icon: Icons.Twitter,
      },
      {
        link_name: "Linkedin",
        link_url: "https://www.linkedin.com",
        link_icon: Icons.linkedin,
      },
    ],
  },
];
