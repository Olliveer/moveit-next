import Head from 'next/head';
import { ChallangeBox } from '../components/ChallengeBox';
import { CompleteChallanges } from '../components/CompleteChallanges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompleteChallanges />
            <Countdown />
          </div>

          <div>
            <ChallangeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
