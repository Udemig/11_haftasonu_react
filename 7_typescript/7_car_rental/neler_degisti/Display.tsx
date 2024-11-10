// 2) Artık bir bileşen prop alıyorsa mutlaka aldığı propların tipini tanımlamak zorundyız
interface IProps {
  count: number;
}

const Display = ({ count }: IProps) => {
  return <h1>{count}</h1>;
};

export default Display;
