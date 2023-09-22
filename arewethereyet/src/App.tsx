import { API, GraphQLResult } from '@aws-amplify/api'
import { listConcepts } from './graphql/queries'
import config from './aws-exports'
import { useState } from 'react'

import './App.css'

API.configure(config)

const getConceptList = async (): Promise<GraphQLResult<any>> =>
  API.graphql({ query: listConcepts, variables: {} });

const graphqlResponse = await getConceptList()
const concepts = graphqlResponse.data.listConcepts?.items

const App = () => {
  const [conceptNo, setConceptNo] = useState(0)
  const currentItem = concepts[conceptNo]
  return (
    <>
      <h1>Are we there yet?</h1>
      <em>A mini-thesaurus explaining IT concepts through daily life metaphors</em>
      <div>
        <button onClick={() => { setConceptNo(conceptNo <= 0 ? concepts.length - 1 : conceptNo - 1) }}>&lt;&nbsp; Previous</button>
        <button onClick={() => { setConceptNo(conceptNo >= concepts.length - 1 ? 0 : conceptNo + 1) }}>Next &nbsp;&gt;</button>
      </div>
      <dl>
        <dt>Concept #{conceptNo + 1}</dt>
        <dd>{ currentItem.name }</dd>
        <dt>Metaphor</dt>
        <dd>{ currentItem.metaphor }</dd>
        <dt>Description</dt>
        <dd style={{ whiteSpace:'pre-line' }}>{ currentItem.description }</dd>
        <dt>Used in</dt>
        <dd>{ currentItem.usedIn }</dd>
        <dt>Related concepts</dt>
        <dd>{ currentItem.related?.join(', ') }</dd>
      </dl>
    </>
  )
}

export default App;
