'use client';

import * as Sentry from '@sentry/nextjs';

export default function GlobalError({ error }) {
  // エラーをSentryに送信
  Sentry.captureException(error);

  return (
    <html lang="en">
      <body>
        <h2>An unknown error occurred</h2>
        <p>{error.message}</p>
        <button
          type="button"
          onClick={() => Sentry.showReportDialog({ eventId: error.eventId })}
        >
          Send feedback
        </button>
      </body>
    </html>
  );
}
