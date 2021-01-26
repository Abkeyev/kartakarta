import React, { useEffect } from "react";
import {
  Header,
  BestCard,
  CardOrder,
  OldCardOrder,
  CalculatorCashback,
  // HowToGetCard,
  HelpYou,
  MobileBanking,
  AdditionalInfo,
  GoodAnyTimeWhere,
  Partners,
  Footer,
  Banner,
  FixedHeader,
} from "./components";
import { useTranslation } from "react-i18next";

import { YMInitializer } from "react-yandex-metrika";
import SnackBarBottom from "./components/SnackBar";
import * as Scroll from "react-scroll";

function App() {
  const { t, i18n } = useTranslation();
  const orderRef: any = React.useRef(null);
  const oldOrderRef: any = React.useRef(null);
  const [lang, setLang] = React.useState(i18n.language ? i18n.language : "ru");

  const handleLangChange = (lang: string) => {
    setLang(lang);
    i18n.changeLanguage(lang);
  };

  const scrollToOrderRef = (flag: boolean) => {
    Scroll.animateScroll.scrollTo(
      flag ? orderRef.current.offsetTop - 120 : orderRef.current.offsetTop - 80
    );
  };

  const scrollToOldOrderRef = (flag: boolean) => {
    Scroll.animateScroll.scrollTo(
      flag
        ? oldOrderRef.current.offsetTop - 120
        : oldOrderRef.current.offsetTop - 80
    );
  };

  const [isSend, setSend] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>("default");
  const snackUp = (message: string) => {
    setMessage(message);
    setSend(true);
  };

  return (
    <div>
      <YMInitializer
        accounts={[56824144]}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
          trackHash: true,
        }}
      />
      <Header
        lang={lang}
        changeLang={handleLangChange}
        scrollToOrder={scrollToOldOrderRef}
      />
      <FixedHeader
        lang={lang}
        changeLang={handleLangChange}
        scrollToOrder={scrollToOldOrderRef}
      />
      <Banner />
      <BestCard />
      {/* <OldCardOrder
        refProp={oldOrderRef}
        snackUp={(message: string) => snackUp(message)}
        scrollToOrder={scrollToOldOrderRef}
      /> */}
      {/* <HowToGetCard /> */}
      <CardOrder
        refProp={orderRef}
        scrollToOrder={scrollToOrderRef}
        snackUp={(message: string) => snackUp(message)}
      />
      <GoodAnyTimeWhere scrollToOrder={scrollToOrderRef} />
      <Partners />
      <CalculatorCashback scrollToOrder={scrollToOrderRef} />
      <MobileBanking />
      <AdditionalInfo />
      <HelpYou />
      <Footer />
      <SnackBarBottom
        open={isSend}
        message={message}
        close={() => setSend(false)}
      />
    </div>
  );
}

export default App;
