import React from 'react';

const Feedback: React.FC = () => {
  const manifest = chrome.runtime.getManifest();
  const version = manifest.version;
  const extensionId = chrome.runtime.id;
  const reviewUrl = `https://chrome.google.com/webstore/detail/${extensionId}/reviews`;

  return (
    <div className="max-w-2xl mx-auto text-base">
      {/* Title Section */}
      <div className="text-center mb-12 mt-4">
        <h1 className="text-red-600 font-normal text-3xl mb-0">Marinara</h1>
        <h2 className="text-red-600 text-lg mb-2 font-normal">Pomodoro Assistant</h2>
        <p className="mt-4">
          <a 
            href="https://github.com/vintageplayer/marinara" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 underline hover:text-red-600"
          >
            Marinara Development Team
          </a>
          <span className="mx-2">&</span>
          <a 
            href="https://github.com/vintageplayer/marinara/contributors" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 underline hover:text-red-600"
          >
            Contributors
          </a>
        </p>
        
        {/* Credit to Original */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-700 mb-2">
            Built upon the original{' '}
            <a 
              href="https://github.com/schmich/marinara" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-600 underline hover:text-red-700"
            >
              Marinara Pomodoro Timer
            </a>
            {' '}by{' '}
            <a 
              href="https://github.com/schmich" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-600 underline hover:text-red-700"
            >
              Chris Schmich
            </a>
          </p>
          <p className="text-xs text-gray-600">
            This Manifest V3 version preserves the excellent design and functionality of the original extension.
          </p>
        </div>
      </div>

      {/* Feedback Links */}
      <div className="flex justify-center mb-8 leading-snug">
        <p className="flex-[40%] text-right text-gray-800 font-bold uppercase relative top-0.5 mr-5">
          Feedback
        </p>
        <ul className="flex-[55%] list-none ml-5 p-0">
          <li className="mb-2">
            <a 
              href={reviewUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 no-underline hover:text-red-600 hover:underline"
            >
              Write a Review
            </a>
          </li>
          <li className="mb-2">
            <a 
              href="https://github.com/vintageplayer/marinara/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 no-underline hover:text-red-600 hover:underline"
            >
              Report an Issue
            </a>
          </li>
          <li className="mb-2">
            <a 
              href="https://github.com/vintageplayer/marinara/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 no-underline hover:text-red-600 hover:underline"
            >
              Help Translate
            </a>
          </li>
        </ul>
      </div>

      {/* View Links */}
      <div className="flex justify-center mb-8 leading-snug">
        <p className="flex-[40%] text-right text-gray-800 font-bold uppercase relative top-0.5 mr-5">
          View
        </p>
        <ul className="flex-[55%] list-none ml-5 p-0">
          <li className="mb-2">
            <a 
              href="https://github.com/vintageplayer/marinara/releases" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 no-underline hover:text-red-600 hover:underline"
            >
              Release Notes
            </a>
          </li>
          <li className="mb-2">
            <a 
              href="https://github.com/vintageplayer/marinara" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 no-underline hover:text-red-600 hover:underline"
            >
              Source Code
            </a>
          </li>
          <li className="mb-2">
            <a 
              href="https://github.com/vintageplayer/marinara/blob/main/ATTRIBUTION.md" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 no-underline hover:text-red-600 hover:underline"
            >
              Attributions
            </a>
          </li>
          <li className="mb-2">
            <a 
              href="https://github.com/vintageplayer/marinara/blob/main/LICENSE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 no-underline hover:text-red-600 hover:underline"
            >
              License
            </a>
          </li>
        </ul>
      </div>

      {/* Version */}
      <div className="flex justify-center mb-8 leading-snug">
        <p className="flex-[40%] text-right text-gray-800 font-bold uppercase relative top-0.5 mr-5">
          Version
        </p>
        <ul className="flex-[55%] list-none ml-5 p-0">
          <li className="mb-2 text-gray-700">
            {version}
          </li>
        </ul>
      </div>

      {/* Disclaimer */}
      <p className="text-sm text-center leading-relaxed mt-16 mb-8 text-gray-600 w-3/4 mx-auto">
        Pomodoro® and The Pomodoro Technique® are trademarks of Francesco Cirillo. 
        Marinara is not affiliated or associated with or endorsed by Pomodoro®, 
        The Pomodoro Technique® or Francesco Cirillo.
      </p>
    </div>
  );
};

export default Feedback;