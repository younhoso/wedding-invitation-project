import clsx from 'clsx';

type ListProps = {
  src: string
  alt: string
}

export default function List({src, alt}: ListProps) {
 
 return (
    <li className='wrap-image'>
      <img src={src + '.jpg'} alt={alt} />
    </li>
 );
};