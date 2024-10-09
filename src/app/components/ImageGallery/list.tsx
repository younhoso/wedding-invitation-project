import clsx from 'clsx';

type ListProps = {
  src: string;
  idx: number;
  alt: string;
  handleSelectedImage: (n: number) => void;
  onClose: () => void;
};

export default function List({ src, idx, alt, handleSelectedImage }: ListProps) {
  return (
    <li
      className="wrap-image"
      onClick={() => {
        handleSelectedImage(idx);
      }}
    >
      <img src={src + '.jpg'} alt={alt} />
    </li>
  );
}
