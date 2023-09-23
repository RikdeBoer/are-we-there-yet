# Are we there yet?
_A mini-thesaurus explaining software concepts through metaphors taken from daily life_

Originally designed to demonstrate how you can easily create a website powered by a 
GrpahQL database and not write any backend code. 
See this article on medium.com for more background and a step-by-step guide: 
"Productivity gains with GraphQL, auto-generated resolvers and APIs - Using AWS 
AppSync plus AWS Amplify as an example"

The site is live at https://are-we-there-yet.xyz

Only 2 hand-coded frontend (React) files drive the site: 
src/App.tsx
src/App.css
These two file replace files by the same names in a standard
React bootstrap environemnt, which you can create on your own 
machine using this comannd:

  npx create-react-app arewethereyet  --template typescript

All data lives on an AWS DynamoDB database, in the cloud.
This db is not publicly accessible for writing.

If you wish to make contributions to the code, please raise a PR.

If you have any suggestions for additional concepts, please raise an issue,
mentioning concept name, daily-life metaphor, description, "used-in" and names
of related concepts.
