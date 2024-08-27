import Alert from "./comp/Alert"
import GroupAvatars from "./comp/Avator"
import FloatingActionButtons from "./comp/Floating"
import Facebook from "./comp/Skel"
import ContinuousSlider from "./comp/Slider"
import Toa from "./comp/toast"
import BasicSwitches from "./comp/Switch"
import DataTable from "./comp/Table"
import BasicTextFields from "./comp/TextField"

const App = () => {
  return (
    <div>
      <Alert/>
      <GroupAvatars/>
      <Toa/>
      <FloatingActionButtons/>
      <Facebook/>
      <ContinuousSlider/>
      <BasicSwitches/>
      <DataTable/>
      <BasicTextFields/>
    </div>
  )
}

export default App
