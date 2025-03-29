# Memory Card Game

Hey there! 👋 This is a super simple memory card game I built while learning React. It's nothing fancy, but it works!

## What's this game about?

It's a classic memory matching game where you:
- Flip cards to see what emoji is hiding underneath
- Try to find all the matching pairs
- Win the game when all pairs are found
- Challenge yourself to finish in fewer moves

## How to play

1. Just click on any card to flip it
2. Click another card to try to find a match
3. If they match, awesome! They'll turn green and stay flipped
4. If they don't match, no worries - they'll flip back down
5. Keep going until you find all the matches
6. Try to beat your own score by using fewer moves

## Cool stuff I learned as a beginner

Making this game taught me some basic React concepts:

- **useState**: How to create and update data (like keeping track of flipped cards)
- **useEffect**: How to run code when something changes (like checking if game is over)
- **Conditional rendering**: Showing different things based on game state
- **Event handling**: Making stuff happen when cards are clicked
- **CSS transitions & animations**: Making cards flip and adding cool effects

## How to run the game

Just run these commands:

```
cd my-game-app
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## How to deploy the game

You can deploy this game to various hosting platforms. Here's how to do it:

### Build the project
First, create an optimized build of your game:
```
npm run build
```

This will create a `dist` folder with your compiled app.

### Deploying to Netlify
1. Sign up for a free [Netlify](https://www.netlify.com/) account
2. Click "Add new site" → "Import an existing project"
3. Connect to your GitHub (or drag and drop your dist folder)
4. If connecting to GitHub:
   - Select your repository
   - Set build command to: `npm run build`
   - Set publish directory to: `dist`
5. Click "Deploy site"

### Deploying to Vercel
1. Sign up for a free [Vercel](https://vercel.com/) account
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. It should automatically detect Vite
5. Click "Deploy"

### Fixing 404 errors
If you see 404 errors when refreshing or sharing links, the changes in the `vite.config.js` and `public/_redirects` files should fix those issues!

## Want to make changes?

Go for it! Here are some ideas:
- Add more emojis to make it harder
- Add a timer to race against the clock
- Add sound effects (that'd be cool!)
- Change the card colors or design

This was my first simple React game. Hope you enjoy it! 😊 