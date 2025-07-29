import ManageUser from '@views/admins/dashboard/manage-user'

// Server Action Imports

import { getUserData } from '@/app/server/actions'

const ManageUserAdmins = async () => {
  const data = await getUserData()

  return <ManageUser userData={data} />
}

export default ManageUserAdmins
