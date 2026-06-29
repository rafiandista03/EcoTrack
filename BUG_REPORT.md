```markdown
# BUG REPORT

## Title

Delete button does not remove the selected waste record.

## Environment

- Application: EcoTrack v1.1.0
- Operating System: Windows 11
- Browser: Google Chrome 138+
- Backend: Node.js
- Database: SQLite3

## Steps to Reproduce

1. Open the EcoTrack application.
2. Add a new waste record.
3. Click the **Delete** button.
4. Refresh the page.

## Expected Behavior

The system should remove the selected waste record from the database and update the waste statistics immediately.

## Actual Behavior

The system does not remove the selected waste record, and the data remains visible after refreshing the page.

---

## Developer Reply

Hi team, thank you for reporting this issue.

We have checked the issue and found that the Delete request was not sent correctly to the backend API.

We will update the delete function, verify the API endpoint, and perform additional testing before the next release.
```
