import { Button } from "../Button";
import styles from './SwiperActions.module.css';

export const SwiperActions = () => {
    const handleLikeClick = () => {
        alert('Like!');
    };
    const handleDislikeClick = () => {
        alert('Dislike!');
    };

    return (
        <div className={styles['swiper-actions']}>
            <Button icon="/x-icon.svg" onClick={handleDislikeClick} altText='Dislike' type='secondary' />
            <Button icon="/heart-icon.svg" onClick={handleLikeClick} altText='Like' type='primary' />
        </div>
    )
}