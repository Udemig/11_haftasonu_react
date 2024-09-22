import moment from "moment/moment";

// türkçe dilini çevir
import "moment/locale/tr";

// unix zaman formatındaki (1970 den süregelen saniye) zamanı kullanıcı dostu formata çevirir
const formatDate = (unix_time) => {
  if (unix_time === 0 || !unix_time) return "Bilinmiyor";

  const formatted = new Date(unix_time * 1000);

  return moment(formatted).calendar();
};

export default formatDate;
