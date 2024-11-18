import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const Other = () => {
  /*
   * useQuery bileşen ilk ekrana basıldığı anda istek atar
   * ama farklı zamanlarda bir butona tıklanınca, bir inputa yazı yazılınca istek atmak istiyorsak useMutation kullanırız
   */

  const { isPending, error, data, mutate } = useMutation({
    mutationKey: ["randomTodo"],
    mutationFn: () => axios("https://dummyjson.com/todos/random"),
  });

  console.log(data);

  if (isPending) return <p>Yükleniyor...</p>;

  if (error) return <p>Üzgünüz bir hata oluştu</p>;

  return (
    <div>
      <button onClick={() => mutate()}>Rastgele Todo Al</button>

      <p>{data?.data.todo}</p>
      <p>{data?.data.completed ? "Tamamlandı" : "Devam Ediyor"}</p>
    </div>
  );
};

export default Other;
