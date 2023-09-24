# Are we there yet?
_A mini-thesaurus explaining software concepts through metaphors taken from daily life_

https://are-we-there-yet.xyz

Originally designed to demonstrate how you can easily create a website powered by a 
GrpahQL database and not write any backend code. 

See this article on https://medium.com for more background and a step-by-step guide: 
_"Productivity gains with GraphQL, auto-generated resolvers and APIs - Using AWS 
AppSync + AWS Amplify as an example"_

This repository adds two files, App.tsx and App.css to a standard React
bootstrap environment.
You can create this setup on your own machine as follows:
```
  mkdir are-we-there-yet
  cd are-we-there-yet
  npx  create-react-app  arewethereyet  --template typescript
  git init
  git remote add origin https://github.com/RikdeBoer/are-we-there-yet
  git fetch
  git checkout -f origin/main -b main
```  
Then follow the steps in the above article to create a DynamoDB and hook it
up to your React code, with all backend code (e.g. resolvers) automagically
generated.

If you wish to make contributions to the code, please raise a PR.

If you have any suggestions for additional concepts, please raise an issue,
mentioning concept name, daily-life metaphor, description, "used-in" and names
of related concepts.
