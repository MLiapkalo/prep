export const isPowOf2 = x => Math.log2(x) % 1 === 0;
export const nearestPowOf2 = x => 1 << 31 - Math.clz32(x);