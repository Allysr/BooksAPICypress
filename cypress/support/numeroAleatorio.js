export const gerarNumeroAleatorio = () => {
  const numerosGerados = {};

  while (true) {
    const numeroAleatorio = Math.floor(Math.random() * 10000) + 1;

    if (!numerosGerados[numeroAleatorio]) {
      numerosGerados[numeroAleatorio] = true;
      return numeroAleatorio;
    }
  }
};
