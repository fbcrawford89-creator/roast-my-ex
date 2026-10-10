# Roast My Ex

A clean AI-powered website that generates funny, savage roast text for an ex and turns it into social-ready ad copy.

## Features
- Page layout and product branding for "Roast My Ex"
- AI roast generator form with name, breakup details, tone, and focus
- generated roast output plus ad caption
- responsive modern dark UI
- ready for OpenAI API integration

## Getting started

1. Install dependencies:
   npm install
2. Create a local environment file:
   cp .env.example .env.local
3. Add your OpenAI API key:
   OPENAI_API_KEY=your_key_here
4. Start the app:
   npm run dev
5. Open http://localhost:3000

## Important note
This project currently expects an OpenAI API key to generate live roasts. Without it, the app will return a server error.

## Project structure
- app/page.tsx — homepage UI
- app/api/roast/route.ts — AI roast generation route
- app/layout.tsx — root layout
- app/globals.css — styling
