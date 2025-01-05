 "use client"
 import localFont from "next/font/local";
  import Header from "./components/Header/header";
  import Footer from "./components/Footer/footer";
  import { Provider } from "react-redux";
  import { store } from "./Store/store";
  import "./style/globals.css"; 

  const myFont = localFont({
    src: "/fonts/Montserrat-Regular.ttf"
  });

  export default function RootLayout({ children }) {
    return (
      <html lang="en">  
      <Provider store={store}>
        <body className={myFont.className}>
          <Header/>
          {children}
          <Footer/>
        </body>
      </Provider>
      </html>
    );
  }