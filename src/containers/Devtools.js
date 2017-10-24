import React from 'react'
import {createDevtools} from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

export default createDevtools(
  <DockMonitor toggleVisibilityKey="ctrl-q"
               changePositionKey="ctrl-x">
    <LogMonitor />
  </DockMonitor>
)
