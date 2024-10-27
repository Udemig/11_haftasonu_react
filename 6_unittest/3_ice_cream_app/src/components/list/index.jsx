import { useEffect, useState } from 'react';
import api from './../../api/index';
import TrendsButton from './TrendsButton';
import Loader from '../loader';
import Error from '../error';
import Card from '../card';
import Cart from '../cart';

const List = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    api
      .get('/iceCreams')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="mt-[30px] lg:mt-[120px]">
      <Cart />

      <TrendsButton />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} />
      ) : (
        data && (
          <div className="grid mt-[30px] gap-[15px] lg:gap-[30px] lg:grid-cols-2">
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default List;
