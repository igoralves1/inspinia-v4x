import clsx from 'clsx';
import { TbStar, TbStarFilled, TbStarHalfFilled } from 'react-icons/tb';
const Rating = ({
  rating,
  className
}) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return <span className={clsx('text-warning', className)}>
      {[...Array(fullStars)].map((_, i) => <TbStarFilled key={`full-${i}`} />)}
      {halfStar && <TbStarHalfFilled />}
      {[...Array(emptyStars)].map((_, i) => <TbStar key={`empty-${i}`} />)}
    </span>;
};
export default Rating;