const counterReducer = (state, action) => {
  if (action === "ARTTIR") return state + 1;
  if (action === "AZALT") return state - 1;
  if (action === "SIFIRLA") return 0;
};

export default counterReducer;
