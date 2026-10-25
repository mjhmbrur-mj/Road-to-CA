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

Students can sign in from `profile.html` with Google. Sign-in persists in the current browser. On sign-in, the site creates or updates the student's private `users/{uid}` profile document. Submitted Assurance chapter tests and BTF timed practice tests are saved to `users/{uid}/testResults` and shown in the dashboard history. Existing results in `users/{uid}/activities` are also displayed for continuity. Students can take quizzes without signing in, but those attempts will not be saved.

The dashboard keeps a per-user copy of recent activity in that browser and shows it immediately on return, while refreshing from Firestore in the background. The first visit on a browser still needs to load results from Firestore.

Publish the updated `firestore.rules` before enabling profile and test-result storage. Rules restrict profile and test-result access to the signed-in owner. The current quiz modules support Assurance and BTF; the dashboard displays all seven Certificate Level subjects in its summary.