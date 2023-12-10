export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Dashboard",
        url: "/",
        icon: "home.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },

      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post.svg",
      },
    ],
  },

  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Forms",
        url: "/",
        icon: "form.svg",
      },
      {
        id: 3,
        title: "Notes",
        url: "/",
        icon: "note.svg",
      },

      {
        id: 4,
        title: "Calender",
        url: "/",
        icon: "calendar.svg",
      },
    ],
  },

  {
    id: 4,
    title: "maintenance",
    listItems: [
      {
        id: 1,
        title: "Setting",
        url: "/",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "backup.svg",
      },
    ],
  },

  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const topSellingProduct = [
  {
    id: 1,
    name: "Iphone 12",
    Manufacturer: "Apple",
    quantity: 45,
    category: "Mobile Phone",
    picture:
      "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    name: "Iphone 13 Pro Max",
    Manufacturer: "Apple",
    quantity: 185,
    category: "Mobile Phone",
    picture:
      "https://media.gettyimages.com/id/1371695404/photo/iphone-13-pro-graphite-gray.jpg?s=612x612&w=gi&k=20&c=Wyu-tFmt1d4aQDKiRUD8F-nXLFm8Hh_fSYyQZL5FFk4=",
  },
  {
    id: 3,
    name: "Iphone 15 Plus",
    Manufacturer: "Apple",
    quantity: 81,
    category: "Mobile Phone",
    picture:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-7inch-black?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923781972",
  },
  {
    id: 4,
    name: "Iphone 14 Pro Max",
    Manufacturer: "Apple",
    quantity: 97,
    category: "Mobile Phone",
    picture:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS_ECBsvOrhHZRei-naJE0pNcHg8wyX2udyNlJW3uCvy6Mx-8gq",
  },

  {
    id: 5,
    name: "Samsung Galaxy S23",
    Manufacturer: "Samsung",
    quantity: 97,
    category: "Mobile Phone",
    picture:
      "data:image/jpeg;base64,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",
  },

  {
    id: 6,
    name: "Samsung Galaxy S23 Ultra",
    Manufacturer: "Samsung",
    quantity: 300,
    category: "Mobile Phone",
    picture:
      "https://images.samsung.com/is/image/samsung/p6pim/ca/2302/gallery/ca-galaxy-s23-s918-sm-s918wzgfxac-534851103?$650_519_PNG$",
  },

  {
    id: 7,
    name: "Samsung Galaxy Z Flip5 ",
    Manufacturer: "Samsung",
    quantity: 300,
    category: "Mobile Phone",
    picture:
      "https://multimedia.bbycastatic.ca/multimedia/products/500x500/171/17168/17168236.jpg",
  },
];

export const chartBoxData = {
  color: "#8884d8",
  icon: "userIcon.svg",
  title: "Total sales",
  dataKey: "sales",
  number: 987,
  percentage: 45,
  chartData: [
    {
      name: "Sun",
      sales: 78,
    },
    {
      name: "Mon",
      sales: 103,
    },    {
      name: "Tue",
      sales: 200,
    },    {
      name: "Wed",
      sales: 34,
    },    {
      name: "Thu",
      sales: 56,
    },    {
      name: "Fri",
      sales: 341,
    },    {
      name: "Sat",
      sales: 123,
    },
  ],
};

export const chartBoxProduct = {
  color: "teal",
  icon: "userIcon.svg",
  title: "Total sales",
  dataKey: "products",
  number: "13,567",
  percentage: 21,
  chartData: [
    {
      name: "Sun",
      products: 48,
    },
    {
      name: "Mon",
      products: 113,
    },    {
      name: "Tue",
      products: 50,
    },    {
      name: "Wed",
      products: 94,
    },    {
      name: "Thu",
      products: 56,
    },    {
      name: "Fri",
      products: 341,
    },    {
      name: "Sat",
      products: 123,
    },
  ],
};



export const chartBoxRevenue = {
  color: "skyblue",
  icon: "revenueIcon.svg",
  title: "Total Products",
  dataKey: "revenue",
  number: "34,910",
  percentage: 64,
  chartData: [
    {
      name: "Sun",
      revenue: 78,
    },
    {
      name: "Mon",
      revenue: 103,
    },    {
      name: "Tue",
      revenue: 260,
    },    {
      name: "Wed",
      revenue: 341,
    },    {
      name: "Thu",
      revenue: 56,
    },    {
      name: "Fri",
      revenue: 41,
    },    {
      name: "Sat",
      revenue: 13,
    },
  ],
};

export const chartBoxRatio = {
  color: "gold",
  icon: "ratioIcon.svg",
  title: "Total Products",
  dataKey: "ratio",
  number: "2.6",
  percentage: -12,
  chartData: [
    {
      name: "Sun",
      ratio: 78,
    },
    {
      name: "Mon",
      ratio: 103,
    },    {
      name: "Tue",
      ratio: 260,
    },    {
      name: "Wed",
      ratio: 341,
    },    {
      name: "Thu",
      ratio: 56,
    },    {
      name: "Fri",
      ratio: 41,
    },    {
      name: "Sat",
      ratio: 13,
    },
  ],
};

export const barChartBoxRevenue = {
  color: "skyblue",
  icon: "revenueIcon.svg",
  title: "Total Products",
  dataKey: "revenue",
  chartData: [
    {
      name: "Sun",
      revenue: 78,
    },
    {
      name: "Mon",
      revenue: 103,
    },    {
      name: "Tue",
      revenue: 260,
    },    {
      name: "Wed",
      revenue: 341,
    },    {
      name: "Thu",
      revenue: 56,
    },    {
      name: "Fri",
      revenue: 41,
    },    {
      name: "Sat",
      revenue: 13,
    },
  ],
};

export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "$499.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "$999.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "$799.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "$39.99",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "$59.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "$899.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "$970.49",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "$599.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
];

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Hubbard",
    firstName: "Eula",
    email: "kewez@@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    password: "alphaCode15%",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    firstName: "Stella",
    email: "comhuhmit@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    password: "alphaCode15%",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    firstName: "Mary",
    email: "ujudokon@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    password: "alphaCode15%",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "tinhavabe@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    password: "alphaCode15%",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "123 456 789",
    password: "alphaCode15%",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharp",
    firstName: "Jeremy",
    email: "vulca.eder@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    password: "alphaCode15%",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lowe",
    firstName: "Christina",
    email: "reso.bilic@gmail.com",
    phone: "123 456 789",
    password: "alphaCode15%",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dean",
    firstName: "Garrett",
    email: "codaic@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    password: "alphaCode15%",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Parsons",
    firstName: "Leah",
    email: "uzozor@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    password: "alphaCode15%",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Reid",
    firstName: "Elnora",
    email: "tuhkabapu@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    password: "alphaCode15%",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    firstName: "Gertrude",
    email: "gibo@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    password: "alphaCode15%",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williams",
    firstName: "Mark",
    email: "tic.harvey@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    password: "alphaCode15%",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    password: "alphaCode15%",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    password: "alphaCode15%",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    password: "alphaCode15%",
  },
];