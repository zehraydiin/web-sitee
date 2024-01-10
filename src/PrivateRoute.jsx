
  export default function PrivateRoute({user,children})
{

    if (!user?.id)
    {
         return <Navigate to= "/" replace />
    }

    return children

}