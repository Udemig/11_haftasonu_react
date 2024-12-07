import Link from "next/link";

type Props = {
  name: string;
};

const BreadCrumb = ({ name }: Props) => {
  return (
    <div>
      <Link className="text-blue-500" href="/">
        Anasayfa
      </Link>
      <span className="mx-1">/</span>
      <span>Arabalar</span>
      <span className="mx-1">/</span>
      <span>{name}</span>
    </div>
  );
};

export default BreadCrumb;
