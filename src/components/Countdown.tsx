import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import { AiFillCheckCircle } from "react-icons/ai";
import styles from '../styles/components/Countdown.module.css';



export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado <AiFillCheckCircle size={24} color="#4CD62B" />
                </button>
            ) : (
                    <>
                        {isActive ?
                            (
                                <button
                                    onClick={resetCountdown}
                                    type="button"
                                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                >
                                    Abandonar ciclo
                                </button>
                            ) : (
                                <button onClick={startCountdown} type="button" className={styles.countdownButton}>
                                    Iníciar um ciclo
                                </button>
                            )}
                    </>
                )}
        </div>
    );
}