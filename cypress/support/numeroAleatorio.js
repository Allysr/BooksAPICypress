export const gerarNumeroAleatorio = () => {
  const numeroAleatorio = Math.floor(Math.random() * 100000) + 1;
  return numeroAleatorio;
};
