
import * as Sentry from "@sentry/node"
import { nodeProfilingIntegration }  from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://602b72c7073d7b7a82ac7a1fb8c584d2@o4511452423847936.ingest.de.sentry.io/4511452433285201",
  integrations: [
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()
  ],
  
  profileSessionSampleRate: 1.0,
  
  profileLifecycle: 'trace',
  
  sendDefaultPii: true,
});


Sentry.startSpan({
  name: "My Span",
}, () => {
  
});