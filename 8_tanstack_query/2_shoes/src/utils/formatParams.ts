type ParamsObj = {
  size?: string;
  color?: string;
  gender?: string;
  price?: string;
};

function formatParams(paramsObj: ParamsObj): string {
  const params: string[] = [];

  for (const [key, value] of Object.entries(paramsObj)) {
    if (!value) continue;

    if (key === "gender") {
      params.push(`${key}=${value}`);
    } else {
      const values = value.split(",");
      const queryKey = key === "price" ? `${key}_lte` : `${key}_like`;

      values.forEach((v) => {
        params.push(`${queryKey}=${v}`);
      });
    }
  }

  return `?${params.join("&")}`;
}

export default formatParams;
