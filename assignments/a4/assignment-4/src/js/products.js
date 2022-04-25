/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - name: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */
window.products = [
  {
    id: "09651b8f-5705-4642-a50b-6a1c312bb0ae",
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 10995,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: ["a010c197-89da-4d42-b53f-30fa4d5fd654"],
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    discontinued: false
  },
  {
    id: "5dcfea24-a582-4736-9145-0ded9730982b",
    discontinued: false,
    name: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 2230,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: ["a010c197-89da-4d42-b53f-30fa4d5fd654"],
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  },
  {
    discontinued: false,
    id: "3aea93bf-e115-43c6-9bc0-c6539e81a538",
    name: "Mens Cotton Jacket",
    price: 5599,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: ["a010c197-89da-4d42-b53f-30fa4d5fd654"],
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
  },
  {
    discontinued: false,
    id: "81c1dac9-cd95-498c-8b81-53bbb3189589",
    name: "Mens Casual Slim Fit",
    price: 1599,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: ["a010c197-89da-4d42-b53f-30fa4d5fd654"],
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
  },
  {
    discontinued: false,
    id: "30ccce43-1eb0-4f04-9eb4-03b992bfa7bc",
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 69500,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: ["3079b5a8-3f9b-464b-bd40-74d60884d076"],
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    discontinued: false,
    id: "25d0f1b7-736f-4425-8d4d-46be9494b790",
    name: "Solid Gold Petite Micropave ",
    price: 16800,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: ["3079b5a8-3f9b-464b-bd40-74d60884d076"],
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    discontinued: false,
    id: "d2d8cd9f-9780-4262-bb4f-8f6638a227d2",
    name: "White Gold Plated Princess",
    price: 999,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: ["3079b5a8-3f9b-464b-bd40-74d60884d076"],
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    discontinued: false,
    id: "afd48432-4776-476b-a0fe-eef2d18e603f",
    name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 1099,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: ["3079b5a8-3f9b-464b-bd40-74d60884d076"],
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    discontinued: false,
    id: "715aa7ca-8eaa-45b2-92c4-ae6751bbe6fc",
    name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 6400,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: ["0f39d60b-15c8-465d-adfe-f4dd25ce65d3"],
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
  },
  {
    discontinued: false,
    id: "23ba035b-5ad5-46ab-9812-b9af3b7afbc6",
    name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 10900,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: ["0f39d60b-15c8-465d-adfe-f4dd25ce65d3"],
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
  },
  {
    discontinued: false,
    id: "94971f6d-a76e-4dcf-b44b-56208c1b5218",
    name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 10900,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: ["0f39d60b-15c8-465d-adfe-f4dd25ce65d3"],
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
  },
  {
    discontinued: false,
    id: "d3958e3d-b432-4c29-90e0-9e66bf6b4bab",
    name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 11400,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: ["0f39d60b-15c8-465d-adfe-f4dd25ce65d3"],
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
  },
  {
    discontinued: false,
    id: "ae166b0b-1060-49ad-9a4a-526b06436d5e",
    name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 59900,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: ["0f39d60b-15c8-465d-adfe-f4dd25ce65d3"],
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
  },
  {
    discontinued: false,
    id: "c34c089f-69da-4426-9103-78106fbb4b09",
    name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 99999,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: ["0f39d60b-15c8-465d-adfe-f4dd25ce65d3"],
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
  },
  {
    discontinued: false,
    id: "9d5824ed-61f8-4038-aaad-a8f72478e617",
    name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 5699,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: ["ec32b412-775c-44a9-b6b3-fb2dc9400670"],
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
  },
  {
    discontinued: false,
    id: "02a9d92f-b445-48e4-bea6-bad3c2caa649",
    name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 2995,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: ["ec32b412-775c-44a9-b6b3-fb2dc9400670"],
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
  },
  {
    discontinued: false,
    id: "e53dd517-7302-4a15-a9c4-9ac1e90fdd0e",
    name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 3999,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: ["ec32b412-775c-44a9-b6b3-fb2dc9400670"],
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
  },
  {
    discontinued: false,
    id: "b27a1d14-31ea-447f-8948-049a853a70ce",
    name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 985,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: ["ec32b412-775c-44a9-b6b3-fb2dc9400670"],
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
  },
  {
    discontinued: false,
    id: "72df0023-13fb-4c23-9d80-6755c4c7a8a4",
    name: "Opna Women's Short Sleeve Moisture",
    price: 795,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: ["ec32b412-775c-44a9-b6b3-fb2dc9400670"],
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
  },
  {
    discontinued: false,
    id: "4e8cca38-e1ea-4104-acff-e80a76f44d38",
    name: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 1299,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: ["ec32b412-775c-44a9-b6b3-fb2dc9400670"],
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
  }
];
