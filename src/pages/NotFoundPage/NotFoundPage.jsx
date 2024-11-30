import css from './NotFoundPage.module.css';
import notFoundPicture from '../not-found-picture.jpg';

export default function NotFoundPage() {
    return (
        <img src={notFoundPicture} alt="Sorry, this page does not exist" />
    )
}