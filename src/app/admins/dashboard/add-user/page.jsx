import AddUsers from '@views/admins/dashboard/manage-user/add-user/FormAddUser'

// Server Action Imports

import { getUserData } from '@/app/server/actions'

const AddUsersAdmins = async () => {
  const data = await getUserData()

  return <AddUsers />
}

export default AddUsersAdmins
