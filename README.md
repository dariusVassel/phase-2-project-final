# React Phase 2 Project: Sneaker Marketplace (Aimé Leon Dore)

## Demo

Use this video as an example of how the app should work.

![Demo Video](https://curriculum-content.s3.amazonaws.com/phase-2/react-hooks-mock-code-challenge-plantshop/plantsy_demo.gif)

## Setup

1. Run `npm install && npm start` in your terminal on port `3001`.
2. In a new terminal run `json-server --watch db.json --port 3004`. This will run your backend on port `3004`.

Make sure to open [http://localhost:3004/products](http://localhost:3004/products)
in the browser to verify that your backend is working before you proceed!

## Endpoints

The base URL for your backend is: `http://localhost:3004`

## Core Features

As a user:

1. When the app starts, you can see the home entry page.
2. You can navigate to enter the website where you either buy sneakers by adding it to the cart. or sell sneakers
3. You can sell sneakers by adding data to a form with product name, price and an image of the shoe.
4. Once you have added items to your cart you you can manage the items you are buying from there.

### Endpoints for Core Deliverables

#### GET /plants

Example Response:

```json
[
  {
    "id": 1,
    "name": "Yeezy Boost 350 V2 'Light'",
    "image": "https://image.goat.com/crop/1000/attachments/product_template_additional_pictures/images/059/716/163/original/750230_01.jpg.jpeg?1630432651",
    "quantity": 0,
    "price": 249,
    "description": "SKU: GY3438",
    "details": "The adidas Yeezy Boost 350 V2 ‘Light’ updates the minimalist sneaker with UV-sensitive technology, a first for Kanye West’s lifestyle imprint. Under artificial light, the Primeknit upper projects a subtle ivory finish. Exposure to direct sunlight yields soft pink coloring throughout the knit build, while the monofilament side stripe darkens to an amber hue. The color-shifting assembly is supported by a standard rubber-wrapped Boost midsole.",
    "likes": 62355
  },
  {
    "id": 2,
    "name": "Dunk Low 'NY vs NY'",
    "image": "https://image.goat.com/crop/1000/attachments/product_template_additional_pictures/images/057/951/215/original/767017_01.jpg.jpeg?1627398246",
    "quantity": 1,
    "price": 263,
    "description": "SKU: DN2489 300",
    "details": "Tapping into the shoe’s basketball roots, the Nike Dunk Low ‘NY vs NY’ celebrates the summertime streetball tournament showcasing some of New York City’s best high school hoopers. The leather upper pairs a dark green base with contrasting white overlays at the forefoot and heel. A gradient blend of red and orange is applied to the signature Swoosh and Nike-branded tongue tag. ‘NY vs NY’ is embroidered on the lateral heel, while the translucent rubber outsole lists each league and its corresponding park, including Dyckman, West 4th and Lincoln.",
    "likes": 301298
  }
]
```

#### POST `/plants`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "name": "string",
  "image": "string",
  "quantity": number,
  "price" : number,
  "description" : "string",
  "details" : "string",
  "likes" : number
}
```

Example Response:

```json
{
  "id": 1,
  "name": "Yeezy Boost 350 V2 'Light'",
  "image": "https://image.goat.com/crop/1000/attachments/product_template_additional_pictures/images/059/716/163/original/750230_01.jpg.jpeg?1630432651",
  "quantity": 0,
  "price": 249,
  "description": "SKU: GY3438",
  "details": "The adidas Yeezy Boost 350 V2 ‘Light’ updates the minimalist sneaker with UV-sensitive technology, a first for Kanye West’s lifestyle imprint. Under artificial light, the Primeknit upper projects a subtle ivory finish. Exposure to direct sunlight yields soft pink coloring throughout the knit build, while the monofilament side stripe darkens to an amber hue. The color-shifting assembly is supported by a standard rubber-wrapped Boost midsole.",
  "likes": 62355
}
```

Have fun exploring the single page application!
