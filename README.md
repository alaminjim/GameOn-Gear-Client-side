GAMEoN_GEAR

Live Site URL:

https://quiet-belekoy-ad3587.netlify.app

Features:

Authentication System: Users can register and log in using Email/Password or Google authentication. Secure login/logout system with profile display.

Dynamic Routing & Private Routes: Private routes for adding, viewing, updating, and managing sports equipment. Logged-in users stay authenticated even after page reloads.

Sports Equipment Management: Users can add, update, and delete their sports equipment with complete details like images, category, price, and stock status.

Responsive & User-Friendly Design: Fully responsive layout compatible with mobile, tablet, and desktop views.

Error Handling & Notifications: Uses toast notifications for error and success messages instead of default alerts.

Tech Stack:

Frontend: React.js, React Router, Tailwind CSS, Firebase Authentication

Backend: Node.js, Express.js, MongoDB

Deployment: Netlify/Surge (Client-side), Vercel (Server-side)

Pages & Functionalities:

1. Navbar:

GAMEoN_GEAR

Home

All Sports Equipment

Add Equipment (Private Route)

My Equipment List (Private Route)

Login/Register (Conditional Display)

2. Home Page:

Navbar & Footer

Banner with Image Slider

Featured Sports Equipment (6 Items, fetched using MongoDB limit operator)

Sports Categories Section

Additional Informative Sections

3. Authentication:

Login Page: Email/Password and Google Authentication with error handling

Register Page: Name, Email, PhotoURL, Password (Validation: at least 6 characters, uppercase & lowercase required)

4. Equipment Pages:

Add Equipment (Private Route): Form to add new equipment with all required fields.

All Sports Equipment: Table displaying all equipment with a "View Details" button.

View Details (Private Route): Displays complete details of a selected item in an elegant format.

My Equipment List (Private Route): Displays all equipment added by the logged-in user with Update/Delete options.

Update Equipment (Private Route): Editable form to update existing equipment details.

5. Additional Features:

404 Page: Custom 404 page for non-existing routes.

Loading Spinners: Displayed while data is being fetched.

Security Measures: Firebase config keys and MongoDB credentials hidden via environment variables.
