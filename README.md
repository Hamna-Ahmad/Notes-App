# Markdown Notes App
This is a Markdown Notes App built using React. It allows users to create, update, and delete markdown notes.

## Features
- Create a new note with a default title and body
- Update the content of a note in real-time
- Delete a note
- Automatically save changes to a note after a 500ms delay
- Display a list of all notes in the sidebar
- Highlight the currently selected note in the sidebar
- Preview the markdown content using the ReactMde component

## Prerequisites
Before running the app, make sure you have the following installed:

- React
- Firebase (Firestore)

## Installation
1. Clone the repository:

   ```
   git clone https://github.com/your-username/quiz-app.git
2. Navigate to the project directory:

   ```
   cd quiz-app
3. Install the dependencies:

   ```
   npm install
4. Start the development server:

   ```
   npm start
5. Open your browser and visit http://localhost:3000 to see the app running.

## Dependencies
The Markdown Notes App uses the following dependencies:

- React: A JavaScript library for building user interfaces.
- react-split: A library for creating resizable split views.
- nanoid: A small utility for generating unique IDs.
- firebase/firestore: A module from the Firebase SDK for accessing and managing Firestore, a NoSQL database provided by Firebase.
- react-mde: A React-based Markdown editor component.
- showdown: A JavaScript Markdown to HTML converter.

## Configuration
To use Firebase Firestore, you need to provide your Firebase configuration in the firebase.js file. Replace the placeholders with your actual Firebase project credentials.

   ```
   import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  // Replace with your Firebase project configuration
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const notesCollection = collection(db, "notes")

export { db }

   ```

## How It Works
The app consists of three main components:

- App: The root component that manages the state of the notes and handles CRUD operations.
- Editor: A component that allows editing the content of a note using the ReactMde component.
- Sidebar: A component that displays the list of notes and handles note selection and deletion.
The App component initializes the state variables and sets up the Firebase Firestore connection. It also handles the creation, update, and deletion of notes. The notes are stored in an array called notes, and the currently selected note is tracked using the currentNoteId variable.

The Editor component renders a textarea using the ReactMde component, allowing users to edit the content of the selected note. The component uses the Showdown library to convert the markdown content into HTML for previewing.

The Sidebar component displays the list of notes in the sidebar. Each note is rendered as a clickable title. The currently selected note is highlighted, and users can click on a note to select it. Users can also delete a note by clicking on the trash icon next to the note title.

## Contributing
Contributions are welcome! If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature: git checkout -b feature/your-feature-name.
3. Make the necessary modifications and additions.
4. Test your changes thoroughly.
5. Commit your changes: git commit -m 'Add some feature'.
6. Push to the branch: git push origin feature/your-feature-name.
7. Create a pull request detailing your changes.

## Support
For any issues, concerns, or suggestions, please contact me at official.hamna.ahmad@gmail.com.

## License 
This project is licensed under the MIT License.

Feel free to modify and customize the README file according to your specific project details and requirements.

## Conclusion
The Markdown Notes App provides a simple and intuitive interface for managing markdown notes. Users can create, edit, and delete notes with ease. The app leverages the power of React and Firebase Firestore to provide real-time updates and data persistence. Feel free to customize and enhance the app according to your needs.
