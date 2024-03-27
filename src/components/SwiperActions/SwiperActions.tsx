import { Button } from "../Button";

export const SwiperActions = () => {
    const handleLikeClick = () => {
        alert('Like!');
    };
    const handleDislikeClick = () => {
        alert('Dislike!');
    };

    return (
        <div>
            <Button icon="" onClick={handleLikeClick} altText='Like' type='primary' />
            <Button icon="" onClick={handleDislikeClick} altText='Dislike' type='secondary' />
        </div>
    )
}