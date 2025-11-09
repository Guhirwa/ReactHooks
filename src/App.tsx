import SectionSeparator from "./Components/SectionSeparator"
import SectionTitle from "./Components/SectionTitle"
import UseEffect from "./Components/UseEffect"
import UseState from "./Components/UseState"

const App = () => {
  return (
    <>
      <SectionTitle label="useState Implementation" description="useState used by component to store informations"/>
      <UseState />
      <SectionSeparator />
      <SectionTitle label="UseEffect Implementation" description="useEffect is a react hook used to manage the side effects. Side effects are the activities which took place outside of react environment like manual DOM manupilation, fetching data throught API, Subscription, setTimeout, SetInterval, Etc ....."/>
      <UseEffect />
    </>
  )  
}

export default App
