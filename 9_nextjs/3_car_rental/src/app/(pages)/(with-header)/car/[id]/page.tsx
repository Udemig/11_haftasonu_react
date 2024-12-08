import BreadCrumb from "@/app/components/BreadCrumb";
import Images from "@/app/components/Images";
import OrderBox from "@/app/components/OrderBox";
import Overview from "@/app/components/Overview";
import Title from "@/app/components/Title";
import { getDetail } from "@/app/utils/service";

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
        <Title car={vehicle} />
        <Images url={vehicle.imageUrl} />

        <div className="grid xl:grid-cols-5 gap-x-10 my-10">
          <div className="xl:col-span-4">
            <Overview car={vehicle} />
          </div>

          <OrderBox car={vehicle} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
