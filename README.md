# Road-to-CA

## GitHub Pages deployment

The static site entry point and assets are in the repository root. `.github/workflows/static.yml` publishes that root to GitHub Pages on pushes to `main` and supports manual runs.

Keep the repository private. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source. Private-repository Pages availability depends on the account plan. The deployed website itself is public, so HTML, JavaScript, and other published assets can be viewed by site visitors even though the GitHub repository remains private.

## Private feedback setup

The site feedback form and student dashboard use Google Authentication and Cloud Firestore. Before those features can be used:

1. In Firebase Authentication, enable Google as a sign-in provider.
2. Add `mjhmbrur-mj.github.io` to Authentication's authorized domains. Add `localhost` if testing locally.
3. Create a Cloud Firestore database.
4. Publish the rules in `firestore.rules` using the Firebase Console's Firestore Rules tab, or run `firebase deploy --only firestore:rules --project feedback-for-road-to-ca` with the Firebase CLI.

The owner-only inbox is available at `feedback-inbox.html`. Firestore rules restrict inbox access to the verified Google account `mjhmbrur@gmail.com`; the inbox URL itself is not an access control.

## Student dashboard

Students can sign in from `profile.html` with Google. Sign-in persists in the current browser. On sign-in, the site creates or updates the student's private `users/{uid}` profile document. Submitted Assurance chapter tests and BTF chapter tests with question banks are saved to `users/{uid}/testResults` and shown in dashboard history. These chapter tests generate topic-level SWOT summaries from question wording and explanations. Premium reports open as a one-page, A4-formatted preview with candidate photo, site logo, score, percentage, result grade and reference scale, and a topic-performance table; the preview's **Download PDF** button opens the browser print dialog, where the user can choose **Save as PDF**. The report uses the supplied Certificate Level grading bands (45% pass, 65% distinction). Reports are blurred and downloads are hidden by default, with a Premium notice. The verified Google account `mjhmbrur@gmail.com` is temporarily allowlisted for Premium UI testing and receives a distinct Premium Learning Dashboard with unlocked reports; this client-side allowlist is not secure access control and must be replaced with a trusted server-verified premium/authorized-user source before production use. Automatic topic classification is based on the existing question bank and should be reviewed as topics or questions change. Existing results in `users/{uid}/activities` are also displayed for continuity. Students can take quizzes without signing in, but those attempts will not be saved to the dashboard.

The dashboard keeps a per-user copy of recent activity in that browser and shows it immediately on return, while refreshing from Firestore in the background. The first visit on a browser still needs to load results from Firestore.

Publish the updated `firestore.rules` before enabling profile and test-result storage or topic-report saving. Rules restrict profile and test-result access to the signed-in owner. The current quiz modules support Assurance and BTF; the dashboard displays all seven Certificate Level subjects in its summary.

## Installable mobile app

The site can be installed from a supported mobile browser as a Progressive Web App. Use the **Install mobile app** button at the end of the website pages: supported Android browsers open their native install prompt, while iPhone and iPad users get **Share → Add to Home Screen** instructions. Android browsers without a native prompt show the browser-menu installation steps. The button installs the website as an app; it is not a separate app-store download. New mobile visitors see the install offer on their first visit; the existing offer also remains available after three visits and, if dismissed, waits five more visits before appearing again. The service worker caches the main pages and app shell for basic offline access.
