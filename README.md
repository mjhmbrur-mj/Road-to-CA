# Road-to-CA

## Private feedback setup

The site feedback form uses Google Authentication and Cloud Firestore. Before feedback can be submitted:

1. In Firebase Authentication, enable Google as a sign-in provider.
2. Add `mjhmbrur-mj.github.io` to Authentication's authorized domains. Add `localhost` if testing locally.
3. Create a Cloud Firestore database.
4. Publish the rules in `firestore.rules` using the Firebase Console's Firestore Rules tab, or run `firebase deploy --only firestore:rules --project feedback-for-road-to-ca` with the Firebase CLI.

The owner-only inbox is available at `feedback-inbox.html`. Firestore rules restrict inbox access to the verified Google account `mjhmbrur@gmail.com`; the inbox URL itself is not an access control.