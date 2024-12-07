import BreadCrumb from "../../../components/BreadCrumb";
import Images from "/src/app/components/Images";
import OrderBox from "/src/app/components/OrderBox";
import Overview from "/src/app/components/Overview";
import Title from "/src/app/components/Title";
import { getDetail } from "/src/app/utils/service";

type Props = {
  params: Promise<{ id: string }>;
};

const Detail = async ({ params }: Props) => {
  const { id } = await params;

  const { vehicle } = await getDetail(id);

  return (
    <div>
      <div className="h-[70px] md:h-[110px] bg-black"></div>

      <div className="container mt-5">
        <BreadCrumb name={vehicle.make + " " + vehicle.model} />
        <Title />
        <Images />

        <div className="grid xl:grid-cols-5 gap-x-10 my-10">
          <div className="xl:col-span-4">
            <Overview />
          </div>

          <OrderBox />
        </div>
      </div>
    </div>
  );
};

export default Detail;
