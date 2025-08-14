## Healthcare Dashboard

A responsive healthcare dashboard built with Next.js (App Router), TypeScript, Tailwind CSS, and Chart.js via `react-chartjs-2`. It fetches patient data from a secured API and visualizes diagnosis history alongside key patient details and lab results.

### Tech Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS 3
- Chart.js 4 + `react-chartjs-2`

### Getting Started

1. Clone the repository

```sh
git clone https://github.com/meshach567/healthcare.git
cd healthcare
```

2. Install dependencies

```sh
npm install
```

3. Configure environment variables (see below)

4. Run the development server

```sh
npm run dev
```

Open http://localhost:3000 in your browser.

### Environment Variables

The app fetches from a protected endpoint using Basic Auth. Create a `.env.local` in the project root:

```env
userName=your_username
passWord=your_password
```

These are referenced in `src/hooks/useFetch.ts`.

### Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

Common:

- Dev: `npm run dev`
- Build: `npm run build && npm run start`
- Lint: `npm run lint`

### Features

- Grid-based dashboard layout (`.testimonial-grid`) with responsive breakpoints
- Patient list (`src/components/profileName/Patient.tsx`)
- Diagnosis history chart (`src/components/profilecard/ProfileCard.tsx`)
- Diagnostic list (`src/components/profileList/list.tsx`)
- Patient info panel (`src/components/profileHistory/history.tsx` + `historyChild.tsx`)
- Lab results summary (`src/components/profileLab/lab.tsx`)

### Project Structure

```text
src/
  app/
    layout.tsx          # Root layout
    page.tsx            # Dashboard page
    globals.css         # Global styles and grid
  components/
    header/navbar.tsx
    profileName/Patient.tsx
    profilecard/ProfileCard.tsx
    profileHistory/{history.tsx,historyChild.tsx}
    profileLab/lab.tsx
    profileList/list.tsx
  hooks/
    useFetch.ts              # Fetch from API with Basic Auth
    useThirdIndexValues.ts   # Extracts fields from 3rd item in array
  utils/
    intefaces.ts
```

### Notes

- `useFetch` requests `https://fedskillstest.coalitiontechnologies.workers.dev/` with Basic Auth from env vars.
- The chart currently uses a static dataset to reflect the intended style.
- Tailwind config includes custom palette and typography in `tailwind.config.js`.


