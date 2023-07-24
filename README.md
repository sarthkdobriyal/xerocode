# Xerocodee AI Landing Page

Welcome to Xerocodee AI - the ultimate code builder that empowers development teams to create stunning websites effortlessly. This repository contains the code for the Xerocodee AI landing page. Below, you'll find instructions on how to operate and set up the website.

## Technologies Used

- Next.js
- React.js
- MongoDB
- Tailwind CSS
- Framer Motion
## Features

- Attractive landing page showcasing Xerocodee AI features.
- Join Waitlist button, taking users to a user form.
- Fully validated user form with smooth UI animations built using Framer Motion.
- User details are saved in the MongoDB database.


## Prerequisites

Before you proceed, ensure you have the following prerequisites installed on your machine:

- Node.js (https://nodejs.org)

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/sarthkdobriyal/xerocodee-landing-page.git
cd xerocodee-landing-page
```

2. Install the required Node.js packages:

```bash
npm install
```

3. Set up MongoDB:

   - Ensure MongoDB is installed and running on your system.
   - Create a database named "xerocodee" and a collection named "waitlist" to store user data.

4. Create a `.env.local` file in the project root directory with the following content:

```plaintext
MONGODB_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

## Usage

To start the development server, run the following command:

```bash
npm run dev
```

The landing page should now be accessible at `http://localhost:3000`.


## Feedback and Contributions

We welcome your feedback and contributions to make Xerocodee AI even better. If you encounter any issues or have suggestions for improvements, please open an issue on this GitHub repository.

Let's build amazing websites together with Xerocodee AI! 🚀

---

