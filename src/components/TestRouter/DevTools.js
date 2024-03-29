// see more config at https://github.com/gaearon/redux-devtools-dock-monitor
import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultPosition="right"
    defaultIsVisible={false}
  >
    <LogMonitor />
  </DockMonitor>
);