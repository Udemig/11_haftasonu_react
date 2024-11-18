import { Quote } from "./Classic";
import { useQuery } from "@tanstack/react-query";
import { getQuotes } from "./Updated";

const Header = () => {
  const { data } = useQuery<Quote[]>({
    queryKey: ["quotes"],
    queryFn: () => getQuotes(0),
  });

  return (
    <header>
      <h2>Özlü Sözler</h2>

      <h3>{data?.length} tane söz var</h3>
    </header>
  );
};

export default Header;
