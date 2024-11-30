const Docs = async (props) => {
  const params = (await props.params).slug;

  if (params.length === 1) return `${params[0]} belgesindesiniz`;

  if (params.length === 2) return `${params[0]} belgesinde ${params[1]}. sayfasındasınız `;

  if (params.length === 3) return `${params[0]} belgesinde ${params[1]}. sayfasında ${params[2]}. satırdasınız`;

  return <div>Bilinmiyor</div>;
};

export default Docs;
