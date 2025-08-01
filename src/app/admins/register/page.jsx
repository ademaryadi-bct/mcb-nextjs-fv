import Register from '@views/Register'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const RegisterAdmins = async () => {
  const mode = await getServerMode()

  return <Register mode={mode} />
}

export default RegisterAdmins
