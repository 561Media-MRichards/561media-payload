import * as migration_20260108_233900 from './20260108_233900';

export const migrations = [
  {
    up: migration_20260108_233900.up,
    down: migration_20260108_233900.down,
    name: '20260108_233900'
  },
];
