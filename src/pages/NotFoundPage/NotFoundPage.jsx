import css from './NotFoundPage.module.css';
import notFoundPicture from '../../not-found-picture.jpg';

export default function NotFoundPage() {
    return (
        <div className={css.imageContainer}>
            <img className={css.image} src={notFoundPicture} alt="Sorry, this page does not exist" />
        </div>

    )
}