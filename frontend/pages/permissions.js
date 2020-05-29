import PleaseSignIn from '../components/PleaseSignIn';
import Permissions from '../components/Permissions';


const PermissionsPage = props => (
  <div>
    <h1>Manage Permissions</h1>
    <PleaseSignIn>
      <Permissions />
    </PleaseSignIn>
  </div>
)

export default PermissionsPage;