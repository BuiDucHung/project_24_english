// init your index.js
import Head from "next/head";
import React from "react";

import { HeadData } from '../src/utils/const';
import Main from "layout/main";
import Story from "components/story/story";
import Banner from "components/banner/Banner";
import Combo2025 from "components/combo2025/Combo2025";
import Combo2026 from "components/combo2026/Combo2026";
import ToeicStudy from "study_toeic/toeic";

import 'swiper/css';
import 'swiper/css/navigation';


function App() {

  return (
    <div>
      <Head>
        <title>{HeadData.title}</title>
        <meta name="title" content={HeadData.title} />
        <meta name="og:title" content={HeadData.title} />
        <meta name="description" content={HeadData.desc} />
        <meta name="og:description" content={HeadData.desc} />
        <meta property="og:type" content="website" />
        <meta name="image" content={HeadData.image} />
        <meta name="og:image:secure_url" content={HeadData.image} />
      </Head>
      <Main>
        <Story/>
        <Banner/>
        <Combo2025/>
        <Combo2026/>
        <ToeicStudy/>
      </Main>
    </div>
  )
}

export default App;