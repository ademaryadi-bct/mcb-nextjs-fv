import ManageSlideShow from '@views/admins/dashboard/manage-homepage'

// Server Action Imports
import { getUserData } from '@/app/server/actions'

const ManageSlideShowAdmins = async () => {
  const data = await getUserData()

  return <ManageSlideShow userData={data} />
}

export default ManageSlideShowAdmins
