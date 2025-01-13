import React, { useEffect, useState } from "react";
import { TimerState } from "../background/core/pomodoro-settings";
import { PomodoroHistory } from "../background/core/pomodoro-history";

const Options = () => {
  const [currentTimer, setCurrentTimer] = useState<TimerState | null>(null);
  const [pomodoroHistory, setPomodoroHistory] = useState<PomodoroHistory | null>(null);

  useEffect(() => {
    // Get current timer state
    chrome.runtime.sendMessage({ action: 'getCurrentTimer' }, (response) => {
      if (!response || 'error' in response) {
        return;
      }
      setCurrentTimer(response);
    });

    // Get pomodoro history
    chrome.storage.local.get('pomodoroHistory', (result) => {
      console.log('pomodoroHistory', result);
      if (result.pomodoroHistory) {
        setPomodoroHistory(result.pomodoroHistory);
      }
    });
  }, []);

  return (
    <div className="p-8">
      {/* Debug section */}
      <div className="mt-4 p-4 bg-gray-800 text-gray-300 rounded-lg max-w-2xl mx-auto">
        <h3 className="text-sm font-semibold mb-2 text-gray-400">Timer State Interface:</h3>          
        <h3 className="text-sm font-semibold mb-2 text-gray-400">Current Timer State:</h3>
        <pre className="text-xs font-mono whitespace-pre-wrap">
          {JSON.stringify(currentTimer, null, 2)}
        </pre>
      </div>

      {/* Pomodoro History section */}
      <div className="mt-4 p-4 bg-gray-800 text-gray-300 rounded-lg max-w-2xl mx-auto">
        <h3 className="text-sm font-semibold mb-2 text-gray-400">Pomodoro History:</h3>
        <pre className="text-xs font-mono whitespace-pre-wrap">
          {JSON.stringify(pomodoroHistory, null, 2)}
        </pre>
        <div className="mt-4">
          <p className="text-sm text-gray-400">Total sessions: {pomodoroHistory?.pomodoros.length || 0}</p>
          {pomodoroHistory && pomodoroHistory.pomodoros.length > 0 && (
            <p className="text-sm text-gray-400">
              Latest session: {new Date(pomodoroHistory.pomodoros[pomodoroHistory.pomodoros.length - 1]).toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Options;