# Toko Online — E-Commerce Frontend

Frontend for a full-stack e-commerce web application. Buyers can browse and search products; sellers manage their own products. Built with React, Material UI, and Redux Toolkit.

## Features

- Separate **seller** and **buyer** registration and login
- Product catalog with search and pagination
- Price display formatted in Indonesian Rupiah
- User profile management
- Responsive layout with a device-not-supported fallback page

## Built With

- [React](https://reactjs.org/) (Create React App)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Material UI](https://mui.com/) + [React Bootstrap](https://react-bootstrap.github.io/)
- [Axios](https://axios-http.com/)
- [Swiper](https://swiperjs.com/), [react-paginate](https://www.npmjs.com/package/react-paginate), [react-toastify](https://www.npmjs.com/package/react-toastify)

## Getting Started

1. Clone this repo
   ```sh
   git clone https://github.com/rifqiahmadpratama/Toko-Online-FE.git
   cd Toko-Online-FE
   npm install
   ```
2. Create a `.env` file pointing to the [backend](https://github.com/rifqiahmadpratama/Toko-Online-BE):
   ```env
   REACT_APP_API_BACKEND=http://localhost:4000
   ```
3. Start the app
   ```sh
   npm start
   ```
   The app runs at [http://localhost:3000](http://localhost:3000).

## Related Project

:rocket: [Toko Online Backend](https://github.com/rifqiahmadpratama/Toko-Online-BE)
