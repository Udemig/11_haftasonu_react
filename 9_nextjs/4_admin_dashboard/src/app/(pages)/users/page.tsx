import UsersTable from "@/app/components/table/UsersTable";
import Modal from "./modal";

type Props = {
  searchParams: Promise<{ show?: string }>;
};

const Page = async ({ searchParams }: Props) => {
  const { show } = await searchParams;

  return (
    <div>
      <h1 className="title">Kullanıcılar</h1>

      <UsersTable />

      {/* eğer url'de show parametresi varsa ekrana modal bas */}
      {show && <Modal id={show} />}
    </div>
  );
};

export default Page;
