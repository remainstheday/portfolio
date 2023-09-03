Platforms and ecosystems in the web development community have come a long way since 2013 when ReactJS first launched. Now an experienced front-end developer can manage API's, CI/CD, and databases all from a dashboard in Vercel. This is one example of how we were able to launch a product with actual customers using cloud platforms to the fullest.

While building a product entirely on cloud platforms might sound risky, the speed at which you can go to market is significantly faster over developing everything from scratch. Really the only downside I have seen thus far is "vendor lock-in" which seems inevitable these days.

### Rapid Development
From the start we decided to use the NextJS ecosystem which works really well if you use Vercel for hosting. At Logly we can prototype new features in a matter of days with Supabase for the backend and Next/React/Tailwind for the UI, in fact our sprints are set to 1 week intervals and we deploy to production at least once a week.

All of our code lives in a monorepo with a relatively large folder of reusable ReactJS components. For data fetching we just use the Supabase API inside our server components and pass the initial props down on page load. No more GraphQL schema or boilerplate CRUD calls in Node. Which reminds me Supabase offers type safety for their API's!

Any images or audio files get sent to Cloudinary which optimizes and caches them on a CDN. It also gives us back a nice API to fetch assets from our server components as needed. 

With all these conventions we are able to build a real-time experience using mostly static server generated code. Any client side logic is handled at the component level, this allows us to have loading and error states for each UI element without breaking the entire page if one component has a failed process.

### Environments and Builds
With Vercel's CLI we are able to simulate production deployments in local development once a new feature is ready for testing. No more surprises in production! I considered leveraging Docker but honestly have no need for it with this setup. Thus far I have been able to replicate any remote build errors locally. 
```
# Steps to simulate a production build locally
npm ci
yarn build
yarn test
yarn start
```

Logly only has two remote environments, `production` and `development` , these environments are synced across our databases, git branches, and Vercel projects. If we have a new feature to work on I create a feature branch from `development` while still using the dev database and dev build pipeline.  Vercel's [preview URL's](https://vercel.com/docs/workflow-collaboration/comments/how-comments-work) are also a game changer since they allow us to test and collect feedback before going live. 

### Business Automation
Most of our business automation evolves around Slack. If a visitor signs up on [Logly](https://logly.world)  we use a [Nextjs Route Handler](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) and the Slack API to notify the team on Slack that someone should reach out with a personalized email using SendGrid. Similarly if a user upgrades to Logly Premium we have Stripe Webhooks to notify the team of a successful payment. 

### Links & Resources
- **[Vercel](https://vercel.com/)** - application hosting and a suite of tools like analytics, build logs, domains, etc.  
- **[Cloudinary](https://cloudinary.com/)** - file hosting with optimizations and image moderation capabilities.
- **[Supabase](https://supabase.com/)** - Database management and backend API's. 
- **[Github Actions](https://github.com/features/actions)** - automate tasks like triggering a Vercel build for every PR and notifying Slack once it completes. 
- **[Turbo.build/repo](https://turbo.build/)** - Run the builds in our monorepo and cache common code.
- **[Tailwind](https://tailwindcss.com/)** - efficient UI styling. 
- **[Playwright](https://playwright.dev/)** - End to End testing across all major browsers.