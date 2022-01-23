export const bufferToStringArray = (entrada: Buffer): string[] => {
  return entrada.toString().trim().split('\n');
};
