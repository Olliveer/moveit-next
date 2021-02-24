import { useContext, useEffect, useState } from 'react';
import styles from '../styles/components/Countdown.module.css';

import { AiFillCheckCircle } from "react-icons/ai";
import { ChallengesContext } from '../contexts/ChallengesContext';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFineshed] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(25 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFineshed(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

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