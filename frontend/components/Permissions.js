import { Query, Mutation } from 'react-apollo';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import Table from './styles/Table';
import SickButton from './styles/SickButton';
import PropTypes from 'prop-types';

const possiblePermissions = [
  'ADMIN',
  'USER',
  'ITEMCREATE',
  'ITEMUPDATE',
  'ITEMDELETE',
  'PERMISSIONUPDATE',
];

const UPDATE_PERMISSIONS_MUTATION = gql`
  mutation updatePermissions($permissions: [Permission], $userId: ID!) {
    updatePermissions(permissions: $permissions, userId: $userId) {
      id
      permissions
      name
      email
    }
  }
`;

const ALL_USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
      permissions
    }
  }
`;

const Permissions = props => (
  <Query query={ALL_USERS_QUERY}>
    {({ data, loading, error }) => (
      <div>
        <Error error={error} />
        <div>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                {possiblePermissions.map(permision => 
                  <th key={permision}>{permision}</th>)}
                <th>👇🏻</th>
              </tr>
            </thead>
            <tbody>{data.users.map(user =>  <UserPermissions user={user} key={user.id} />)}</tbody>
          </Table>
        </div>
      </div>
    )}
  </Query>
);

class UserPermissions extends React.Component {
  // Typically you might use PropTypes.object.isRequired.  
  // Will be shaping the data since we know it will always have the info. (can't create a user without that info)
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      id: PropTypes.string,
      permissions: PropTypes.array,
    }).isRequired,
  };
  // Seeding the state = ok to use props in the state because if any updates to the date occur it comes from with in this function
  state = {
    permissions: this.props.user.permissions,
  };

  handlePermissionChange = (e, updatePermissions) => {
    const checkbox = e.target;
    console.log(e.target.value)
  // make a copy for the permission array
  let updatedPermissions = [...this.state.permissions]
  // // check if it is checked or not
    if(checkbox.checked) {
      updatedPermissions.push(checkbox.value)
    } else {
      updatedPermissions = updatedPermissions.filter(permission => permission !== checkbox.value);
    }
    // use a call back to run updatePermissions in order to ensure it will run after the state is set
    this.setState({ permissions: updatedPermissions }, updatePermissions);
    console.log(updatedPermissions)
  }
  render() {
    const user = this.props.user;
    return (
      <Mutation mutation={UPDATE_PERMISSIONS_MUTATION} 
      variables={{
        permissions: this.state.permissions,
        userId: this.props.user.id
      }} >
        {(updatePermissions, { loading, error }) => (
          <>
            {error && <tr><td colspan="8"><Error error={error} /></td></tr>}
            < tr >
              <td>{user.name}</td>
              <td>{user.email}</td>
              {possiblePermissions.map(permission => (
                <td key={permission}>
                  <label htmlFor={`${user.id}-permission-${permission}`}>
                    <input
                      id={`${user.id}-permission-${permission}`}
                      type="checkbox"
                      checked={this.state.permissions.includes(permission)}
                      value={permission}
                      onChange={(e) => 
                        this.handlePermissionChange(e, updatePermissions)
                      }
                    />
                  </label>
                </td>
              ))}
              <td>
                <SickButton type="button" disabled={loading} onClick={updatePermissions}>
                  Updat{loading ? 'ing' : 'e'}
                </SickButton>
              </td>
            </tr>
          </>
        )
        }
      </Mutation>
    );
  }
}

export default Permissions;