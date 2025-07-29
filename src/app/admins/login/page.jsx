import Login from '@views/Login'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const LoginAdmins = async () => {
  const mode = await getServerMode()

  return <Login mode={mode} />
}

export default LoginAdmins
