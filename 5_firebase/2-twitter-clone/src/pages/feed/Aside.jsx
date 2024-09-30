import React from "react";

const Aside = () => {
  return <div className="max-xl:hidden">Aside</div>;
};

// kapsayıcı bilşendeki user state'i değiştiğinde gereksiz render olmasının önüne geçtil
export default React.memo(Aside);
