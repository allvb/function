export default function life(param) {
  if ((param.health > 50) && (param.health < 101)) {
    return 'healthy';
  }
  if ((param.health > 15) && (param.health < 51)) {
    return 'wounded';
  }
  if (param.health < 16) {
    return 'critical';
  }
  return false;
}
