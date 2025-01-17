export const MenuIds = {
  PAUSE: 'pause-timer',
  RESUME: 'resume-timer',
  STOP: 'stop-timer',
  RESTART: {
    MENU: 'restart-timer',
    FOCUS: 'restart-focus',
    SHORT_BREAK: 'restart-short-break',
    LONG_BREAK: 'restart-long-break'
  },
  START_CYCLE: 'start-cycle',
  START: {
    FOCUS: 'start-focus',
    SHORT_BREAK: 'start-short-break',
    LONG_BREAK: 'start-long-break'
  },
  RESTART_CYCLE: 'restart-cycle',
  VIEW_HISTORY: 'view-history',
  SEPARATOR: 'separator'
} as const; 